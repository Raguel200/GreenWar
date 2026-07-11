# NEXT ACTION — GreenWar

## Décisions humaines en attente (bloquantes pour la suite)

1. **Choisir le levier v0.2.7 principal** parmi les recommandations
   (`docs/balance/BALANCE_RECOMMENDATIONS.md`) :
   R1 carte symétrisée · R2 règle de domination durcie · R3 mobilité comparée ·
   R4 débouchés économiques · R5 nerf Roseau (cosmétique seul, réel en combo).
   Recommandation du lab : R1 + R2 d'abord (cause racine), R5 en accompagnement.
2. **Supprimer `.git/index.lock`** côté Windows (verrou mort, non supprimable depuis
   la sandbox) : `del "D:\Intelligence Artificielle - Travaux 2026\Green War 2026\.git\index.lock"`
3. **Trancher les faux diffs CRLF/LF** des 10 fichiers historiques : statu quo (option
   non destructive actuelle) ou politique `.gitattributes` dans un commit dédié ultérieur,
   sans renormalisation massive.
4. **Valider ou amender les seuils d'alerte** (BALANCE_LAB_ARCHITECTURE.md §Seuils).

## Prochaine action technique (après décision 1)

Implémenter le hook d'override de MAP dans `lab-core.js` (~20 lignes) pour tester la
carte symétrisée (R1) et les variantes de domination (R2) en simulation AVANT tout
patch du prototype — puis, si les winrates rentrent dans [35 %, 65 %], créer
`greenwar_mvp_v0.2.7.html` (nouvelle version, jamais d'écrasement).

## Commande de contrôle continue

```
node tooling/balance-lab/test.js && node tooling/balance-lab/simulate.js --games 1000
```
