# Prompt Codex — GreenWar Source Modularization

Tu travailles sur le repo GreenWar.

## Objectif

Transformer le prototype HTML autonome actuel en projet source modulaire, sans changer le gameplay.

Source actuelle :

`prototypes/web-mvp/greenwar_mvp_v0.2.2.html`

Créer une structure source dans :

`prototypes/source/`

Créer un build autonome dans :

`prototypes/builds/greenwar_mvp_v0.2.3.html`

## Contraintes absolues

- Ne pas changer les règles.
- Ne pas ajouter de nouvelles factions.
- Ne pas ajouter Médicinales.
- Ne pas ajouter Toxiques.
- Ne pas ajouter de framework.
- Ne pas ajouter React, Vue, Angular, Vite ou npm.
- Rester en HTML/CSS/JS vanilla.
- Préserver la direction artistique.
- Préserver les tests existants.
- Préserver une version HTML autonome jouable.

## Structure source souhaitée

- `prototypes/source/index.html`
- `prototypes/source/css/style.css`
- `prototypes/source/js/app.js`
- `prototypes/source/js/state.js`
- `prototypes/source/js/board.js`
- `prototypes/source/js/ui.js`
- `prototypes/source/js/units.js`
- `prototypes/source/js/terrain.js`
- `prototypes/source/js/events.js`
- `prototypes/source/js/grisnoir.js`
- `prototypes/source/js/combat.js`
- `prototypes/source/js/phases.js`
- `prototypes/source/js/tests.js`
- `prototypes/source/data/units.json`
- `prototypes/source/data/terrains.json`
- `prototypes/source/data/events.json`
- `prototypes/source/data/grisnoir.json`

## Build autonome

Créer un script simple dans :

`tooling/scripts/build-single-html.js`

Ce script doit produire :

`prototypes/builds/greenwar_mvp_v0.2.3.html`

Le build final doit être un seul fichier HTML autonome ouvrable localement dans un navigateur.

## Tests

- Conserver ou recréer `window.GreenWarTests.run()`.
- Tous les tests actuels doivent encore passer.
- Ajouter un test minimal pour vérifier que les données sont bien intégrées au build.

## Livrables attendus

1. Structure source complète.
2. Build HTML autonome v0.2.3.
3. Script de build.
4. Changelog mis à jour.
5. Liste claire des mécaniques volontairement non modifiées.