# GreenWar

GreenWar est un prototype de wargame tactique botanique et écologique.

## Version actuelle

- MVP : v0.2.2
- Nom : Stable Core Build
- Format : HTML/CSS/JS vanilla
- Factions jouables : Nourricières vs Hydrophytes
- Plateau : 6x6
- Ressources : Eau, Nutriments, Ensoleillement, Biodiversité

## Prototype jouable

Ouvrir :

`prototypes/web-mvp/greenwar_mvp_v0.2.2.html`

dans un navigateur.

## Tests

Dans la console navigateur :

```js
window.GreenWarTests.run()
```

## Structure

- `docs/` : bible, règles, notes de design
- `prototypes/` : prototypes jouables et sources de développement
- `assets/` : visuels terrains, unités, cartes et UI
- `playtest/` : notes de test
- `tooling/` : prompts Codex et scripts
- `archive/` : anciennes versions et fichiers non actifs

## Scope MVP actuel

Inclus :

- Nourricières
- Hydrophytes
- 6 terrains
- deck naturel réduit
- deck Gris-Noir
- combat D6
- recrutement simple
- victoire domination / extermination

Non inclus :

- Médicinales
- Toxiques
- Mycorhize avancée
- deck naturel complet 24 cartes
- IA adverse