# GreenWar — Audit & Patch Plan v0.2.1

## Objectif
Optimiser la chaîne de production :
- ChatGPT/ElysIA : conception, arbitrage, règles, cohérence canonique.
- Claude Fable 5 : génération ponctuelle courte, full HTML single-file, peu de raisonnement.
- Codex : refactor, tests, durcissement, corrections logiques lourdes.

Source canonique : `GreenWar_Bible_v0.2_1.md`.
Prototype audité : `greenwar_mvp.html`.

---

## Verdict rapide
Le MVP est exploitable comme socle : syntaxe JS valide, DA cohérente, boucle jouable, 2 factions présentes.
Mais il reste un prototype v0.1 simplifié, pas une implémentation v0.2 fiable. Il faut corriger les règles qui cassent la stratégie avant d'ajouter des factions.

Priorité absolue : ne pas demander à Fable de repenser le jeu. Il doit uniquement patcher un fichier selon une checklist fermée.

---

## Bugs / écarts prioritaires

### P0 — À corriger avant tout playtest sérieux
1. **Version affichée v0.1** alors que la Bible v0.2 est canonique.
2. **Statuts temporaires mal expirés** : une Entrave infligée par J2 disparaît avant que J1 puisse en subir l'effet. Il faut un système `expiresAfterPlayer` ou `durationTurns`.
3. **Charge Racinaire trop permissive** : elle se déclenche sur une distance Manhattan ≥ 2, même sans ligne droite. Il faut stocker `lastMoveFrom`, `lastMoveTo`, `lastMoveDistance`, `lastMoveStraight`.
4. **Coût de mouvement approximatif** : `u.moved += dist(...)` ne reflète pas le coût réel calculé par BFS. Il faut retourner le coût réel depuis `reachable()`.
5. **Sol Fertile mal implémenté** : la Bible dit qu'une unité détruite sur Sol Fertile donne 1 Nutriment au propriétaire. Le code applique surtout Compost de Guerre aux Nourricières détruites.
6. **PV non mis à jour** : `pv` existe mais l'UI affiche seulement les terrains. Décider : Domination simple ou PV Récolte Sanglante.
7. **Événement + Gris-Noir écrasent la même carte UI** : séparer panneau Événement naturel et panneau Gris-Noir.

### P1 — Canon MVP v0.2 à compléter
1. Implémenter **Récolte Commune** Nourricières.
2. Implémenter **Floraison du Marais** Hydrophytes.
3. Implémenter **Clairière bonus non contestée**.
4. Implémenter **Bassin : non-aquatique stationnaire = -1 VIT/tour**.
5. Implémenter **Friche non contrôlée → carte Gris-Noir fin de tour** ou garder le tirage tous les 2 rounds, mais il faut choisir.
6. Étendre le deck Gris-Noir à 10 cartes.
7. Étendre le deck Événement à 24 cartes ou assumer un deck MVP réduit, clairement nommé.

### P2 — Abilities actives, à faire après moteur stable
1. Nénuphar : Onde de Repli.
2. Roseau : Harpon Végétal.
3. Algue : Dérive.
4. Submersion Hydrophytes.
5. Pêche d'urgence Bassin.

---

## Décision de production recommandée

### Ne pas encore ajouter Médicinales / Toxiques
Le moteur actuel n'est pas assez durci pour Poison, Zone d'Épines, Burst Dionée, événements avancés. Ajouter les 4 factions maintenant créerait une soupe de règles. L'humanité a déjà assez fait souffrir les plantes.

### Version cible immédiate
`greenwar_mvp_v0.2.1.html`

Contenu :
- 2 factions uniquement : Nourricières vs Hydrophytes.
- 6 terrains.
- Deck Événement réduit mais explicitement `MVP`.
- Deck Gris-Noir idéalement complet 10 cartes.
- Combat D6 stable.
- Statuts fiables.
- Log clair.
- Version affichée v0.2.1.

---

## Prompt minimal pour Claude Fable 5

```text
Tu travailles sur GreenWar. Tu n'inventes aucune règle. La Bible v0.2 est la source canonique. Tu modifies uniquement le fichier HTML fourni, en vanilla HTML/CSS/JS, un seul fichier, zéro dépendance, pas de framework.

Objectif : produire greenwar_mvp_v0.2.1.html, patch de stabilité, pas refonte complète.

Contraintes :
- Ne change pas la direction artistique globale.
- Ne renomme pas massivement les variables sauf nécessité locale.
- Ne supprime aucune mécanique déjà fonctionnelle.
- Retourne le fichier HTML complet uniquement.

Patch obligatoire :
1. Mettre tous les titres UI en Prototype v0.2.1.
2. Ajouter un vrai système de statuts temporaires : Entrave/Ralentissement doivent expirer après que le joueur affecté a réellement subi son prochain tour de mouvement.
3. Corriger Charge Racinaire : elle ne s'active que si la Carotte a bougé de 2+ cases en ligne droite avant d'attaquer. Stocker lastMoveDistance et lastMoveStraight au déplacement.
4. Corriger le mouvement : reachable() doit fournir le coût réel de déplacement, pas seulement une distance Manhattan.
5. Corriger Sol Fertile : toute unité détruite sur Sol Fertile donne +1 Nutriment au propriétaire de l'unité détruite. Conserver aussi Compost de Guerre pour les Nourricières détruites, mais éviter double gain si tu estimes que c'est trop fort : dans ce cas loguer clairement l'arbitrage.
6. Séparer l'affichage Événement naturel et Gris-Noir en deux panneaux distincts.
7. Mettre à jour les PV/terrains contrôlés clairement dans l'UI.
8. Ajouter les 10 cartes Gris-Noir de la Bible v0.2 si possible sans casser le fichier.

Après le code, ne fournis pas d'explication longue. Le fichier doit être prêt à ouvrir localement.
```

---

## Prompt pour Codex

```text
Tu es chargé de durcir le prototype GreenWar MVP.

Entrées :
- GreenWar_Bible_v0.2_1.md = source canonique règles.
- greenwar_mvp_v0.2.1.html = prototype produit par Claude Fable.

Mission :
1. Auditer les écarts entre le prototype et la Bible v0.2 pour le périmètre MVP 2 factions.
2. Corriger les bugs de logique sans changer la direction artistique.
3. Refactorer uniquement si cela réduit les bugs : extraire les constantes règles, isoler resolveAttack(), reachable(), applyStatusExpiry(), produceResources().
4. Ajouter un mini test harness JS exécutable dans la console ou via Node si possible :
   - Charge Carotte ne s'active pas sur mouvement non rectiligne.
   - Charge Carotte s'active sur 2 cases en ligne droite.
   - Entrave infligée par J2 affecte bien J1 au tour suivant.
   - Pollution réduit bien production.
   - Sol Fertile donne Nutriment à la mort.
   - Gris-Noir tous les 2 rounds.
5. Produire :
   - un diff résumé,
   - le fichier final HTML,
   - la liste des mécaniques non implémentées volontairement.

Contraintes :
- Vanilla JS only.
- Un seul fichier HTML final.
- Aucun appel réseau obligatoire.
- Ne pas ajouter Médicinales/Toxiques maintenant.
```

---

## Règle d'or
Chaque reset quota Fable doit produire un artefact court et vérifiable. Toute ambiguïté de règle revient à ElysIA/ChatGPT avant d'être codée.
