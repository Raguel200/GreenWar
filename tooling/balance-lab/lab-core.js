"use strict";
/* lab-core.js — boucle de simulation instrumentée pour GreenWar v0.2.6.
   Réutilise le moteur officiel (règles, combat, événements, bots heuristiques)
   via engine-loader, sans modifier le prototype. Ajoute :
   - seeds reproductibles ;
   - ordre d'activation configurable (mesure de l'avantage du premier joueur) ;
   - bots interchangeables (heuristique du prototype / aléatoire contrôlé) ;
   - overrides de paramètres (coûts, stats, revenus, dominationTarget) ;
   - métriques étendues (production, dépenses, ressources dormantes, blocages). */
const vm = require("vm");
const { loadEngine, seedContext, DEFAULT_PROTOTYPE } = require("./engine-loader");
const { mulberry32, hashSeed } = require("./rng");
const { makeBot } = require("./bots");

/* Pont vers les bindings lexicaux (let/const) du script du prototype. */
const BRIDGE_SCRIPT = `
this.__bridge = {
  get S() { return S; },
  set S(v) { S = v; },
  UNITS, ROSTER, MAP, TERR, EVENTS, GRISNOIR,
  INITIAL_MAP: __INITIAL_MAP__,
  MAX_ROUNDS: PLAYTEST_MAX_ROUNDS,
  DOMINATION_ROUND: PLAYTEST_DOMINATION_ROUND
};
`;

function createLab(prototypePath = DEFAULT_PROTOTYPE) {
  const ctx = loadEngine(prototypePath);
  vm.runInContext(BRIDGE_SCRIPT, ctx);
  const bridge = ctx.__bridge;
  return { ctx, bridge, prototypePath };
}

/* Applique des overrides d'unités : {roseau:{cout:{eau:2,sol:1}, atk:1, por:2, ...}} */
function applyUnitOverrides(bridge, unitOverrides) {
  const applied = {};
  for (const [type, over] of Object.entries(unitOverrides || {})) {
    const u = bridge.UNITS[type];
    if (!u) throw new Error(`Unité inconnue dans overrides: ${type}`);
    applied[type] = {};
    for (const [k, v] of Object.entries(over)) {
      applied[type][k] = { avant: u[k], apres: v };
      u[k] = v;
    }
  }
  return applied;
}

function totalRes(res) { return Object.values(res).reduce((a, b) => a + b, 0); }

function categorizeReason(reason) {
  const r = String(reason || "");
  if (/détruit/i.test(r)) return "extermination";
  if (/[Dd]omination/.test(r)) return "domination";
  if (/terrains contrôlés/.test(r)) return "tiebreak-terrains";
  if (/unités survivantes/.test(r)) return "tiebreak-unites";
  if (/ressources restantes/.test(r)) return "tiebreak-ressources";
  if (/initiative/.test(r)) return "tiebreak-initiative";
  if (!r || /sans vainqueur/i.test(r)) return "aucune";
  return "autre";
}

/* Joue UNE partie instrumentée.
   options :
   - seed         : entier ou chaîne (reproductible) ;
   - seatOrder    : [1,2] ou [2,1] — ordre d'activation dans le round ;
   - bots         : {1:"heuristic"|"random", 2:...} ou objets bots déjà construits ;
   - botOptions   : {1:{...},2:{...}} passé à makeBot ;
   - dominationTarget : null (règle officielle, cible 4) ou nombre (mode diagnostic) ;
   - maxRounds    : défaut = PLAYTEST_MAX_ROUNDS du moteur ;
   - j1IncomeBonus: {nut:1} appliqué après la production de J1 (expérience revenus) ;
   - startRes     : {1:{eau:..},2:{..}} remplace les ressources initiales. */
function playGame(lab, options = {}) {
  const { ctx, bridge } = lab;
  const seed = options.seed ?? 1;
  const seedInt = typeof seed === "number" ? seed >>> 0 : hashSeed(String(seed));
  const rand = mulberry32(seedInt);
  seedContext(ctx, rand);

  const seatOrder = options.seatOrder || [1, 2];
  const maxRounds = options.maxRounds || bridge.MAX_ROUNDS;
  const autoplayOptions = options.dominationTarget
    ? { dominationTarget: options.dominationTarget } : {};

  // Réinitialisation carte + état (le moteur mute MAP via certaines cartes Gris-Noir).
  bridge.MAP.splice(0, bridge.MAP.length, ...bridge.INITIAL_MAP);
  bridge.S = ctx.autoplayInitialState();
  if (options.startRes) {
    for (const j of [1, 2]) {
      if (options.startRes[j]) bridge.S.p[j].res = { ...options.startRes[j] };
    }
  }
  ctx.autoplaySetupUnits();

  const S = bridge.S;
  const initialTotals = { 1: totalRes(S.p[1].res), 2: totalRes(S.p[2].res) };

  // Instrumentation production : gainRes est un binding global réassignable.
  const produced = { 1: 0, 2: 0 };
  const originalGainRes = ctx.gainRes;
  ctx.gainRes = function (j, r, v) {
    const before = bridge.S.p[j].res[r];
    originalGainRes(j, r, v);
    produced[j] += bridge.S.p[j].res[r] - before; // gain effectif (plafond 6 respecté)
  };

  const bots = {};
  for (const j of [1, 2]) {
    const spec = (options.bots && options.bots[j]) || "heuristic";
    bots[j] = typeof spec === "string"
      ? makeBot(spec, (options.botOptions && options.botOptions[j]) || {})
      : spec;
  }

  const metrics = ctx.autoplayMetricSeed();
  let activityThisGame = 0;

  try {
    while (!S.over && S.round <= maxRounds) {
      S.phase = 0; S.active = seatOrder[0];
      ctx.autoplayDrawEvents(metrics);
      S.phase = 1;
      ctx.doProduction(1); ctx.doProduction(2);
      if (options.j1IncomeBonus) {
        for (const [r, v] of Object.entries(options.j1IncomeBonus)) ctx.gainRes(1, r, v);
      }
      for (const j of seatOrder) {
        S.active = j;
        S.phase = 2; const recruited = bots[j].recruit(ctx, bridge, j, metrics, rand);
        S.phase = 3; ctx.startMovementPhase(j);
        const moved = bots[j].move(ctx, bridge, j, metrics, rand);
        S.phase = 4; ctx.expireMovementStatusesFor(j);
        const attacked = bots[j].attack(ctx, bridge, j, metrics, rand);
        if (!recruited && !moved && !attacked) metrics.passiveTurns[j === 1 ? "j1" : "j2"]++;
        else activityThisGame++;
        if (S.over) break;
      }
      if (S.over) break;
      S.phase = 5;
      ctx.autoplayControlPhase(metrics, autoplayOptions);
      if (S.over) break;
      S.round++;
    }
    if (!S.over) {
      S.round = maxRounds;
      S.phase = 5;
      ctx.checkVictory({ allowDomination: true });
    }
  } finally {
    ctx.gainRes = originalGainRes;
  }

  const finalTotals = { 1: totalRes(S.p[1].res), 2: totalRes(S.p[2].res) };
  const spent = {
    1: initialTotals[1] + produced[1] - finalTotals[1],
    2: initialTotals[2] + produced[2] - finalTotals[2],
  };
  const damageFor = (j) => {
    const roster = bridge.ROSTER[j];
    return Object.entries(metrics.damageByType || {})
      .filter(([t]) => roster.includes(t))
      .sort((a, b) => b[1] - a[1]);
  };
  const decisive = S.winner ? (damageFor(S.winner)[0] || null) : null;

  return {
    seed: String(seed), seedInt,
    seatOrder: seatOrder.join(">"),
    bots: { j1: bots[1].kind, j2: bots[2].kind },
    winner: S.winner,
    winnerFaction: S.winner === 1 ? "Nourricières" : S.winner === 2 ? "Hydrophytes" : "aucun",
    reason: S.winReason || "Partie terminée sans vainqueur",
    reasonCategory: categorizeReason(S.winReason),
    blocked: !S.winner,
    rounds: Math.min(S.round, maxRounds),
    firstPlayerWon: S.winner ? S.winner === seatOrder[0] : null,
    controlled: { j1: ctx.controlled(1).length, j2: ctx.controlled(2).length },
    domination: { j1: ctx.dominationControlled(1).length, j2: ctx.dominationControlled(2).length },
    unitsLeft: {
      j1: ctx.unitsOnBoard().filter((u) => u.j === 1).length,
      j2: ctx.unitsOnBoard().filter((u) => u.j === 2).length,
    },
    resources: {
      produced: { j1: produced[1], j2: produced[2] },
      spent: { j1: spent[1], j2: spent[2] },
      unspent: { j1: finalTotals[1], j2: finalTotals[2] },
      final: { j1: { ...S.p[1].res }, j2: { ...S.p[2].res } },
    },
    passiveTurns: { ...metrics.passiveTurns },
    recruitments: metrics.recruitments,
    attacksByType: { ...metrics.attacksByType },
    damageByType: { ...metrics.damageByType },
    deathsByType: { ...metrics.deathsByType },
    decisiveUnit: decisive ? { type: decisive[0], damage: decisive[1] } : null,
    events: [...metrics.events],
  };
}

/* Joue un lot de parties. swapSeats=true → chaque seed est jouée deux fois,
   ordres [1,2] puis [2,1], pour neutraliser/mesurer l'avantage du premier joueur. */
function runBatch(config = {}) {
  const {
    games = 100,
    seedBase = "greenwar",
    swapSeats = true,
    prototype = DEFAULT_PROTOTYPE,
    unitOverrides = null,
    ...gameOptions
  } = config;

  const lab = createLab(prototype);
  const appliedOverrides = unitOverrides ? applyUnitOverrides(lab.bridge, unitOverrides) : null;

  const results = [];
  const orders = swapSeats ? [[1, 2], [2, 1]] : [[1, 2]];
  const perOrder = swapSeats ? Math.ceil(games / 2) : games;
  for (const order of orders) {
    for (let i = 0; i < perOrder && results.length < games; i++) {
      results.push(playGame(lab, {
        ...gameOptions,
        seed: `${seedBase}-${i}`,
        seatOrder: order,
      }));
    }
  }
  return { results, appliedOverrides, config: { games, seedBase, swapSeats, prototype, ...gameOptions, unitOverrides } };
}

module.exports = { createLab, playGame, runBatch, applyUnitOverrides, categorizeReason };
