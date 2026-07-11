# COMPORTEMENT DES BOTS — Documentation

## Bots disponibles (`tooling/balance-lab/bots.js`)

### heuristic
Délègue aux fonctions `autoplay*` du prototype v0.2.6, inchangées :

- **Recrutement** : privilégie l'abordable, puis équilibre les types les moins
  représentés ; J1 suit l'ordre carotte > tomate > haricot à égalité.
- **Mouvement** : score par case — proximité du centre ×2, malus zone de déploiement,
  bonus SF pour la tomate, bonus charge en ligne droite pour la carotte, recherche
  de cible d'Entrave pour le haricot.
- **Attaque** : cible l'ennemi à portée ayant le moins de vitalité.

### random (aléatoire contrôlé)
Toutes les décisions tirées du RNG seedé de la partie (reproductible) :
recrutement 85 % si abordable (type et case uniformes), mouvement 70 % par unité
(destination uniforme dans les cases atteignables), attaque sur cible uniforme.
Options : `recruitChance`, `moveChance`, `spendGreedy` (variante `random-greedy` :
recrute toujours — politique de dépense agressive).

## Inversion systématique des sièges

Chaque lot (`swapSeats: true`, défaut) joue chaque seed dans les deux ordres
d'activation `[1,2]` et `[2,1]`. Le champ `firstPlayerWon` de chaque partie alimente
la métrique `seatAdvantage` et l'alerte AVANTAGE_SIEGE.

## Comparaison des stratégies (1000 parties chacune, mêmes seeds)

| Configuration | Winrate J1 | Winrate J2 | Durée | Cause principale |
|---|---|---|---|---|
| heuristic vs heuristic | 0,0 % | 100,0 % | 5,01 | domination 99,9 % |
| random vs random | 28,5 % | 71,5 % | 5,87 | départage terrains 57,3 % |

## Diagnostic : règles ou bots ?

Méthode : si un déséquilibre disparaît en random-vs-random, il provient du comportement
des bots ; s'il persiste, il est dans les règles.

**Résultat v0.2.6 : le déséquilibre est dans les règles** (71,5 % J2 sans aucune
heuristique). L'écart 71,5 → 100 % est la part attribuable au comportement :
l'heuristique « courir au centre » exploite à fond l'avantage territorial J2, et
l'heuristique J1, qui applique la même politique centriste, envoie ses unités mourir
en terrain défavorable. Une meilleure IA J1 adoucirait le score sans corriger le fond.

Biais connus des bots à garder en tête en lisant les chiffres :

- un seul recrutement tenté par round, jamais de rétention volontaire de ressources ;
- aucune notion de focus fire coordonné ni de sacrifice tactique ;
- le bot heuristique J2 ne « campe » pas volontairement la cible de domination —
  il y arrive par accident géométrique, ce qui rend le 100 % d'autant plus parlant.
