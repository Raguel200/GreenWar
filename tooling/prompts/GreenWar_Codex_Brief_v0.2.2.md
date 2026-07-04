# GREENWAR — BRIEF CODEX v0.2.2
## Stabilisation moteur du MVP après patch Fable v0.2.1

**Projet :** GreenWar / Guerre du Potager  
**Version cible :** `greenwar_mvp_v0.2.2.html`  
**Nature du livrable :** un seul fichier HTML autonome, vanilla HTML/CSS/JS, jouable localement.  
**But :** corriger les erreurs de logique du prototype `greenwar_mvp_v0.2.1.html` sans élargir le périmètre du jeu.

---

# 0. PROMPT COURT À DONNER À CODEX

```text
Tu es développeur senior sur GreenWar.

Entrées :
- GreenWar_Bible_v0.2_1.md = source canonique règles.
- greenwar_mvp_v0.2.1.html = prototype actuel à corriger.
- GreenWar_Codex_Brief_v0.2.2.md = ce brief de stabilisation.

Objectif :
Produire greenwar_mvp_v0.2.2.html, un patch de stabilisation moteur uniquement.

Contraintes absolues :
- Un seul fichier HTML autonome.
- Vanilla HTML/CSS/JS uniquement.
- Aucun backend.
- Aucun framework.
- Aucun appel réseau obligatoire.
- Ne pas changer la direction artistique sauf petites corrections UI nécessaires.
- Ne pas ajouter Médicinales ni Toxiques.
- Ne pas refondre tout le jeu.
- Ne pas inventer de règles hors Bible v0.2.

Mission :
1. Corriger les bugs P0 listés dans le brief.
2. Ajouter uniquement les compléments P1 marqués “à intégrer maintenant”.
3. Ajouter un mini-harness de tests disponible via `window.GreenWarTests.run()`.
4. Documenter dans le code les simplifications MVP conservées.
5. Retourner le HTML complet final + un court changelog.
```

---

# 1. DOCUMENTS À TRANSMETTRE À CODEX

## Obligatoires

1. **`GreenWar_Bible_v0.2_1.md`**  
   Source canonique. Toute contradiction avec le code doit être résolue en faveur de ce document, sauf si le brief indique explicitement une simplification MVP temporaire.

2. **`greenwar_mvp_v0.2.1.html`**  
   Prototype actuel produit par Fable. C'est le fichier à patcher, pas à remplacer par une architecture énorme.

3. **`GreenWar_Codex_Brief_v0.2.2.md`**  
   Le présent brief : erreurs à corriger, décisions d'arbitrage, tests attendus.

## Optionnels mais utiles

4. **`greenwar_mvp.html`**  
   Ancien MVP v0.1. À transmettre seulement pour comparaison historique. Ne doit pas primer sur v0.2.1.

5. **`GreenWar_Audit_PatchPlan_v0.2.1.md`**  
   Ancien plan ayant servi à produire la v0.2.1. Utile pour comprendre l'évolution, mais non prioritaire.

## Inutiles pour Codex maintenant

- Captures d'écran Claude/Fable : utiles humainement, inutiles pour le moteur.
- Assets visuels : pas nécessaires tant que le MVP reste en pions emoji.
- Bible v0.1 : à éviter, risque de réintroduire des règles obsolètes.

---

# 2. ORDRE DE PRIORITÉ DES SOURCES

Codex doit appliquer cet ordre de priorité :

1. **Bible v0.2** pour les règles canoniques.
2. **Brief Codex v0.2.2** pour les arbitrages MVP.
3. **Prototype v0.2.1** pour le style, l'UI existante et la base de code.
4. **Prototype v0.1** uniquement comme référence historique.

En cas de contradiction entre Bible v0.2 et prototype v0.2.1 : corriger le prototype.

En cas de contradiction entre Bible v0.2 et brief : suivre le brief uniquement si le brief annonce clairement une **simplification MVP temporaire**.

---

# 3. PÉRIMÈTRE STRICT v0.2.2

## À garder

- Plateau 6×6.
- 2 factions seulement : Nourricières vs Hydrophytes.
- 6 terrains : Sol Fertile, Clairière, Zone Humide, Bassin/Canal, Friche Gris-Noir, Rocaille Sèche.
- Combat D6.
- Phases principales.
- Événement naturel.
- Deck Gris-Noir automatique.
- Recrutement simple.
- Déplacement par clic.
- UI actuelle globalement conservée.

## À ne PAS ajouter maintenant

- Médicinales.
- Toxiques.
- Poison.
- Zone d'Épines.
- Dionée-Mâchefer.
- Amanite-Sporifère.
- Mode coopératif Gris-Noir.
- Joueur Gris-Noir.
- Deck complet 24 cartes si cela menace la stabilité.
- Système d'armée avancé.
- Sauvegarde locale.
- Drag & drop.
- Animations lourdes.

Le but n'est pas d'inventer un deuxième Warhammer dans un fichier HTML bricolé sur une table de cuisine. Le but est d'obtenir un moteur MVP fiable.

---

# 4. VERDICT SUR LA v0.2.1

Le patch v0.2.1 est utilisable comme base intermédiaire :

- Version UI passée en v0.2.1.
- Événement naturel et Gris-Noir séparés.
- Deck Gris-Noir complet 10 cartes ajouté.
- Mouvement amélioré via `reachable()` qui retourne une `Map` cellule → coût réel.
- Système de statuts temporaires introduit avec `applyStatus()` et `expireStatuses()`.
- Charge Racinaire partiellement corrigée.
- Sol Fertile et Compost arbitrés.

Mais le fichier n'est pas encore stable comme socle final. Les erreurs ci-dessous doivent être corrigées avant ajout de nouvelles factions.

---

# 5. ERREURS P0 À CORRIGER ABSOLUMENT

## P0-1 — Charge Racinaire dépend du dernier clic, pas de l'action complète

### Problème

La v0.2.1 stocke :

```js
su.lastMove = { dist: dist(S.sel, i), straight };
```

Cela vérifie seulement le **dernier segment de mouvement**. Si la Carotte-Perceuse se déplace en deux clics successifs dans la même ligne droite, la Charge peut ne pas s'activer alors que la règle devrait le permettre.

### Règle canonique

La Charge Racinaire s'active si la Carotte-Perceuse se déplace en ligne droite sur au moins 2 cases avant d'attaquer.

### Correction attendue

Ajouter pour chaque unité :

```js
activationStartCell: number | null,
movePath: number[],
```

Au début de l'activation ou au premier mouvement de l'unité :

```js
u.activationStartCell = u.cell;
u.movePath = [u.cell];
```

À chaque déplacement valide :

```js
u.movePath.push(destinationCell);
```

Créer une fonction :

```js
function hasStraightCharge(u) {
  // true seulement si :
  // - u.type === "carotte"
  // - distance totale parcourue >= 2
  // - toutes les cases du chemin sont alignées sur même ligne ou même colonne
  // - pas de changement d'axe
}
```

### Critères d'acceptation

- Carotte avance 2 cases verticalement en un clic → Charge OK.
- Carotte avance 1 case + 1 case verticalement sur la même colonne → Charge OK.
- Carotte avance 1 case droite puis 1 case bas → Charge KO.
- Carotte avance 2 cases mais avec détour → Charge KO.
- Le log indique clairement : `Charge Racinaire : active` ou `Charge Racinaire : non active` lors de l'attaque.

---

## P0-2 — Coût de mouvement amélioré mais encore fragile sur les chemins multi-segments

### Problème

La v0.2.1 utilise bien `reachable()` avec coût réel, mais ne conserve pas un vrai historique de chemin complet. Cela pose problème pour :

- Charge Racinaire.
- Détection d'unité immobile.
- Futures capacités comme Dérive ou Harpon.

### Correction attendue

Centraliser le mouvement dans une seule fonction :

```js
function moveUnit(u, destinationCell, pathCost) {}
```

Cette fonction doit :

- vérifier que destination ∈ reachable(u),
- appliquer le coût réel,
- mettre à jour `u.moved`,
- initialiser `activationStartCell` si absent,
- mettre à jour `movePath`,
- appliquer Pollution si entrée en Friche,
- mettre à jour `u.isDefending = false` si l'unité a bougé.

### Critères d'acceptation

- Une unité non Hydrophyte paie bien 2 pour entrer en Zone Humide/Bassin.
- Une Hydrophyte paie bien 1.
- Une unité lourde sur Rocaille respecte la pénalité si applicable.
- `u.moved` correspond au coût réel, pas à la distance Manhattan.

---

## P0-3 — Phase Contrôle pas assez lisible et pas vraiment jouée

### Problème

La v0.2.1 conserve une phase `CONTRÔLE`, mais l'expérience joueur donne l'impression qu'elle est sautée ou seulement utilisée comme bascule interne. Le joueur ne comprend pas clairement quand sont appliqués :

- dessiccation du Nénuphar,
- nettoyage des flags,
- victoire,
- reset du recrutement,
- expiration des statuts,
- effets de fin de round.

### Arbitrage MVP

Pour v0.2.2 : **Contrôle unique en fin de round**, après l'activation de J2.

Ne pas faire une Phase Contrôle séparée après chaque joueur. Cela alourdirait le MVP.

### Correction attendue

Créer une fonction unique :

```js
function resolveControlPhase() {}
```

Elle doit être appelée explicitement en fin de round, après J2 Combat.

Elle doit :

1. afficher/loguer `PHASE CONTRÔLE — fin du round X`,
2. appliquer dessiccation Nénuphar,
3. appliquer effets terrain de fin de round,
4. appliquer effets événement de fin de round si présents,
5. vérifier Domination,
6. reset `recruited`,
7. nettoyer flags temporaires,
8. préparer le round suivant.

### Critères d'acceptation

- Le log montre une vraie ligne `PHASE CONTRÔLE`.
- Le joueur comprend quand les effets de fin de round s'appliquent.
- Les statuts ne disparaissent pas avant d'avoir impacté le joueur concerné.

---

## P0-4 — Expiration des statuts encore à sécuriser

### Problème

La v0.2.1 introduit une logique à charges :

```js
function applyStatus(u,key){
  u.mk[key] = (S.active===u.j) ? 2 : 1;
}
```

C'est mieux que v0.1, mais fragile : le système dépend du moment exact où `expireStatuses(j)` est appelé.

### Règle MVP attendue

- **Entrave** : l'unité affectée ne peut pas se déplacer pendant sa prochaine Phase Mouvement.
- **Ralentissement** : l'unité affectée perd 1 MV pendant sa prochaine Phase Mouvement.
- Le statut expire après cette Phase Mouvement, pas arbitrairement à la fin d'une activation qui n'a pas permis à l'effet de s'exprimer.

### Correction attendue

Remplacer la logique ambiguë par une logique explicite :

```js
u.statuses = {
  entrave: { expiresAfterMovementOfPlayer: u.j },
  ralenti: { expiresAfterMovementOfPlayer: u.j }
};
```

Ou garder `mk`, mais ajouter un champ clair :

```js
u.mk.entrave = { active: true, consumed: false };
```

À la fin de la Phase Mouvement du joueur actif :

```js
expireMovementStatusesFor(S.active);
```

### Critères d'acceptation

- Haricot J1 entrave une unité J2 : l'unité J2 a MV 0 à son prochain mouvement, puis le statut disparaît.
- Algue J2 entrave une unité J1 pendant le combat J1 : l'unité J1 est entravée à son prochain mouvement, pas immédiatement supprimée en fin d'activation J1.
- Tomate ralentit un attaquant : l'attaquant est ralenti à sa prochaine phase de mouvement.

---

## P0-5 — Contrôle des terrains trop simplifié et pas documenté

### Problème

Actuellement :

```js
function controlled(j){
  const out=[];
  MAP.forEach((t,i)=>{const u=unitAt(i);if(u&&u.j===j)out.push(i);});
  return out;
}
```

Cela signifie : une unité posée sur une case = case contrôlée.

Ce n'est pas faux pour un MVP, mais cela ne gère pas encore :

- contestation réelle,
- objectifs de terrain,
- influence de zone,
- cases adjacentes,
- terrain vide possédé depuis le tour précédent.

### Arbitrage MVP

Conserver cette simplification pour v0.2.2.

Mais ajouter un commentaire très visible :

```js
// MVP simplifié : une case occupée par une unité = contrôlée par son joueur.
// Pas encore de persistance de contrôle ni de contestation étendue.
```

### Critères d'acceptation

- Le code est clair.
- L'UI affiche `Terrains contrôlés : X/4`.
- Le brief des mécaniques non implémentées mentionne : `contrôle avancé / contestation complète`.

---

## P0-6 — Sol Fertile / Compost : arbitrage à conserver mais à tester

### État v0.2.1

La v0.2.1 a choisi :

- unité détruite sur Sol Fertile → +1 Nutriment au propriétaire de l'unité détruite,
- Compost de Guerre pour Nourricières détruites hors Sol Fertile,
- pas de cumul Sol Fertile + Compost.

### Décision v0.2.2

Conserver cet arbitrage. Il est bon pour le MVP : sans cela, une Nourricière mourant sur Sol Fertile donnerait +2 Nutriments, donc la mort deviendrait presque une stratégie économique rentable. Très poétique, mais imbécile côté équilibrage.

### Correction attendue

Ajouter test.

### Critères d'acceptation

- Tomate détruite sur Sol Fertile : +1 Nutriment, pas +2.
- Tomate détruite hors Sol Fertile : +1 Nutriment via Compost.
- Nénuphar détruit sur Sol Fertile : +1 Nutriment pour J2.
- Nénuphar détruit hors Sol Fertile : pas de Nutriment.

---

## P0-7 — Production et flags événement doivent être plus prévisibles

### Problème

Certains flags sont créés par événement ou Gris-Noir :

- `smog`,
- `smogNext`,
- `secheresse`,
- `fuite`,
- `drone`,
- `nuit`,
- `pesticides`,
- `pollin`.

La v0.2.1 nettoie partiellement les flags dans `doControle()`, mais le cycle n'est pas assez explicite.

### Correction attendue

Créer une fonction :

```js
function cleanupRoundFlags() {}
```

Elle doit :

- transformer `smogNext` en `smog` pour le round suivant,
- supprimer les flags à durée 1 round,
- documenter les exceptions.

Idéalement définir les flags comme objets :

```js
flags: {
  smog: { remainingRounds: 1 },
  drone: { remainingRounds: 1 }
}
```

Mais ne pas sur-refactorer si cela fragilise le fichier.

### Critères d'acceptation

- `Nuit Froide` n'affecte qu'un round.
- `Drone de Surveillance` n'affecte qu'un round.
- `Smog Industriel` affecte bien le round suivant.
- `Fuite de Nappe` ne bloque pas une zone humide éternellement.

---

# 6. COMPLÉMENTS P1 À INTÉGRER MAINTENANT

Ces points sont assez simples pour v0.2.2 et améliorent la fidélité à la Bible sans exploser le moteur.

---

## P1-1 — Récolte Commune des Nourricières

### Règle canonique

+1 Nutriment/tour si 2+ unités Nourricières contrôlent un Sol Fertile.

### Arbitrage MVP

Interprétation simple :

> Si J1 a au moins 2 unités Nourricières actuellement posées sur des cases Sol Fertile au moment de la Production, J1 gagne +1 Nutriment.

### Correction attendue

Dans `doProduction(1)` :

```js
const nourOnFertile = unitsOnBoard().filter(u => u.j === 1 && MAP[u.cell] === "SF").length;
if (j === 1 && nourOnFertile >= 2) {
  gains.nut += 1;
  logMsg("Récolte Commune : +1 🌱 pour les Nourricières.", "hl");
}
```

### Critères d'acceptation

- 2 Nourricières sur Sol Fertile → +1 Nutriment bonus.
- 1 seule Nourricière sur Sol Fertile → pas de bonus.
- Bonus max +1 par production.

---

## P1-2 — Unité immobile = +1 dé DEF

### Règle canonique

Dans la Boucle de Tour : unité immobile = +1 dé DEF ce tour.

### Arbitrage MVP

Une unité est considérée comme immobile si elle n'a pas bougé pendant sa Phase Mouvement active.

### Correction attendue

Ajouter :

```js
u.isDefending = true;
```

par défaut au début de la phase Mouvement du joueur.

Si l'unité bouge :

```js
u.isDefending = false;
```

Dans `attack()` :

```js
if (d.isDefending) nD++;
```

Nettoyer en fin de round ou au début du round suivant.

### Critères d'acceptation

- Une unité qui ne bouge pas gagne +1 DEF.
- Une unité qui bouge ne gagne pas ce bonus.
- Le log ou l'inspecteur indique le bonus de défense si actif.

---

## P1-3 — Bonus Clairière non contestée

### Règle canonique

Clairière : si non contestée, +1 Ensoleillement bonus.

### Arbitrage MVP

Comme le contrôle est simplifié, appliquer :

> Si une unité contrôle une case Clairière en Production et qu'aucune unité ennemie n'est adjacente à cette case, +1 Ensoleillement bonus pour son propriétaire.

Alternative plus simple : ne pas l'intégrer maintenant et documenter comme non implémenté.

### Décision recommandée

**Option prudente : ne pas intégrer en v0.2.2.**  
Pourquoi : il faut définir “contestée” proprement. À garder en P2 si Codex estime que cela complique trop.

---

## P1-4 — Bassin : non-aquatique stationnaire = -1 VIT/tour

### Règle canonique

Bassin / Canal : unité non-aquatique stationnaire = -1 VIT/tour.

### Arbitrage MVP

Hydrophytes = aquatiques. Nourricières = non-aquatiques.

### Correction attendue

Dans `resolveControlPhase()` :

```js
unitsOnBoard().forEach(u => {
  if (MAP[u.cell] === "BA" && u.j !== 2 && u.moved === 0) {
    hurt(u, 1, "stationnaire en Bassin");
  }
});
```

Attention : si `u.moved` est reset avant cette vérification, il faut utiliser `u.movedThisRound` ou `u.hasMovedThisActivation`.

### Critères d'acceptation

- Nourricière stationnaire sur Bassin → -1 VIT en Contrôle.
- Nourricière entrée dans Bassin ce tour puis fin de round : à arbitrer. Recommandé : subit aussi, car elle termine stationnaire dedans.
- Hydrophyte sur Bassin → pas de dégât.

---

## P1-5 — Deck événement naturel réduit assumé

### État v0.2.1

L'UI indique `deck MVP 10/24`. C'est bien.

### Décision v0.2.2

Conserver le deck réduit naturel pour l'instant. Ne pas forcer les 24 cartes tant que les règles associées ne sont pas codées.

### Correction attendue

Documenter en commentaire :

```js
// Deck naturel MVP réduit : 10 cartes sur 24.
// Les cartes restantes nécessitent des mécaniques non implémentées.
```

---

# 7. P2 — À NE PAS FAIRE MAINTENANT, MAIS À LISTER EN NON-IMPLÉMENTÉ

Codex doit lister ces mécaniques comme volontairement absentes :

## Capacités actives Hydrophytes

- Nénuphar-Sentinelle : Onde de Repli.
- Roseau-Harponneur : Harpon Végétal.
- Algue-Enlaceuse : Dérive.

## Passifs Hydrophytes avancés

- Submersion.
- Floraison du Marais.

## Terrains avancés

- Clairière non contestée, si non intégrée.
- Friche non contrôlée générant carte Gris-Noir en fin de tour.
- Pêche d'urgence Bassin.

## Autres modes

- Récolte Sanglante.
- Purification.
- Invasion.
- Germination Sacrée.
- Mode coopératif Gris-Noir.
- Joueur Gris-Noir.

## Factions non MVP

- Médicinales.
- Toxiques.

---

# 8. TEST HARNESS À AJOUTER

Ajouter dans le fichier HTML final :

```js
window.GreenWarTests = {
  run() {
    // retourne un tableau de résultats ou log console.table
  }
};
```

Les tests peuvent être simples, même non exhaustifs. L'objectif est d'éviter les régressions grotesques.

## Tests obligatoires

### TEST 1 — Charge droite OK

Setup :

- Placer Carotte en A.
- Simuler mouvement en ligne droite de 2 cases.
- Vérifier `hasStraightCharge(carotte) === true`.

### TEST 2 — Charge cassée KO

Setup :

- Placer Carotte en A.
- Simuler mouvement de 1 case horizontal + 1 case vertical.
- Vérifier `hasStraightCharge(carotte) === false`.

### TEST 3 — Entrave affecte le prochain mouvement

Setup :

- Appliquer Entrave à une unité J2.
- Passer à la Phase Mouvement J2.
- Vérifier `movePoints(unité) === 0`.
- Expirer le statut après mouvement.
- Vérifier que le tour suivant `movePoints(unité) > 0` si aucune autre pénalité.

### TEST 4 — Ralentissement affecte le prochain mouvement

Setup :

- Appliquer Ralentissement à une unité MV 2.
- Vérifier que son MV effectif devient 1 à sa prochaine Phase Mouvement.

### TEST 5 — Pollution réduit la production

Setup :

- Sol Fertile avec pollution 1.
- Contrôle par J1.
- Vérifier production Nutriment réduite de 1, donc 0.

### TEST 6 — Sol Fertile à la mort

Setup :

- Détruire une unité sur Sol Fertile.
- Vérifier +1 Nutriment au propriétaire.
- Vérifier absence de double gain pour Nourricière sur Sol Fertile.

### TEST 7 — Gris-Noir tous les 2 rounds

Setup :

- Simuler passage round 1 → 2.
- Vérifier qu'une carte Gris-Noir est tirée au round 2.
- Simuler round 3.
- Vérifier qu'elle n'est pas tirée au round 3.

### TEST 8 — Drone de Surveillance temporaire

Setup :

- Activer flag drone.
- Vérifier Roseau Portée 3 réduit à Portée 1 pour le round.
- Nettoyer round.
- Vérifier retour Portée 3.

---

# 9. REFACTOR MINIMAL CONSEILLÉ

Ne pas faire de refonte massive. Mais extraire ces fonctions est recommandé :

```js
function startPlayerActivation(playerId) {}
function startMovementPhase(playerId) {}
function moveUnit(unit, destinationCell, pathCost) {}
function resolveAttack(attacker, defender) {}
function resolveControlPhase() {}
function cleanupRoundFlags() {}
function applyStatus(unit, statusName) {}
function expireMovementStatusesFor(playerId) {}
function effectiveMovePoints(unit) {}
function effectiveAttackDice(attacker, defender) {}
function effectiveDefenseDice(defender, attacker) {}
function hasStraightCharge(unit) {}
```

But : rendre les règles testables sans cliquer dans l'UI comme un druide sous anxiolytique.

---

# 10. CHANGEMENTS UI MINIMAUX ATTENDUS

## À faire

- Afficher clairement : `Round X — Joueur actif — Phase`.
- Afficher `Phase Contrôle — fin de round` dans le log.
- Dans l'inspecteur unité, afficher :
  - statuts actifs,
  - bonus défense immobile si actif,
  - mouvement consommé,
  - portée effective si Drone actif.
- Garder les panneaux séparés : Événement naturel / Gris-Noir.

## À ne pas faire

- Ne pas refaire la direction artistique.
- Ne pas ajouter de librairie CSS.
- Ne pas remplacer les emojis par des assets externes.
- Ne pas ajouter de système responsive complexe.

---

# 11. LIVRABLES ATTENDUS DE CODEX

Codex doit produire :

1. **`greenwar_mvp_v0.2.2.html`**  
   Fichier complet autonome.

2. **Changelog court**, par exemple :

```md
## Changelog v0.2.1 → v0.2.2
- Correction Charge Racinaire sur chemin complet.
- Phase Contrôle explicitée fin de round.
- Statuts Entrave/Ralentissement expirent après mouvement affecté.
- Ajout Récolte Commune.
- Ajout défense immobile.
- Ajout tests `window.GreenWarTests.run()`.
- Documentation des simplifications MVP.
```

3. **Liste des mécaniques volontairement non implémentées**, notamment :

```md
Non implémenté en MVP v0.2.2 :
- Médicinales / Toxiques.
- Poison.
- Zone d'Épines.
- Onde de Repli.
- Harpon Végétal.
- Dérive.
- Submersion.
- Modes de victoire avancés.
- Deck naturel complet 24 cartes.
```

---

# 12. ACCEPTANCE CHECKLIST

Avant d'accepter le fichier final, vérifier :

## Technique

- [ ] Le fichier s'ouvre localement dans navigateur moderne.
- [ ] Aucune erreur console au chargement.
- [ ] Aucun appel réseau obligatoire pour jouer.
- [ ] `window.GreenWarTests.run()` existe.
- [ ] Les tests retournent PASS/FAIL lisible.

## Gameplay

- [ ] On peut commencer une partie.
- [ ] On peut recruter.
- [ ] On peut déplacer.
- [ ] On peut attaquer.
- [ ] Les dés s'affichent.
- [ ] Les dégâts retirent des VIT.
- [ ] Une unité à 0 VIT disparaît.
- [ ] Sol Fertile donne le Nutriment correct à la mort.
- [ ] Pollution réduit la production.
- [ ] Le Gris-Noir se déclenche tous les 2 rounds.
- [ ] Domination vérifie 4+ terrains à partir du round prévu.

## Règles

- [ ] Charge Carotte fonctionne uniquement en ligne droite continue.
- [ ] Entrave bloque bien le prochain mouvement.
- [ ] Ralentissement réduit bien le prochain mouvement.
- [ ] Défense immobile donne +1 DEF.
- [ ] Récolte Commune donne +1 Nutriment dans les bonnes conditions.
- [ ] Hydrophytes gardent avantage de mouvement en terrain humide.
- [ ] Nénuphar perd VIT hors eau à la Phase Contrôle.

## UI

- [ ] Version visible : v0.2.2.
- [ ] Événement naturel visible séparément.
- [ ] Gris-Noir visible séparément.
- [ ] Log clair.
- [ ] Inspecteur utile.
- [ ] Le joueur actif est identifiable.

---

# 13. NOTE DE DIRECTION

Le MVP v0.2.2 doit devenir une **base stable de playtest**, pas un démonstrateur gonflé aux amphétamines.

La priorité absolue est :

1. moteur stable,
2. règles lisibles,
3. tests minimaux,
4. playtest réel,
5. seulement ensuite extension des factions.

Un jeu injouable avec quatre factions est moins précieux qu'un duel simple qui tourne proprement. C'est moins sexy, certes, mais c'est comme les fondations d'une cathédrale : personne ne les applaudit, jusqu'au jour où tout s'effondre et que tout le monde redécouvre la gravité.

---

# 14. RÉSUMÉ EXÉCUTIF POUR CODEX

Corrige le moteur, pas l'univers.

Le fichier v0.2.1 est un bon patch intermédiaire, mais il reste fragile sur :

- Charge Racinaire,
- statuts temporaires,
- phase Contrôle,
- flags événementiels,
- contrôle simplifié à documenter,
- production / Sol Fertile / Compost,
- absence de tests.

Le livrable final attendu est :

```txt
greenwar_mvp_v0.2.2.html
Stable Core Build
Vanilla single-file
2 factions only
Testable via console
```

