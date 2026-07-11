"use strict";
/* report.js — exports JSON, CSV et Markdown des lots de simulation. */
const fs = require("fs");
const path = require("path");

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function toCsv(results) {
  const cols = [
    "seed", "seatOrder", "botJ1", "botJ2", "winner", "winnerFaction", "reasonCategory",
    "rounds", "blocked", "firstPlayerWon",
    "dominationJ1", "dominationJ2", "unitsLeftJ1", "unitsLeftJ2",
    "producedJ1", "producedJ2", "spentJ1", "spentJ2", "unspentJ1", "unspentJ2",
    "passiveJ1", "passiveJ2", "decisiveUnit",
  ];
  const rows = results.map((r) => [
    r.seed, r.seatOrder, r.bots.j1, r.bots.j2, r.winner ?? "", r.winnerFaction, r.reasonCategory,
    r.rounds, r.blocked ? 1 : 0, r.firstPlayerWon === null ? "" : (r.firstPlayerWon ? 1 : 0),
    r.domination.j1, r.domination.j2, r.unitsLeft.j1, r.unitsLeft.j2,
    r.resources.produced.j1, r.resources.produced.j2,
    r.resources.spent.j1, r.resources.spent.j2,
    r.resources.unspent.j1, r.resources.unspent.j2,
    r.passiveTurns.j1 || 0, r.passiveTurns.j2 || 0,
    r.decisiveUnit ? r.decisiveUnit.type : "",
  ].join(","));
  return [cols.join(","), ...rows].join("\n") + "\n";
}

function fmtPct(x) { return (x * 100).toFixed(1) + "%"; }

function aggToMarkdown(name, agg, alerts, extra = {}) {
  const lines = [];
  lines.push(`## ${name}`);
  lines.push("");
  if (extra.description) { lines.push(extra.description); lines.push(""); }
  lines.push(`| Métrique | J1 Nourricières | J2 Hydrophytes |`);
  lines.push(`|---|---|---|`);
  lines.push(`| Taux de victoire | ${fmtPct(agg.winrate.J1)} (${agg.wins.J1}/${agg.games}) | ${fmtPct(agg.winrate.J2)} (${agg.wins.J2}/${agg.games}) |`);
  lines.push(`| Ressources produites (moy.) | ${agg.resources.producedAvg.J1.toFixed(2)} | ${agg.resources.producedAvg.J2.toFixed(2)} |`);
  lines.push(`| Ressources dépensées (moy.) | ${agg.resources.spentAvg.J1.toFixed(2)} | ${agg.resources.spentAvg.J2.toFixed(2)} |`);
  lines.push(`| Ressources non dépensées (moy.) | ${agg.resources.unspentAvg.J1.toFixed(2)} | ${agg.resources.unspentAvg.J2.toFixed(2)} |`);
  lines.push(`| Tours passifs (total) | ${agg.passiveTurns.J1} | ${agg.passiveTurns.J2} |`);
  lines.push(`| Unités survivantes (moy.) | ${agg.unitsLeftAvg.J1.toFixed(2)} | ${agg.unitsLeftAvg.J2.toFixed(2)} |`);
  lines.push("");
  lines.push(`- Parties : ${agg.games} — bloquées : ${agg.wins.blocked} (${fmtPct(agg.winrate.none)})`);
  lines.push(`- Durée moyenne : ${agg.rounds.mean.toFixed(2)} rounds (σ ${agg.rounds.stddev.toFixed(2)}) — distribution : ${Object.entries(agg.rounds.dist).map(([k, v]) => `R${k}:${v}`).join(", ")}`);
  if (agg.seatAdvantage.firstSeatWinrate !== null)
    lines.push(`- Premier joueur (tous sièges confondus) : ${fmtPct(agg.seatAdvantage.firstSeatWinrate)} de victoires sur ${agg.seatAdvantage.sample} parties`);
  lines.push(`- Causes de fin : ${Object.entries(agg.causes).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  lines.push(`- Recrutements J1 : ${JSON.stringify(agg.recruitments.J1)} — J2 : ${JSON.stringify(agg.recruitments.J2)}`);
  lines.push(`- Dégâts par unité : ${JSON.stringify(agg.damageByType)}`);
  lines.push(`- Unités décisives (max dégâts du vainqueur) : ${JSON.stringify(agg.decisiveUnits)}`);
  lines.push(`- Variance inter-lots (winrate J2 par tranche) : σ ${agg.seedVariance.stddev.toFixed(3)} — tranches : ${agg.seedVariance.chunkWinratesJ2.map(fmtPct).join(", ")}`);
  lines.push("");
  if (alerts && alerts.length) {
    lines.push(`### Alertes`);
    lines.push("");
    alerts.forEach((a) => lines.push(`- **${a.level} ${a.code}** — ${a.message}`));
  } else {
    lines.push(`### Alertes`);
    lines.push("");
    lines.push(`- Aucune alerte déclenchée.`);
  }
  lines.push("");
  return lines.join("\n");
}

function comparisonToMarkdown(cmp) {
  const lines = [];
  lines.push(`| Indicateur | Baseline | Expérience | Delta |`);
  lines.push(`|---|---|---|---|`);
  lines.push(`| Winrate J1 | ${cmp.winrateJ1.avant} | ${cmp.winrateJ1.apres} | ${cmp.winrateJ1.delta} |`);
  lines.push(`| Winrate J2 | ${cmp.winrateJ2.avant} | ${cmp.winrateJ2.apres} | ${cmp.winrateJ2.delta} |`);
  lines.push(`| Rounds (moy.) | ${cmp.roundsMean.avant} | ${cmp.roundsMean.apres} | ${cmp.roundsMean.delta} |`);
  lines.push(`| Winrate 1er joueur | ${cmp.firstSeat.avant} | ${cmp.firstSeat.apres} | — |`);
  lines.push(`| Non dépensé J1 | ${cmp.unspentJ1.avant} | ${cmp.unspentJ1.apres} | — |`);
  lines.push(`| Non dépensé J2 | ${cmp.unspentJ2.avant} | ${cmp.unspentJ2.apres} | — |`);
  lines.push("");
  lines.push(`Causes baseline : ${JSON.stringify(cmp.causes.avant)}`);
  lines.push("");
  lines.push(`Causes expérience : ${JSON.stringify(cmp.causes.apres)}`);
  return lines.join("\n");
}

/* Écrit les trois formats pour un lot nommé. Retourne les chemins. */
function writeBatchOutputs(outDir, name, batch, agg, alerts) {
  ensureDir(outDir);
  const jsonPath = path.join(outDir, `${name}.json`);
  const csvPath = path.join(outDir, `${name}.csv`);
  const payload = {
    name,
    generatedAt: new Date().toISOString(),
    config: batch.config,
    appliedOverrides: batch.appliedOverrides,
    aggregate: agg,
    alerts,
    results: batch.results,
  };
  fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 1));
  fs.writeFileSync(csvPath, toCsv(batch.results));
  return { jsonPath, csvPath };
}

module.exports = { toCsv, aggToMarkdown, comparisonToMarkdown, writeBatchOutputs, ensureDir };
