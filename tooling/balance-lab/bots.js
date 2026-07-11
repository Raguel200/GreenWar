"use strict";
/* bots.js — stratégies d'IA pour la simulation.
   Interface d'un bot : { kind, recruit(ctx,bridge,j,metrics,rand),
                          move(...), attack(...) } — retournent true si action.

   - heuristic : délègue aux fonctions autoplay* du prototype v0.2.6 (inchangées).
   - random    : bot aléatoire contrôlé, utilise le RNG seedé de la partie.
     Sert de plancher de comparaison : si un déséquilibre disparaît en
     random-vs-random, il vient du comportement du bot heuristique,
     pas des règles. */

function heuristicBot() {
  return {
    kind: "heuristic",
    recruit: (ctx, bridge, j, metrics) => ctx.autoplayRecruit(j, metrics),
    move: (ctx, bridge, j, metrics) => ctx.autoplayMove(j, metrics),
    attack: (ctx, bridge, j, metrics) => ctx.autoplayAttack(j, metrics),
  };
}

/* Options du bot aléatoire :
   - recruitChance : probabilité de tenter un recrutement si abordable (défaut 0.85) ;
   - moveChance    : probabilité qu'une unité bouge (défaut 0.7) ;
   - spendGreedy   : si true, recrute toujours quand c'est possible (politique
                     de dépense agressive — expérience "ressources dormantes"). */
function randomBot(opts = {}) {
  const recruitChance = opts.spendGreedy ? 1 : (opts.recruitChance ?? 0.85);
  const moveChance = opts.moveChance ?? 0.7;
  return {
    kind: opts.spendGreedy ? "random-greedy" : "random",
    recruit(ctx, bridge, j, metrics, rand) {
      const S = bridge.S;
      if (S.p[j].recruited) return false;
      if (rand() > recruitChance) return false;
      const affordable = bridge.ROSTER[j].filter((t) => ctx.canAffordUnit(j, t));
      if (!affordable.length) return false;
      const type = affordable[Math.floor(rand() * affordable.length)];
      const cells = ctx.spawnCells(j).filter((i) => !ctx.unitAt(i));
      if (!cells.length) return false;
      const cell = cells[Math.floor(rand() * cells.length)];
      if (!S.flags.pollin) {
        for (const [r, v] of Object.entries(bridge.UNITS[type].cout)) S.p[j].res[r] -= v;
      }
      ctx.mkUnit(type, cell, j);
      S.p[j].recruited = true;
      const key = j === 1 ? "j1" : "j2";
      metrics.recruitments[key][type] = (metrics.recruitments[key][type] || 0) + 1;
      return true;
    },
    move(ctx, bridge, j, metrics, rand) {
      let acted = false;
      for (const u of ctx.unitsOnBoard().filter((x) => x.j === j)) {
        if (rand() > moveChance) continue;
        const reach = ctx.reachable(u);
        if (!reach.size) continue;
        const cells = [...reach.keys()];
        const dest = cells[Math.floor(rand() * cells.length)];
        ctx.moveUnit(u, dest, reach.get(dest));
        acted = true;
      }
      return acted;
    },
    attack(ctx, bridge, j, metrics, rand) {
      const S = bridge.S;
      let acted = false;
      for (const a of ctx.unitsOnBoard().filter((x) => x.j === j && !x.attacked)) {
        const cells = [...ctx.targets(a)];
        if (!cells.length) continue;
        const d = ctx.unitAt(cells[Math.floor(rand() * cells.length)]);
        if (!d) continue;
        const before = d.vit;
        metrics.attacksByType[a.type] = (metrics.attacksByType[a.type] || 0) + 1;
        const defenderType = d.type, defenderId = d.id;
        ctx.attack(a, d);
        acted = true;
        const after = S.units[defenderId] ? S.units[defenderId].vit : 0;
        const dealt = Math.max(0, before - after);
        metrics.damageByType[a.type] = (metrics.damageByType[a.type] || 0) + dealt;
        metrics.damageTakenByType[defenderType] = (metrics.damageTakenByType[defenderType] || 0) + dealt;
        if (!S.units[defenderId]) metrics.deathsByType[defenderType] = (metrics.deathsByType[defenderType] || 0) + 1;
        ctx.checkVictory();
        if (S.over) break;
      }
      return acted;
    },
  };
}

function makeBot(kind, opts = {}) {
  if (kind === "heuristic") return heuristicBot();
  if (kind === "random") return randomBot(opts);
  if (kind === "random-greedy") return randomBot({ ...opts, spendGreedy: true });
  throw new Error(`Bot inconnu: ${kind}`);
}

module.exports = { makeBot, heuristicBot, randomBot };
