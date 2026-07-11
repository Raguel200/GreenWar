# LANCER LES SIMULATIONS

Prérequis : Node.js (aucune dépendance npm). Depuis la racine du dépôt.

## Commande unique — 1000 simulations baseline

```
node tooling/balance-lab/simulate.js --games 1000
```

Sorties dans `tooling/balance-lab/results/` : `baseline_v0.2.6.json` (brut),
`.csv` (1 ligne/partie), `.md` (rapport + alertes).

## Tests du laboratoire (inclut la suite du prototype en headless)

```
node tooling/balance-lab/test.js
```

## Configurations existantes

```
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/baseline_v0.2.6.json
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/baseline_v0.2.6_dt5.json
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/bots_random_vs_random.json
```

## Expérience avec comparaison automatique à la baseline

```
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/exp_roseau_cost.json --baseline tooling/balance-lab/experiments/baseline_v0.2.6.json
```

Produit en plus `results/compare_<nom>.md`.

## Options CLI

| Option | Effet |
|---|---|
| `--games N` | Nombre de parties (prime sur la config). |
| `--seed BASE` | Base des seeds (reproductibilité). |
| `--config F.json` | Charge une configuration d'expérience. |
| `--baseline F.json` | Simule aussi la baseline et génère la comparaison. |
| `--bots a,b` | Bots J1,J2 : `heuristic`, `random`, `random-greedy`. |
| `--domination-target N` | Mode diagnostic du moteur (cible N au lieu de 4). |
| `--no-swap` | Désactive l'alternance des sièges. |
| `--name L` / `--out DIR` | Nom du lot / dossier de sortie. |
| `--quiet` | Réduit la sortie console. |

## Écrire une nouvelle expérience

Copier un JSON de `tooling/balance-lab/experiments/` et ajuster :
`unitOverrides` (coût/stats d'unités), `j1IncomeBonus`, `startRes`, `dominationTarget`,
`maxRounds`, `bots`, `botOptions`. Un levier par expérience, mêmes seeds que la
baseline, puis lancer avec `--baseline`.

## Reproductibilité

Même seed ⇒ même partie, bit à bit (RNG mulberry32 injecté dans le contexte moteur).
Les JSON bruts ne sont pas versionnés : ils se regénèrent à l'identique.
