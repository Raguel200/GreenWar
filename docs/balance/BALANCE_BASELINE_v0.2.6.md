# BASELINE v0.2.6 — Mesures reproduites

Date : 2026-07-11 · Lab : `tooling/balance-lab` · Seeds : `greenwar-v0.2.6-0…499`,
chaque seed jouée dans les deux ordres d'activation (1000 parties par lot).

Commandes de reproduction exacte :

```
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/baseline_v0.2.6.json
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/baseline_v0.2.6_dt5.json
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/bots_random_vs_random.json
```

## Observations attendues vs mesurées

| Observation préalable | Statut | Mesure (1000 parties) |
|---|---|---|
| Forte domination des Hydrophytes | **CONFIRMÉE, aggravée** | J2 gagne 100,0 % (heuristique) ; 71,5 % (bots aléatoires) |
| Nourricières faibles | **CONFIRMÉE** | J1 : 0 victoire sur 1000 (heuristique), 28,5 % (aléatoire) |
| dominationTarget = 5 | **REPRODUIT** | J2 99,6 %, durée moyenne 5,14 rounds |
| Durée moyenne ≈ 5,15 rounds | **REPRODUITE** | 5,14 (dt5) ; 5,01 (règles officielles, cible 4) |
| Victoires surtout par domination | **CONFIRMÉE** | 99,9 % des fins (heuristique) ; 24,8 % en aléatoire (57,3 % départage terrains) |
| Roseau potentiellement surpuissant | **NUANCÉE** | Voir ci-dessous : dominant en dégâts, PAS cause du winrate |
| Ressources Nourricières sous-utilisées | **CONFIRMÉE** | J1 finit avec 13,56 non dépensées en moyenne (J2 : 11,79) ; nutriments J1 saturent le plafond de 6 |
| Avantage du premier joueur | **INFIRMÉE** | 1er joueur : 50,0 % de victoires (49,6 % en dt5 ; 49,1 % en aléatoire) |

## Chiffres clés (baseline heuristique, règles officielles)

- Winrate : J1 0,0 % · J2 100,0 % · bloquées 0,0 %
- Durée : 5,01 rounds (σ 0,08) — 999 victoires par domination au round 5
- Variance inter-seeds : nulle (winrate J2 = 100 % sur chacune des 10 tranches)
- Production moyenne : J1 17,87 · J2 15,91 — Dépense : J1 9,31 · J2 9,12
- Unités survivantes : J1 4,95 · J2 5,58 — Tours passifs : 0 / 0
- Recrutements J1 : haricot 2269, carotte 1829, tomate 901 —
  J2 : nénuphar 2258, algue 2081, roseau 668
- Dégâts totaux par type : roseau 1960 (45 % du total), carotte 1105, nénuphar 641,
  haricot 349, algue 284, tomate 29
- Unité décisive (max dégâts du camp vainqueur) : roseau dans 82,6 % des victoires J2
- Morts : carotte 806, haricot 521, roseau 342, nénuphar 100, algue 17

## Alertes déclenchées (baseline)

- ALERTE FACTION_MORTE — J1 : 0,0 % (seuil 20 %)
- ALERTE FACTION_DOMINANTE — J2 : 100,0 % (seuil 65 %)
- ALERTE RESSOURCES_DORMANTES — J1 : 13,56 (seuil 8) ; J2 : 11,79
- ALERTE CAUSE_ECRASANTE — domination : 99,9 % (seuil 80 %)

## Lecture

Le déséquilibre est **structurel, pas comportemental** : avec des bots aléatoires des
deux côtés, J2 gagne encore 71,5 %. L'heuristique ne fait qu'amplifier (100 %).
Le mécanisme dominant : le centre du plateau (rangées 3-4) est majoritairement
Zone Humide/Bassin ; les Hydrophytes y gagnent +1 MV (Réseau de Berges), un coût de
déplacement réduit (1 vs 2), une défense à 3+ et la production d'eau. La victoire par
domination au round 5 se joue sur l'occupation de ce centre — que J2 atteint plus vite
et tient mieux. Les nerfs unitaires (Roseau) et les buffs économiques J1 n'y changent
rien (voir BALANCE_EXPERIMENTS_v0.2.7.md).

Fichiers bruts : `tooling/balance-lab/results/baseline_v0.2.6.{csv,md}` (+ JSON
régénérable), `baseline_v0.2.6_dt5.*`, `bots_random_vs_random.*`.
