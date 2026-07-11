# Comparaison : baseline_v0.2.6 → exp_roseau_portee

EXPÉRIENCE v0.2.7-B — Portée du Roseau-Harponneur réduite de 3 à 2. Hypothèse : le sniper reste utile mais cesse de contrôler la moitié du plateau.

| Indicateur | Baseline | Expérience | Delta |
|---|---|---|---|
| Winrate J1 | 0.0% | 0.2% | +0.2 pts |
| Winrate J2 | 100.0% | 99.8% | -0.2 pts |
| Rounds (moy.) | 5.01 | 5.01 | +0.01 |
| Winrate 1er joueur | 50.0% | 49.8% | — |
| Non dépensé J1 | 13.56 | 13.58 | — |
| Non dépensé J2 | 11.79 | 11.83 | — |

Causes baseline : {"domination":999,"tiebreak-terrains":1}

Causes expérience : {"domination":994,"tiebreak-terrains":5,"tiebreak-unites":1}

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

## Expérience — exp_roseau_portee

| Métrique | J1 Nourricières | J2 Hydrophytes |
|---|---|---|
| Taux de victoire | 0.2% (2/1000) | 99.8% (998/1000) |
| Ressources produites (moy.) | 17.91 | 15.97 |
| Ressources dépensées (moy.) | 9.33 | 9.14 |
| Ressources non dépensées (moy.) | 13.58 | 11.83 |
| Tours passifs (total) | 0 | 0 |
| Unités survivantes (moy.) | 5.05 | 5.54 |

- Parties : 1000 — bloquées : 0 (0.0%)
- Durée moyenne : 5.01 rounds (σ 0.12) — distribution : R5:985, R6:15
- Premier joueur (tous sièges confondus) : 49.8% de victoires sur 1000 parties
- Causes de fin : domination 994 · tiebreak-terrains 5 · tiebreak-unites 1
- Recrutements J1 : {"haricot":2250,"carotte":1820,"tomate":937} — J2 : {"algue":2086,"nenuphar":2259,"roseau":670}
- Dégâts par unité : {"roseau":1619,"haricot":367,"nenuphar":598,"carotte":1152,"tomate":26,"algue":304}
- Unités décisives (max dégâts du vainqueur) : {"roseau":697,"algue":36,"nenuphar":265,"carotte":2}
- Variance inter-lots (winrate J2 par tranche) : σ 0.004 — tranches : 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 99.0%, 100.0%, 99.0%

### Alertes

- **ALERTE FACTION_MORTE** — J1 ne gagne que 0.2% des parties (seuil 20%).
- **ALERTE FACTION_DOMINANTE** — J2 gagne 99.8% des parties (seuil 65%).
- **ALERTE RESSOURCES_DORMANTES** — J1 termine avec 13.58 ressources non dépensées en moyenne (seuil 8).
- **ALERTE RESSOURCES_DORMANTES** — J2 termine avec 11.83 ressources non dépensées en moyenne (seuil 8).
- **ALERTE CAUSE_ECRASANTE** — La cause "domination" représente 99.4% des fins de partie (seuil 80%).
