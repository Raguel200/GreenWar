"use strict";
/* Charge le moteur GreenWar depuis le prototype HTML officiel, SANS le modifier.
   - extrait le <script> du fichier HTML ;
   - l'évalue dans un contexte vm isolé avec stub DOM ;
   - expose le contexte (fonctions et données du jeu accessibles en globales).
   Le fichier HTML historique n'est jamais réécrit : lecture seule. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { makeDocument } = require("./dom-stub");

const DEFAULT_PROTOTYPE = path.join(
  __dirname, "..", "..", "prototypes", "web-mvp", "greenwar_mvp_v0.2.6.html"
);

function extractScript(htmlPath) {
  const html = fs.readFileSync(htmlPath, "utf8");
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  if (!m) throw new Error(`Aucun <script> trouvé dans ${htmlPath}`);
  return m[1];
}

/* Crée un contexte moteur neuf. Chaque contexte est indépendant :
   état S, MAP, decks, DOM stub. Réutilisable pour plusieurs parties
   à condition de réinitialiser S et MAP entre les parties (fait par lab-core). */
function loadEngine(prototypePath = DEFAULT_PROTOTYPE) {
  const script = extractScript(prototypePath);
  const document = makeDocument();
  const sandbox = {
    console: { log() {}, table() {}, warn() {}, error() {} },
    document,
    URL: { createObjectURL: () => "", revokeObjectURL: () => {} },
    Blob: function Blob() {},
    location: { reload() {} },
    Math: Object.create(Math), // Math local au contexte → Math.random substituable sans toucher l'hôte
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  const context = vm.createContext(sandbox);
  vm.runInContext(script, context, { filename: path.basename(prototypePath) });
  // Capture de la carte initiale pour réinitialisation entre parties.
  vm.runInContext("var __INITIAL_MAP__ = [...MAP];", context);
  return context;
}

/* Installe un RNG seedé dans le contexte (affecte shuffle, roll, cartes aléatoires). */
function seedContext(context, randFn) {
  context.Math.random = randFn;
}

module.exports = { loadEngine, seedContext, DEFAULT_PROTOTYPE };
