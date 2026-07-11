# EXPÉRIENCES v0.2.7 — Protocole et résultats

Protocole : chaque expérience mesure la baseline, modifie UN levier, simule 1000
parties sur les MÊMES seeds (`greenwar-v0.2.6-*`, sièges alternés), compare, recommande.
**Aucune règle officielle n'a été modifiée** : les overrides n'existent que dans le
contexte de simulation. Toute application au prototype exige une validation humaine.

## v0.2.7-A — Coût du Roseau : {eau:1,sol:1} → {eau:2,sol:1}

Hypothèse : renchérir le sniper J2 réduit sa pression.

| Indicateur | Baseline | Expérience | Delta |
|---|---|---|---|
| Winrate J1 | 0,0 % | 0,0 % | +0,0 pt |
| Winrate J2 | 100,0 % | 100,0 % | +0,0 pt |
| Rounds moyens | 5,01 | 5,01 | 0 |

**Verdict : SANS EFFET.** J2 produit trop d'eau pour que le surcoût soit contraignant
(recrutements roseau quasi identiques : 668 → ~650/1000 parties). Contrôle par coût
extrême (eau:99) : seuls les recrutements gratuits « Pollinisation Massive » subsistent
(25/100 parties) — le mécanisme d'override fonctionne, c'est le levier qui est mou.

## v0.2.7-B — Portée du Roseau : 3 → 2

Hypothèse : le Roseau cesse de contrôler la moitié du plateau.

| Indicateur | Baseline | Expérience | Delta |
|---|---|---|---|
| Winrate J1 | 0,0 % | 0,2 % | +0,2 pt |
| Winrate J2 | 100,0 % | 99,8 % | −0,2 pt |
| Rounds moyens | 5,01 | 5,01 | 0 |

**Verdict : MARGINAL.** Le Roseau inflige 45 % des dégâts totaux et est l'unité décisive
de 83 % des victoires J2, mais les parties se gagnent à la domination territoriale,
pas à l'attrition : réduire sa portée ne rend pas le centre aux Nourricières.

## v0.2.7-C — Revenu Nourricières : +1 Eau et +1 Ensoleillement par round

Hypothèse : J1 manque de carburant pour recruter.

| Indicateur | Baseline | Expérience | Delta |
|---|---|---|---|
| Winrate J1 | 0,0 % | 0,1 % | +0,1 pt |
| Winrate J2 | 100,0 % | 99,9 % | −0,1 pt |
| Rounds moyens | 5,01 | 5,01 | 0 |

**Verdict : SANS EFFET.** J1 finit déjà avec 13,6 ressources non dépensées ; un bonus en
Nutriments est même intégralement absorbé par le plafond de 6. La contrainte de J1 n'est
pas économique : c'est la limite d'un recrutement par round et la géométrie du plateau.

## Expériences de cadrage associées

- **dominationTarget 4 → 5** (baseline_dt5) : J2 99,6 %, durée 5,01 → 5,14. Retarde
  la sentence d'un dixième de round. Insuffisant seul.
- **Bots aléatoires des deux côtés** : J2 71,5 % — le déséquilibre est dans les règles.

## Conclusion générale

Les trois leviers testés (coût Roseau, portée Roseau, revenus J1) sont **réfutés comme
correctifs** du déséquilibre v0.2.6. La cause dominante est structurelle :
victoire par domination au round 5 × centre du plateau humide × mobilité Hydrophyte.
Voir BALANCE_RECOMMENDATIONS.md pour les leviers proposés à tester en v0.2.7.

Reproduction :

```
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/exp_roseau_cost.json   --baseline tooling/balance-lab/experiments/baseline_v0.2.6.json
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/exp_roseau_portee.json --baseline tooling/balance-lab/experiments/baseline_v0.2.6.json
node tooling/balance-lab/simulate.js --config tooling/balance-lab/experiments/exp_j1_revenu.json     --baseline tooling/balance-lab/experiments/baseline_v0.2.6.json
```
