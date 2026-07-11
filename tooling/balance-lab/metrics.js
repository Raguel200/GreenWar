"use strict";
/* metrics.js — agrégation des résultats, variance inter-seeds, alertes de régression. */

/* Seuils d'alerte (documentés dans docs/balance/BALANCE_LAB_ARCHITECTURE.md) */
const THRESHOLDS = {
  dominationWinrate: 0.65,   // une faction gagne trop
  deadFactionWinrate: 0.20,  // une faction ne gagne presque jamais
  seatAdvantage: 0.10,       // |winrate premier joueur - 0.5| trop grand
  minAvgRounds: 3.0,         // parties trop courtes
  maxAvgRounds: 5.8,         // parties trop longues (cap moteur : 6)
  maxUnspentAvg: 8.0,        // ressources dormantes moyennes en fin de partie
  mandatoryUnitShare: 0.60,  // une unité représente trop des recrutements de sa faction
  crushingCauseShare: 0.80,  // une cause de victoire écrase les autres
  maxBlockedShare: 0.05,     // parties sans vainqueur
  minGamesForAlerts: 50,     // en dessous, les alertes sont indicatives seulement
};

function mean(xs) { return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0; }
function stddev(xs) {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  return Math.sqrt(xs.reduce((a, x) => a + (x - m) ** 2, 0) / (xs.length - 1));
}

function aggregate(results) {
  const n = results.length;
  const winsJ1 = results.filter((r) => r.winner === 1).length;
  const winsJ2 = results.filter((r) => r.winner === 2).length;
  const blocked = results.filter((r) => r.blocked).length;

  const causes = {};
  results.forEach((r) => { causes[r.reasonCategory] = (causes[r.reasonCategory] || 0) + 1; });

  const rounds = results.map((r) => r.rounds);
  const roundsDist = {};
  rounds.forEach((x) => { roundsDist[x] = (roundsDist[x] || 0) + 1; });

  const firstSeat = results.filter((r) => r.firstPlayerWon !== null);
  const firstSeatWins = firstSeat.filter((r) => r.firstPlayerWon).length;

  const sumKeyed = (field) => {
    const out = {};
    results.forEach((r) => Object.entries(r[field] || {}).forEach(([k, v]) => { out[k] = (out[k] || 0) + v; }));
    return out;
  };
  const recruitJ1 = {}, recruitJ2 = {};
  results.forEach((r) => {
    Object.entries(r.recruitments?.j1 || {}).forEach(([k, v]) => { recruitJ1[k] = (recruitJ1[k] || 0) + v; });
    Object.entries(r.recruitments?.j2 || {}).forEach(([k, v]) => { recruitJ2[k] = (recruitJ2[k] || 0) + v; });
  });

  const decisive = {};
  results.forEach((r) => { if (r.decisiveUnit) decisive[r.decisiveUnit.type] = (decisive[r.decisiveUnit.type] || 0) + 1; });

  // Variance inter-seeds : winrate J2 par tranche de 10 % du lot.
  const chunkCount = Math.min(10, Math.max(2, Math.floor(n / 10)));
  const chunkSize = Math.ceil(n / chunkCount);
  const chunkWinrates = [];
  for (let c = 0; c < n; c += chunkSize) {
    const chunk = results.slice(c, c + chunkSize);
    if (chunk.length) chunkWinrates.push(chunk.filter((r) => r.winner === 2).length / chunk.length);
  }

  const avg = (fn) => mean(results.map(fn));
  return {
    games: n,
    winrate: { J1: winsJ1 / n, J2: winsJ2 / n, none: blocked / n },
    wins: { J1: winsJ1, J2: winsJ2, blocked },
    causes,
    rounds: { mean: mean(rounds), stddev: stddev(rounds), dist: roundsDist },
    seatAdvantage: {
      firstSeatWinrate: firstSeat.length ? firstSeatWins / firstSeat.length : null,
      sample: firstSeat.length,
    },
    resources: {
      producedAvg: { J1: avg((r) => r.resources.produced.j1), J2: avg((r) => r.resources.produced.j2) },
      spentAvg: { J1: avg((r) => r.resources.spent.j1), J2: avg((r) => r.resources.spent.j2) },
      unspentAvg: { J1: avg((r) => r.resources.unspent.j1), J2: avg((r) => r.resources.unspent.j2) },
    },
    passiveTurns: {
      J1: results.reduce((a, r) => a + (r.passiveTurns.j1 || 0), 0),
      J2: results.reduce((a, r) => a + (r.passiveTurns.j2 || 0), 0),
    },
    unitsLeftAvg: { J1: avg((r) => r.unitsLeft.j1), J2: avg((r) => r.unitsLeft.j2) },
    recruitments: { J1: recruitJ1, J2: recruitJ2 },
    attacksByType: sumKeyed("attacksByType"),
    damageByType: sumKeyed("damageByType"),
    deathsByType: sumKeyed("deathsByType"),
    decisiveUnits: decisive,
    seedVariance: { chunkWinratesJ2: chunkWinrates, stddev: stddev(chunkWinrates) },
  };
}

/* Alertes de régression. Retourne [{level, code, message}] */
function checkAlerts(agg, thresholds = THRESHOLDS) {
  const alerts = [];
  const T = thresholds;
  const push = (level, code, message) => alerts.push({ level, code, message });
  const small = agg.games < T.minGamesForAlerts;

  for (const [f, wr] of Object.entries({ J1: agg.winrate.J1, J2: agg.winrate.J2 })) {
    if (wr > T.dominationWinrate)
      push("ALERTE", "FACTION_DOMINANTE", `${f} gagne ${(wr * 100).toFixed(1)}% des parties (seuil ${T.dominationWinrate * 100}%).`);
    if (wr < T.deadFactionWinrate)
      push("ALERTE", "FACTION_MORTE", `${f} ne gagne que ${(wr * 100).toFixed(1)}% des parties (seuil ${T.deadFactionWinrate * 100}%).`);
  }
  if (agg.seatAdvantage.firstSeatWinrate !== null) {
    const dev = Math.abs(agg.seatAdvantage.firstSeatWinrate - 0.5);
    if (dev > T.seatAdvantage)
      push("ALERTE", "AVANTAGE_SIEGE", `Le premier joueur gagne ${(agg.seatAdvantage.firstSeatWinrate * 100).toFixed(1)}% (écart ${(dev * 100).toFixed(1)} pts, seuil ${T.seatAdvantage * 100} pts).`);
  }
  if (agg.rounds.mean < T.minAvgRounds)
    push("ALERTE", "PARTIES_COURTES", `Durée moyenne ${agg.rounds.mean.toFixed(2)} rounds (< ${T.minAvgRounds}).`);
  if (agg.rounds.mean > T.maxAvgRounds)
    push("ALERTE", "PARTIES_LONGUES", `Durée moyenne ${agg.rounds.mean.toFixed(2)} rounds (> ${T.maxAvgRounds}).`);
  for (const [f, v] of Object.entries(agg.resources.unspentAvg)) {
    if (v > T.maxUnspentAvg)
      push("ALERTE", "RESSOURCES_DORMANTES", `${f} termine avec ${v.toFixed(2)} ressources non dépensées en moyenne (seuil ${T.maxUnspentAvg}).`);
  }
  for (const [f, rec] of Object.entries(agg.recruitments)) {
    const total = Object.values(rec).reduce((a, b) => a + b, 0);
    for (const [type, count] of Object.entries(rec)) {
      if (total >= 10 && count / total > T.mandatoryUnitShare)
        push("ALERTE", "UNITE_OBLIGATOIRE", `${type} représente ${((count / total) * 100).toFixed(1)}% des recrutements de ${f} (seuil ${T.mandatoryUnitShare * 100}%).`);
    }
  }
  const causeTotal = Object.values(agg.causes).reduce((a, b) => a + b, 0);
  for (const [cause, count] of Object.entries(agg.causes)) {
    if (causeTotal && count / causeTotal > T.crushingCauseShare)
      push("ALERTE", "CAUSE_ECRASANTE", `La cause "${cause}" représente ${((count / causeTotal) * 100).toFixed(1)}% des fins de partie (seuil ${T.crushingCauseShare * 100}%).`);
  }
  if (agg.winrate.none > T.maxBlockedShare)
    push("ALERTE", "PARTIES_BLOQUEES", `${(agg.winrate.none * 100).toFixed(1)}% de parties sans vainqueur (seuil ${T.maxBlockedShare * 100}%).`);

  if (small && alerts.length)
    push("INFO", "ECHANTILLON_FAIBLE", `Seulement ${agg.games} parties : alertes indicatives (minimum recommandé ${T.minGamesForAlerts}).`);
  return alerts;
}

/* Compare deux agrégats (baseline vs expérience). */
function compareAggregates(base, exp) {
  const pt = (x) => (x * 100).toFixed(1) + "%";
  const d = (a, b, digits = 1) => ((b - a) >= 0 ? "+" : "") + (b - a).toFixed(digits);
  return {
    winrateJ1: { avant: pt(base.winrate.J1), apres: pt(exp.winrate.J1), delta: d(base.winrate.J1 * 100, exp.winrate.J1 * 100) + " pts" },
    winrateJ2: { avant: pt(base.winrate.J2), apres: pt(exp.winrate.J2), delta: d(base.winrate.J2 * 100, exp.winrate.J2 * 100) + " pts" },
    roundsMean: { avant: base.rounds.mean.toFixed(2), apres: exp.rounds.mean.toFixed(2), delta: d(base.rounds.mean, exp.rounds.mean, 2) },
    firstSeat: {
      avant: base.seatAdvantage.firstSeatWinrate !== null ? pt(base.seatAdvantage.firstSeatWinrate) : "n/a",
      apres: exp.seatAdvantage.firstSeatWinrate !== null ? pt(exp.seatAdvantage.firstSeatWinrate) : "n/a",
    },
    unspentJ1: { avant: base.resources.unspentAvg.J1.toFixed(2), apres: exp.resources.unspentAvg.J1.toFixed(2) },
    unspentJ2: { avant: base.resources.unspentAvg.J2.toFixed(2), apres: exp.resources.unspentAvg.J2.toFixed(2) },
    causes: { avant: base.causes, apres: exp.causes },
  };
}

module.exports = { aggregate, checkAlerts, compareAggregates, THRESHOLDS, mean, stddev };
