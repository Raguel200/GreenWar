# AGENTS.md — GreenWar

## Projet

GreenWar est un wargame tactique botanique et écologique.

Le prototype actuel est :

`prototypes/web-mvp/greenwar_mvp_v0.2.2.html`

## Contraintes absolues

- Ne jamais ajouter de framework sans demande explicite.
- Ne pas ajouter React, Vue, Angular, Vite ou npm.
- Garder le MVP en HTML/CSS/JS vanilla.
- Ne pas ajouter de backend.
- Ne pas ajouter Médicinales dans le MVP.
- Ne pas ajouter Toxiques dans le MVP.
- Ne pas modifier les règles canoniques sans documenter le changement.
- Ne pas écraser une version stable existante.
- Créer une nouvelle version si une modification fonctionnelle est faite.

## Fichiers de référence

Lire dans cet ordre :

1. `docs/bible/GreenWar_Bible_v0.2.md`
2. `tooling/prompts/GreenWar_Codex_Brief_v0.2.2.md`
3. `prototypes/web-mvp/greenwar_mvp_v0.2.2.html`

## Tests

Conserver `window.GreenWarTests.run()` tant que le prototype reste en HTML autonome.