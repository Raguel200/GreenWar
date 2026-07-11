# Comparaison : baseline_v0.2.6 → exp_j1_revenu

EXPÉRIENCE v0.2.7-C — Revenu Nourricières : +1 Eau et +1 Ensoleillement par round (le bonus en Nutriments est absorbé par le plafond de 6). Hypothèse : J1 manque de carburant pour recruter Carotte/Haricot.

| Indicateur | Baseline | Expérience | Delta |
|---|---|---|---|
| Winrate J1 | 0.0% | 0.1% | +0.1 pts |
| Winrate J2 | 100.0% | 99.9% | -0.1 pts |
| Rounds (moy.) | 5.01 | 5.01 | +0.00 |
| Winrate 1er joueur | 50.0% | 50.1% | — |
| Non dépensé J1 | 13.56 | 18.22 | — |
| Non dépensé J2 | 11.79 | 11.79 | — |

Causes baseline : {"domination":999,"tiebreak-terrains":1}

Causes expérience : {"domination":998,"tiebreak-unites":1,"tiebreak-terrains":1}

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

## Expérience — exp_j1_revenu

| Métrique | J1 Nourricières | J2 Hydrophytes |
|---|---|---|
| Taux de victoire | 0.1% (1/1000) | 99.9% (999/1000) |
| Ressources produites (moy.) | 22.55 | 15.91 |
| Ressources dépensées (moy.) | 9.33 | 9.12 |
| Ressources non dépensées (moy.) | 18.22 | 11.79 |
| Tours passifs (total) | 0 | 0 |
| Unités survivantes (moy.) | 4.95 | 5.57 |

- Parties : 1000 — bloquées : 0 (0.0%)
- Durée moyenne : 5.01 rounds (σ 0.09) — distribution : R5:992, R6:8
- Premier joueur (tous sièges confondus) : 50.1% de victoires sur 1000 parties
- Causes de fin : domination 998 · tiebreak-unites 1 · tiebreak-terrains 1
- Recrutements J1 : {"haricot":2321,"carotte":1755,"tomate":932} — J2 : {"algue":2079,"nenuphar":2260,"roseau":669}
- Dégâts par unité : {"roseau":1949,"haricot":359,"nenuphar":636,"carotte":1112,"tomate":37,"algue":288}
- Unités décisives (max dégâts du vainqueur) : {"roseau":822,"nenuphar":145,"algue":32,"haricot":1}
- Variance inter-lots (winrate J2 par tranche) : σ 0.003 — tranches : 100.0%, 100.0%, 99.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%

### Alertes

- **ALERTE FACTION_MORTE** — J1 ne gagne que 0.1% des parties (seuil 20%).
- **ALERTE FACTION_DOMINANTE** — J2 gagne 99.9% des parties (seuil 65%).
- **ALERTE RESSOURCES_DORMANTES** — J1 termine avec 18.22 ressources non dépensées en moyenne (seuil 8).
- **ALERTE RESSOURCES_DORMANTES** — J2 termine avec 11.79 ressources non dépensées en moyenne (seuil 8).
- **ALERTE CAUSE_ECRASANTE** — La cause "domination" représente 99.8% des fins de partie (seuil 80%).
