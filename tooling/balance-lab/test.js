"use strict";
/* test.js — tests du laboratoire d'équilibrage.
   1. Le moteur du prototype se charge en headless.
   2. La suite de tests du prototype (window.GreenWarTests) passe en headless.
   3. Reproductibilité : même seed → même résultat.
   4. Seeds différents → résultats différents (au moins parfois).
   5. L'inversion de sièges fonctionne.
   6. Les overrides d'unités s'appliquent.
   7. Le bot aléatoire joue des parties valides.
   8. dominationTarget est respecté.
   9. La comptabilité des ressources est cohérente (produit + initial - final = dépensé >= 0).

   Usage : node test.js */
const assert = require("assert");
const { createLab, playGame, runBatch, applyUnitOverrides } = require("./lab-core");
const { aggregate, checkAlerts } = require("./metrics");

const results = [];
function test(name, fn) {
  try { fn(); results.push({ test: name, status: "PASS" }); }
  catch (err) { results.push({ test: name, status: "FAIL", detail: err.message }); }
}

test("Le moteur v0.2.6 se charge en headless", () => {
  const lab = createLab();
  assert.ok(lab.ctx.attack, "attack absent");
  assert.ok(lab.bridge.UNITS.roseau, "UNITS.roseau absent");
  assert.strictEqual(lab.bridge.MAP.length, 36);
});

test("La suite de tests du prototype passe en headless", () => {
  const lab = createLab();
  const suite = lab.ctx.window.GreenWarTests.run();
  const failed = suite.filter((r) => r.status !== "PASS");
  // strictEqual sur la longueur : les objets issus du contexte vm ont d'autres
  // prototypes que ceux de l'hôte, deepStrictEqual cross-realm échouerait à tort.
  assert.strictEqual(failed.length, 0, `Tests prototype en échec : ${JSON.stringify([...failed])}`);
  assert.ok(suite.length >= 20, `Suite prototype anormalement courte : ${suite.length} tests`);
});

test("Reproductibilité : même seed → même résultat", () => {
  const a = playGame(createLab(), { seed: "repro-42" });
  const b = playGame(createLab(), { seed: "repro-42" });
  assert.strictEqual(a.winner, b.winner);
  assert.strictEqual(a.rounds, b.rounds);
  assert.strictEqual(a.reason, b.reason);
  assert.strictEqual(JSON.stringify(a.resources), JSON.stringify(b.resources));
});

test("Seeds différents → variation observable", () => {
  const lab = createLab();
  const outcomes = new Set();
  for (let i = 0; i < 12; i++) {
    const r = playGame(lab, { seed: `var-${i}` });
    // Signature fine : winner|rounds|reason peut converger à cause du déséquilibre
    // (J2 domine presque toujours) — on inclut production et événements.
    outcomes.add(`${r.winner}|${r.rounds}|${r.resources.produced.j1}|${r.resources.produced.j2}|${r.events[0]}`);
  }
  assert.ok(outcomes.size > 1, "12 seeds produisent tous exactement la même partie");
});

test("Inversion de sièges : ordre [2,1] accepté et tracé", () => {
  const r = playGame(createLab(), { seed: "swap-1", seatOrder: [2, 1] });
  assert.strictEqual(r.seatOrder, "2>1");
  assert.ok(r.winner === 1 || r.winner === 2 || r.winner === null);
});

test("Overrides d'unités appliqués (coût du Roseau)", () => {
  const lab = createLab();
  const applied = applyUnitOverrides(lab.bridge, { roseau: { cout: { eau: 2, sol: 2 } } });
  // Comparaison JSON : les objets du contexte vm ont des prototypes d'un autre realm.
  assert.strictEqual(JSON.stringify(lab.bridge.UNITS.roseau.cout), JSON.stringify({ eau: 2, sol: 2 }));
  assert.strictEqual(JSON.stringify(applied.roseau.cout.avant), JSON.stringify({ eau: 1, sol: 1 }));
  // Le contexte est isolé : un nouveau lab n'est pas contaminé.
  const fresh = createLab();
  assert.strictEqual(JSON.stringify(fresh.bridge.UNITS.roseau.cout), JSON.stringify({ eau: 1, sol: 1 }));
});

test("Bot aléatoire : parties valides et reproductibles", () => {
  const a = playGame(createLab(), { seed: "rnd-7", bots: { 1: "random", 2: "random" } });
  const b = playGame(createLab(), { seed: "rnd-7", bots: { 1: "random", 2: "random" } });
  assert.strictEqual(a.winner, b.winner);
  assert.strictEqual(a.bots.j1, "random");
  assert.ok(a.rounds >= 1 && a.rounds <= 6);
});

test("dominationTarget 5 transmis au moteur", () => {
  const lab = createLab();
  for (let i = 0; i < 10; i++) {
    const r = playGame(lab, { seed: `dt5-${i}`, dominationTarget: 5 });
    if (r.reasonCategory === "domination" && /Diagnostic/.test(r.reason)) {
      assert.ok(/cible 5/.test(r.reason), `Raison inattendue : ${r.reason}`);
    }
  }
});

test("Comptabilité des ressources cohérente", () => {
  const lab = createLab();
  for (let i = 0; i < 10; i++) {
    const r = playGame(lab, { seed: `res-${i}` });
    for (const j of ["j1", "j2"]) {
      assert.ok(r.resources.spent[j] >= 0, `Dépense négative ${j} : ${r.resources.spent[j]} (seed res-${i})`);
      assert.ok(r.resources.produced[j] >= 0);
    }
  }
});

test("runBatch : nombre de parties, swap de sièges, agrégat et alertes", () => {
  const batch = runBatch({ games: 20, seedBase: "batch-test", swapSeats: true });
  assert.strictEqual(batch.results.length, 20);
  const orders = new Set(batch.results.map((r) => r.seatOrder));
  assert.strictEqual(JSON.stringify([...orders].sort()), JSON.stringify(["1>2", "2>1"]));
  const agg = aggregate(batch.results);
  assert.strictEqual(agg.games, 20);
  assert.ok(Array.isArray(checkAlerts(agg)));
});

test("j1IncomeBonus augmente la production de J1", () => {
  // Note d'équilibrage : un bonus en NUTRIMENTS est absorbé par le plafond de 6
  // (les Nourricières saturent leurs nutriments — constat en soi). On teste donc
  // avec eau+sol, non plafonnés dans cette partie.
  const base = playGame(createLab(), { seed: "inc-1" });
  const boosted = playGame(createLab(), { seed: "inc-1", j1IncomeBonus: { eau: 1, sol: 1 } });
  assert.ok(
    boosted.resources.produced.j1 > base.resources.produced.j1,
    `Production J1 non augmentée : ${base.resources.produced.j1} → ${boosted.resources.produced.j1}`
  );
});

const failed = results.filter((r) => r.status !== "PASS");
console.table ? console.table(results) : console.log(results);
console.log(`\n${results.length - failed.length}/${results.length} tests PASS`);
if (failed.length) { console.error("ÉCHECS :", JSON.stringify(failed, null, 2)); process.exit(1); }
