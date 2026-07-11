# Comparaison : baseline_v0.2.6 → exp_roseau_cost

EXPÉRIENCE v0.2.7-A — Coût du Roseau-Harponneur porté de {eau:1,sol:1} à {eau:2,sol:1}. Hypothèse : réduire la pression du sniper J2 sans toucher ses stats.

| Indicateur | Baseline | Expérience | Delta |
|---|---|---|---|
| Winrate J1 | 0.0% | 0.0% | +0.0 pts |
| Winrate J2 | 100.0% | 100.0% | +0.0 pts |
| Rounds (moy.) | 5.01 | 5.01 | +0.00 |
| Winrate 1er joueur | 50.0% | 50.0% | — |
| Non dépensé J1 | 13.56 | 13.56 | — |
| Non dépensé J2 | 11.79 | 11.64 | — |

Causes baseline : {"domination":999,"tiebreak-terrains":1}

Causes expérience : {"domination":999,"tiebreak-terrains":1}

## Baseline — baseline_v0.2.6

| Métrique | J1 Nourricières | J2 Hydrophytes |
|---|---|---|
| Taux de victoire | 0.0% (0/1000) | 100.0% (1000/1000) |
| Ressources produites (moy.) | 17.87 | 15.91 |
| Ressources dépensées (moy.) | 9.31 | 9.12 |
| Ressources non dépensées (moy.) | 13.56 | 11.79 |
| Tours passifs (total) | 0 | 0 |
| Unités survivantes (moy.) | 4.95 | 5.58 |

- Parties : 1000 — bloquées : 0 (0.0%)
- Durée moyenne : 5.01 rounds (σ 0.08) — distribution : R5:993, R6:7
- Premier joueur (tous sièges confondus) : 50.0% de victoires sur 1000 parties
- Causes de fin : domination 999 · tiebreak-terrains 1
- Recrutements J1 : {"haricot":2269,"carotte":1829,"tomate":901} — J2 : {"algue":2081,"nenuphar":2258,"roseau":668}
- Dégâts par unité : {"roseau":1960,"haricot":349,"nenuphar":641,"carotte":1105,"tomate":29,"algue":284}
- Unités décisives (max dégâts du vainqueur) : {"roseau":826,"nenuphar":143,"algue":31}
- Variance inter-lots (winrate J2 par tranche) : σ 0.000 — tranches : 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%

### Alertes

- **ALERTE FACTION_MORTE** — J1 ne gagne que 0.0% des parties (seuil 20%).
- **ALERTE FACTION_DOMINANTE** — J2 gagne 100.0% des parties (seuil 65%).
- **ALERTE RESSOURCES_DORMANTES** — J1 termine avec 13.56 ressources non dépensées en moyenne (seuil 8).
- **ALERTE RESSOURCES_DORMANTES** — J2 termine avec 11.79 ressources non dépensées en moyenne (seuil 8).
- **ALERTE CAUSE_ECRASANTE** — La cause "domination" représente 99.9% des fins de partie (seuil 80%).

## Expérience — exp_roseau_cost

| Métrique | J1 Nourricières | J2 Hydrophytes |
|---|---|---|
| Taux de victoire | 0.0% (0/1000) | 100.0% (1000/1000) |
| Ressources produites (moy.) | 17.87 | 16.20 |
| Ressources dépensées (moy.) | 9.31 | 9.56 |
| Ressources non dépensées (moy.) | 13.56 | 11.64 |
| Tours passifs (total) | 0 | 0 |
| Unités survivantes (moy.) | 4.95 | 5.58 |

- Parties : 1000 — bloquées : 0 (0.0%)
- Durée moyenne : 5.01 rounds (σ 0.08) — distribution : R5:993, R6:7
- Premier joueur (tous sièges confondus) : 50.0% de victoires sur 1000 parties
- Causes de fin : domination 999 · tiebreak-terrains 1
- Recrutements J1 : {"haricot":2269,"carotte":1829,"tomate":901} — J2 : {"algue":2081,"nenuphar":2258,"roseau":668}
- Dégâts par unité : {"roseau":1960,"haricot":349,"nenuphar":641,"carotte":1105,"tomate":29,"algue":284}
- Unités décisives (max dégâts du vainqueur) : {"roseau":826,"nenuphar":143,"algue":31}
- Variance inter-lots (winrate J2 par tranche) : σ 0.000 — tranches : 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%

### Alertes

- **ALERTE FACTION_MORTE** — J1 ne gagne que 0.0% des parties (seuil 20%).
- **ALERTE FACTION_DOMINANTE** — J2 gagne 100.0% des parties (seuil 65%).
- **ALERTE RESSOURCES_DORMANTES** — J1 termine avec 13.56 ressources non dépensées en moyenne (seuil 8).
- **ALERTE RESSOURCES_DORMANTES** — J2 termine avec 11.64 ressources non dépensées en moyenne (seuil 8).
- **ALERTE CAUSE_ECRASANTE** — La cause "domination" représente 99.9% des fins de partie (seuil 80%).
