"use strict";
/* simulate.js — CLI du laboratoire d'équilibrage GreenWar.

   Usage :
     node simulate.js [--config exp.json] [--games N] [--seed BASE]
                      [--bots heuristic,heuristic] [--domination-target N]
                      [--no-swap] [--name LABEL] [--out DIR]
                      [--baseline baseline.json] [--quiet]

   Exemples :
     node simulate.js --games 1000                       # baseline v0.2.6, 1000 parties
     node simulate.js --config experiments/exp_roseau_cost.json --games 500
     node simulate.js --config experiments/exp_roseau_cost.json --baseline experiments/baseline_v0.2.6.json

   Un fichier de config JSON peut contenir :
   { "name": "...", "description": "...", "games": 500, "seedBase": "gw",
     "swapSeats": true, "bots": {"1": "heuristic", "2": "heuristic"},
     "botOptions": {"1": {}, "2": {}},
     "dominationTarget": null, "j1IncomeBonus": {"nut": 1},
     "startRes": null, "maxRounds": 6,
     "unitOverrides": {"roseau": {"cout": {"eau": 2, "sol": 1}}} } */
const fs = require("fs");
const path = require("path");
const { runBatch } = require("./lab-core");
const { aggregate, checkAlerts, compareAggregates } = require("./metrics");
const { writeBatchOutputs, aggToMarkdown, comparisonToMarkdown, ensureDir } = require("./report");

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const flagOnly = ["no-swap", "quiet", "help"];
      if (flagOnly.includes(key)) args[key] = true;
      else { args[key] = argv[++i]; }
    } else args._.push(a);
  }
  return args;
}

function loadConfig(p) {
  const raw = JSON.parse(fs.readFileSync(p, "utf8"));
  return normalizeConfig(raw, path.basename(p, ".json"));
}

function normalizeConfig(raw, fallbackName) {
  const cfg = {
    name: raw.name || fallbackName || "run",
    description: raw.description || "",
    games: raw.games || 200,
    seedBase: raw.seedBase || "greenwar",
    swapSeats: raw.swapSeats !== false,
    bots: raw.bots ? { 1: raw.bots["1"] || raw.bots[1] || "heuristic", 2: raw.bots["2"] || raw.bots[2] || "heuristic" } : { 1: "heuristic", 2: "heuristic" },
    botOptions: raw.botOptions ? { 1: raw.botOptions["1"] || raw.botOptions[1] || {}, 2: raw.botOptions["2"] || raw.botOptions[2] || {} } : undefined,
    dominationTarget: raw.dominationTarget || null,
    j1IncomeBonus: raw.j1IncomeBonus || null,
    startRes: raw.startRes || null,
    maxRounds: raw.maxRounds || undefined,
    unitOverrides: raw.unitOverrides || null,
  };
  return cfg;
}

function runConfig(cfg, cliGames, quiet) {
  const t0 = Date.now();
  const batch = runBatch({
    games: cliGames || cfg.games,
    seedBase: cfg.seedBase,
    swapSeats: cfg.swapSeats,
    bots: cfg.bots,
    botOptions: cfg.botOptions,
    dominationTarget: cfg.dominationTarget,
    j1IncomeBonus: cfg.j1IncomeBonus,
    startRes: cfg.startRes,
    maxRounds: cfg.maxRounds,
    unitOverrides: cfg.unitOverrides,
  });
  const agg = aggregate(batch.results);
  const alerts = checkAlerts(agg);
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  if (!quiet) {
    console.log(`\n=== ${cfg.name} — ${agg.games} parties en ${elapsed}s ===`);
    console.log(`Winrate  J1 ${(agg.winrate.J1 * 100).toFixed(1)}%  ·  J2 ${(agg.winrate.J2 * 100).toFixed(1)}%  ·  bloquées ${(agg.winrate.none * 100).toFixed(1)}%`);
    console.log(`Rounds moyens ${agg.rounds.mean.toFixed(2)} (σ ${agg.rounds.stddev.toFixed(2)})`);
    if (agg.seatAdvantage.firstSeatWinrate !== null)
      console.log(`Premier joueur : ${(agg.seatAdvantage.firstSeatWinrate * 100).toFixed(1)}% de victoires`);
    console.log(`Causes : ${Object.entries(agg.causes).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
    alerts.forEach((a) => console.log(`  [${a.level}] ${a.code} — ${a.message}`));
  }
  return { batch, agg, alerts };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(fs.readFileSync(__filename, "utf8").split("*/")[0].split("/*")[1]);
    return;
  }
  const outDir = args.out || path.join(__dirname, "results");
  const cliGames = args.games ? parseInt(args.games, 10) : null;

  let cfg;
  if (args.config) cfg = loadConfig(args.config);
  else {
    cfg = normalizeConfig({
      name: args.name || "baseline_v0.2.6",
      description: "Baseline v0.2.6 — heuristique vs heuristique, règles officielles.",
      games: cliGames || 1000,
      seedBase: args.seed || "greenwar-v0.2.6",
      swapSeats: !args["no-swap"],
      bots: args.bots ? { 1: args.bots.split(",")[0], 2: args.bots.split(",")[1] || args.bots.split(",")[0] } : undefined,
      dominationTarget: args["domination-target"] ? parseInt(args["domination-target"], 10) : null,
    }, "baseline_v0.2.6");
  }
  if (args.seed) cfg.seedBase = args.seed;
  if (args["domination-target"]) cfg.dominationTarget = parseInt(args["domination-target"], 10);
  if (args["no-swap"]) cfg.swapSeats = false;
  if (args.name) cfg.name = args.name;

  const run = runConfig(cfg, cliGames, args.quiet);
  const paths = writeBatchOutputs(outDir, cfg.name, run.batch, run.agg, run.alerts);
  console.log(`\nExports : ${paths.jsonPath}\n          ${paths.csvPath}`);

  if (args.baseline) {
    const baseCfg = loadConfig(args.baseline);
    const baseRun = runConfig(baseCfg, cliGames, args.quiet);
    const basePaths = writeBatchOutputs(outDir, baseCfg.name, baseRun.batch, baseRun.agg, baseRun.alerts);
    const cmp = compareAggregates(baseRun.agg, run.agg);
    const md = [
      `# Comparaison : ${baseCfg.name} → ${cfg.name}`,
      "",
      cfg.description || "",
      "",
      comparisonToMarkdown(cmp),
      "",
      aggToMarkdown(`Baseline — ${baseCfg.name}`, baseRun.agg, baseRun.alerts),
      aggToMarkdown(`Expérience — ${cfg.name}`, run.agg, run.alerts),
    ].join("\n");
    ensureDir(outDir);
    const cmpPath = path.join(outDir, `compare_${cfg.name}.md`);
    fs.writeFileSync(cmpPath, md);
    console.log(`Comparaison : ${cmpPath}`);
  } else {
    const md = aggToMarkdown(cfg.name, run.agg, run.alerts, { description: cfg.description });
    const mdPath = path.join(outDir, `${cfg.name}.md`);
    ensureDir(outDir);
    fs.writeFileSync(mdPath, `# Rapport de simulation — ${cfg.name}\n\n${md}`);
    console.log(`Rapport : ${mdPath}`);
  }
}

if (require.main === module) main();
module.exports = { runConfig, loadConfig, normalizeConfig };
