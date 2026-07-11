# STATUS — GreenWar

Dernière mise à jour : 2026-07-11 · Branche active : `feature/v0.2.7-balance-lab`

## État courant

- Prototype jouable stable : `prototypes/web-mvp/greenwar_mvp_v0.2.6.html` (v0.2.3→0.2.6 taguées et poussées).
- **Nouveau : laboratoire d'équilibrage automatique** `tooling/balance-lab/`
  (simulation headless du moteur v0.2.6, seeds reproductibles, bots heuristique/aléatoire,
  inversion de sièges, alertes de régression, exports JSON/CSV/MD). Tests : 11/11 PASS.
- Baseline v0.2.6 mesurée sur 1000 parties : **J2 Hydrophytes 100 % de victoires**
  (71,5 % en bots aléatoires — déséquilibre structurel), domination au round 5,
  aucun avantage de siège, ~13 ressources dormantes par camp.
- 3 expériences v0.2.7 exécutées (coût Roseau, portée Roseau, revenus J1) :
  toutes **réfutées** comme correctifs. Cause racine : géométrie du plateau
  (centre humide) × règle de domination × mobilité Hydrophyte.

## Documents de référence

- `docs/balance/BALANCE_BASELINE_v0.2.6.md` — chiffres de référence.
- `docs/balance/BALANCE_EXPERIMENTS_v0.2.7.md` — protocole et verdicts.
- `docs/balance/BALANCE_RECOMMENDATIONS.md` — leviers R1-R5 en attente de validation.
- `docs/balance/BALANCE_LAB_ARCHITECTURE.md` — fonctionnement et seuils d'alerte.
- `docs/balance/BOT_BEHAVIOR.md` — bots et diagnostic règles/bots.
- `docs/balance/RUN_SIMULATIONS.md` — commandes.
- `docs/balance/TEST_REPORT.md` — 11/11 PASS.

## Contraintes en vigueur

- Prototypes historiques : lecture seule (le lab charge le HTML sans le modifier).
- Faux diffs CRLF/LF sur 10 fichiers : **ne pas commiter** (commits par chemins
  explicites via index alternatif). Pas de renormalisation massive.
- `.git/index.lock` obsolète présent (verrou mort du 2026-07-11 17:45) : contourné,
  suppression manuelle côté Windows recommandée.
- Aucune modification des règles officielles sans validation humaine.
