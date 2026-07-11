# Rapport de simulation — baseline_v0.2.6

## baseline_v0.2.6

Baseline v0.2.6 — règles officielles (domination cible 4 dès round 5, cap 6 rounds), bots heuristiques du prototype, sièges alternés.

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
