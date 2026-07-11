# Rapport de simulation — baseline_v0.2.6_dt5

## baseline_v0.2.6_dt5

Baseline v0.2.6 en mode diagnostic dominationTarget=5 (reproduction des observations précédentes : durée ~5.15 rounds).

| Métrique | J1 Nourricières | J2 Hydrophytes |
|---|---|---|
| Taux de victoire | 0.4% (4/1000) | 99.6% (996/1000) |
| Ressources produites (moy.) | 18.33 | 16.30 |
| Ressources dépensées (moy.) | 9.57 | 9.35 |
| Ressources non dépensées (moy.) | 13.76 | 11.95 |
| Tours passifs (total) | 0 | 0 |
| Unités survivantes (moy.) | 5.03 | 5.66 |

- Parties : 1000 — bloquées : 0 (0.0%)
- Durée moyenne : 5.14 rounds (σ 0.35) — distribution : R5:859, R6:141
- Premier joueur (tous sièges confondus) : 49.6% de victoires sur 1000 parties
- Causes de fin : domination 992 · tiebreak-terrains 4 · tiebreak-unites 4
- Recrutements J1 : {"haricot":2346,"carotte":1875,"tomate":912} — J2 : {"algue":2129,"nenuphar":2328,"roseau":684}
- Dégâts par unité : {"roseau":1998,"haricot":357,"nenuphar":652,"carotte":1181,"tomate":31,"algue":300}
- Unités décisives (max dégâts du vainqueur) : {"roseau":824,"nenuphar":142,"algue":30,"carotte":4}
- Variance inter-lots (winrate J2 par tranche) : σ 0.007 — tranches : 100.0%, 100.0%, 100.0%, 100.0%, 100.0%, 99.0%, 100.0%, 100.0%, 99.0%, 98.0%

### Alertes

- **ALERTE FACTION_MORTE** — J1 ne gagne que 0.4% des parties (seuil 20%).
- **ALERTE FACTION_DOMINANTE** — J2 gagne 99.6% des parties (seuil 65%).
- **ALERTE RESSOURCES_DORMANTES** — J1 termine avec 13.76 ressources non dépensées en moyenne (seuil 8).
- **ALERTE RESSOURCES_DORMANTES** — J2 termine avec 11.95 ressources non dépensées en moyenne (seuil 8).
- **ALERTE CAUSE_ECRASANTE** — La cause "domination" représente 99.2% des fins de partie (seuil 80%).
