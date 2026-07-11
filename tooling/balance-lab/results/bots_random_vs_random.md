# Rapport de simulation — bots_random_vs_random

## bots_random_vs_random

DIAGNOSTIC BOTS — aléatoire contrôlé des deux côtés. Si le déséquilibre J2 persiste sans heuristique, il vient des règles, pas du bot.

| Métrique | J1 Nourricières | J2 Hydrophytes |
|---|---|---|
| Taux de victoire | 28.5% (285/1000) | 71.5% (715/1000) |
| Ressources produites (moy.) | 19.64 | 13.96 |
| Ressources dépensées (moy.) | 9.50 | 9.02 |
| Ressources non dépensées (moy.) | 15.13 | 9.94 |
| Tours passifs (total) | 30 | 8 |
| Unités survivantes (moy.) | 6.40 | 5.51 |

- Parties : 1000 — bloquées : 0 (0.0%)
- Durée moyenne : 5.87 rounds (σ 0.34) — distribution : R5:135, R6:865
- Premier joueur (tous sièges confondus) : 49.1% de victoires sur 1000 parties
- Causes de fin : tiebreak-terrains 573 · tiebreak-unites 153 · domination 248 · tiebreak-ressources 25 · tiebreak-initiative 1
- Recrutements J1 : {"haricot":1312,"tomate":1344,"carotte":2325} — J2 : {"roseau":1046,"algue":2357,"nenuphar":1534}
- Dégâts par unité : {"roseau":1226,"haricot":112,"algue":167,"nenuphar":116,"carotte":1025,"tomate":140}
- Unités décisives (max dégâts du vainqueur) : {"roseau":578,"nenuphar":71,"carotte":199,"algue":66,"haricot":34,"tomate":38}
- Variance inter-lots (winrate J2 par tranche) : σ 0.062 — tranches : 71.0%, 75.0%, 73.0%, 71.0%, 72.0%, 76.0%, 83.0%, 61.0%, 69.0%, 64.0%

### Alertes

- **ALERTE FACTION_DOMINANTE** — J2 gagne 71.5% des parties (seuil 65%).
- **ALERTE PARTIES_LONGUES** — Durée moyenne 5.87 rounds (> 5.8).
- **ALERTE RESSOURCES_DORMANTES** — J1 termine avec 15.13 ressources non dépensées en moyenne (seuil 8).
- **ALERTE RESSOURCES_DORMANTES** — J2 termine avec 9.94 ressources non dépensées en moyenne (seuil 8).
