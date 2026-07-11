# RAPPORT DE TESTS — Balance Lab v0.2.7

Date : 2026-07-11 · Commande : `node tooling/balance-lab/test.js`

## Résultat : 11/11 PASS

| # | Test | Statut |
|---|---|---|
| 1 | Le moteur v0.2.6 se charge en headless | PASS |
| 2 | La suite de tests du prototype (GreenWarTests, 24 tests) passe en headless | PASS |
| 3 | Reproductibilité : même seed → même résultat | PASS |
| 4 | Seeds différents → variation observable | PASS |
| 5 | Inversion de sièges : ordre [2,1] accepté et tracé | PASS |
| 6 | Overrides d'unités appliqués + isolation des contextes | PASS |
| 7 | Bot aléatoire : parties valides et reproductibles | PASS |
| 8 | dominationTarget 5 transmis au moteur | PASS |
| 9 | Comptabilité des ressources cohérente (dépense ≥ 0) | PASS |
| 10 | runBatch : effectifs, swap de sièges, agrégat, alertes | PASS |
| 11 | j1IncomeBonus augmente la production de J1 | PASS |

## Incidents rencontrés et résolus pendant le développement

- **deepStrictEqual cross-realm** : les objets issus du contexte vm ont des prototypes
  d'un autre realm ; les assertions utilisent désormais longueurs et comparaisons JSON.
- **Fausse alerte « seeds identiques »** : la signature winner|rounds|cause convergeait
  à cause du déséquilibre réel (J2 domine presque tout) ; signature affinée avec
  production et événements.
- **Bonus de nutriments invisible** : un `j1IncomeBonus` en nutriments est absorbé par
  le plafond de 6 (les Nourricières saturent) — constat d'équilibrage documenté, test
  bascule sur eau+sol.

## Alertes de régression sur la baseline v0.2.6 (attendu : rouge)

FACTION_MORTE (J1 0 %), FACTION_DOMINANTE (J2 100 %), RESSOURCES_DORMANTES
(J1 13,56 ; J2 11,79), CAUSE_ECRASANTE (domination 99,9 %). Ces alertes sont le
constat que le lab doit faire passer au vert en v0.2.7 — elles sont la baseline rouge.
