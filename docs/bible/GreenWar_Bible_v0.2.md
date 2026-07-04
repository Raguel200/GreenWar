# GREENWAR — BIBLE DE PROTOTYPE v0.2
### Document de référence canonique | Réconciliation visuels + règles
### Remplace définitivement la v0.1 sur tous les points contradictoires

---

> **Changelog v0.1 → v0.2**
> - Factions 3 & 4 renommées : Officinales → **Médicinales** / Adventices-Mycéliennes → **Toxiques**
> - 12 unités canonisées depuis les illustrations officielles
> - Mécaniques Toxiques entièrement réécrites (piège / zone / burst, pas guérilla souterraine)
> - Stats unifiées en format riche unique (ATK/DEF/VIT/MV/Portée/Coût)
> - Tuiles terrain : 6 types confirmés depuis les assets visuels
> - Petit delta ChatGPT vs v0.1 résolu faction par faction

---

## SOMMAIRE

1. Pitch & Positionnement
2. Factions — Identités canoniques
3. Ressources
4. Terrains (6 tuiles confirmées)
5. Unités — 12 fiches canoniques
6. Cartes Événement
7. Système de Combat D6
8. Boucle de Tour
9. Conditions de Victoire
10. Mode Gris-Noir
11. Version MVP Codable
12. Stratégie Économique

---

# 1. PITCH & POSITIONNEMENT

## Pitch court

**GreenWar** est un wargame tactique asymétrique dans lequel quatre factions végétales conscientes s'affrontent pour la domination des ressources naturelles — eau, nutriments, lumière, biodiversité — pendant que le **Gris-Noir** détruit méthodiquement tout ce pour quoi elles se battent.

4 factions. 6 terrains. 5 ressources. 12 unités de base. Un deck de 24 cartes événement imprévisibles. Des dés D6. Un monde indifférent à ta survie.

## Positionnement

| Axe | Référence | Différenciateur GreenWar |
|---|---|---|
| Profondeur tactique | Warhammer 40K | Univers écologique original + coût de production inférieur |
| Asymétrie | Root (Leder Games) | Monde hostile tiers actif (Gris-Noir) |
| Accessibilité | Wingspan | Ton adulte, mécaniques de guerre, pas de birdwatching |
| Éducatif | Jeux pédago institutionnels | Sans morale explicite, tout passe par les règles |

**Cible primaire :** 16–45 ans, wargamers, communauté impression 3D, enseignants innovants, gamers éco-sensibles.
**Prix d'entrée :** Starter Box 45–65€ physique. Print & Play PDF 12–18€.

---

# 2. FACTIONS — IDENTITÉS CANONIQUES

## Vue d'ensemble

| Faction | Couleur | Archétype tactique | Ressource dominante | Ressource faible | Difficulté |
|---|---|---|---|---|---|
| **Nourricières** | Vert chaud / ocre / rouge | Économie + hold | Nutriments | Biodiversité | ★☆☆ |
| **Hydrophytes** | Teal / cyan / bleu marais | Contrôle territorial + ralentissement | Eau | Ensoleillement | ★★☆ |
| **Médicinales** | Vert profond / violet / blanc | Soutien + altération + poison lent | Biodiversité | Nutriments | ★★☆ |
| **Toxiques** | Rouge sombre / noir végétal / épines | Piège + zone + burst de dégâts | Biodiversité + Nutriments | Eau | ★★★ |

---

## FACTION 1 — NOURRICIÈRES

**Slogan :** *"Nous nourrissons. Nous défendons. Dans cet ordre."*
**Vibes :** Milice potagère. Solide, proliférante, terrienne. La faction de départ recommandée.
**Identité visuelle :** Formes rondes, fruits, légumes, racines. Vert chaud, ocre, rouge tomate.

**Capacités passives de faction :**
- **Récolte Commune** : +1 Nutriment/tour si 2+ unités Nourricières contrôlent un Sol Fertile.
- **Culture Associée** : +1 dé ATK si deux espèces différentes des Nourricières sont adjacentes.
- **Compost de Guerre** : toute unité Nourricière détruite génère 1 Nutriment immédiatement.

---

## FACTION 2 — HYDROPHYTES

**Slogan :** *"Nous n'avançons pas. Nous engloutissons."*
**Vibes :** Contrôle de zone, noyade tactique, patience de prédateur amphibie.
**Identité visuelle :** Formes fluides, nénuphars, roseaux, algues. Teal, cyan, bleu-vert marécageux.

**Capacités passives de faction :**
- **Submersion** : dépenser 2 Eau pour convertir une case adjacente en Zone Humide temporaire (2 tours).
- **Réseau de Berges** : +1 MV sur cases aquatiques ou humides.
- **Floraison du Marais** : +1 dé DEF si 3 unités Hydrophytes occupent des terrains humides simultanément.

---

## FACTION 3 — MÉDICINALES *(ex-Officinales)*

**Slogan :** *"Tout soigne. Tout tue. La dose décide."*
**Vibes :** Alchimistes botaniques. Raffinées, mystiques, aromatiques. Soignent, dopent, empoisonnent.
**Identité visuelle :** Feuilles fines, fleurs, fioles, halo. Vert profond, violet, blanc argenté.

**Capacités passives de faction :**
- **Baume Végétal** : 1x/tour, soigner 1 VIT à une unité alliée adjacente pour 1 Biodiversité.
- **Rite Médicinal** : dépenser 2 Biodiversité pour annuler ou modifier une carte Événement avant application.
- **Toxine Cumulative** : chaque marqueur Poison s'accumule. À 3 marqueurs sur une même cible → destruction automatique en Phase Contrôle. Limite : 3 marqueurs max par cible.

---

## FACTION 4 — TOXIQUES *(ex-Adventices-Mycéliennes)*

**Slogan :** *"Approche. J'insiste."*
**Vibes :** Pièges, mâchoires, spores, zones interdites. La faction punitive. Jouer Toxiques c'est faire venir l'ennemi vers sa mort.
**Identité visuelle :** Épines, mâchoires végétales, champignons toxiques. Rouge sombre, noir végétal, kaki acide.

> ⚠️ **NOTE MÉCANIQUE v0.2** — Refonte complète.
> Les mécaniques souterraines (Réseau Mycélien, Repousse) appartenant à la v0.1 sont supprimées.
> Les Toxiques jouent sur **le contrôle de zone passive, les pénalités d'entrée et les burst de dégâts sur cibles affaiblies**.

**Capacités passives de faction :**
- **Zone d'Épines** : toute unité ennemie entrant dans une case adjacente à une unité Toxique subit 1 dégât automatique (pas de jet, pas de DEF).
- **Appât Carnivore** : si une unité ennemie termine son mouvement sur une case occupée par une Toxique → l'unité Toxique attaque immédiatement en bonus (hors Phase Combat), sans dépenser d'action.
- **Spore Panique** : 1x/tour en Phase Combat, dépenser 1 Biodiversité pour réduire de 1 dé ATK une unité ennemie à portée 2 jusqu'à la fin du tour.

---

# 3. RESSOURCES

## Tableau des 5 ressources

| Ressource | Jeton | Rôle | Source principale | Rareté |
|---|---|---|---|---|
| **Eau** 💧 | Bleu | Mouvement spécial, soin, submersion | Zone Humide, Bassin, Pluie | Commune |
| **Nutriments** 🌱 | Marron | Recrutement, renforcement | Sol Fertile, Compost | Commune |
| **Ensoleillement** ☀️ | Jaune | Attaques photosynthétiques, croissance rapide | Clairière | Commune |
| **Biodiversité** 🌿 | Vert foncé | Combos, soins avancés, annulation événements | Multi-espèces, Friche | Rare |
| **[AVANCÉ] Mycorhize** 🍄 | Violet | Déplacement souterrain, mécaniques avancées | Extension future uniquement | Extension |

**Note proto :** La Mycorhize est retirée du MVP. Elle réintègre le jeu dans l'Extension 1 (Souterrain), quand les Toxiques auront une sous-faction Champignons distincte.

**Règles de ressources :**
- Production : chaque terrain contrôlé génère sa ressource en Phase Production.
- Stock max : 6 jetons par ressource. Au-delà, surplus perdu.
- Survie minimale : un joueur sans terrain reçoit quand même 1 Eau + 1 Ensoleillement par tour.
- Pollution : chaque marqueur Pollution sur un terrain réduit sa production de 1. À 3 marqueurs, terrain stérile jusqu'à purification (coût : 2 Biodiversité ou capacité spéciale).

---

# 4. TERRAINS — 6 TUILES CANONIQUES

*Assets visuels confirmés : Sol Fertile, Clairière, Zone Humide, Bassin/Canal, Friche Gris-Noir, Rocaille Sèche.*
*Tuile manquante du jeu de base : Serre/Potager — à générer lors de la Vague 2 d'assets.*

## Tableau des terrains

| # | Terrain | Couleur dominante | Production | Avantage | Pénalité | Effet spécial |
|---|---|---|---|---|---|---|
| 1 | **Sol Fertile** | Brun chaud + vert germe | 1 Nutriment/tour | Nourricières : seuil DEF 3+ | — | Unité détruite ici → 1 Nutriment au propriétaire |
| 2 | **Clairière** | Jaune doré + herbes + fleurs | 1 Ensoleillement/tour | ATK +1 dé toutes factions | -1 dé DEF (pas de couverture) | Si non contestée : +1 Ensoleillement bonus |
| 3 | **Zone Humide** | Vert-bleu sombre + roseaux | 1 Eau/tour | Hydrophytes : MV +1, DEF seuil 3+ | Autres : MV -1 | Submersion activable (coût 2 Eau) |
| 4 | **Bassin / Canal** | Teal clair + nénuphars + cascade | 2 Eau/tour | Hydrophytes : MV libre | Unité non-aquatique : -1 VIT/tour si stationnaire | Pêche d'urgence : 1x/partie, 3 Eau instantanément pour 0 ressource |
| 5 | **Friche Gris-Noir** | Noir + gris + fûts rouillés | Aucune (stérile) | Toxiques : Zone d'Épines +1 dégât | Entrée = 1 Marqueur Pollution pour toute unité | Génère 1 carte Gris-Noir si non contrôlé en fin de tour |
| 6 | **Rocaille Sèche** | Beige pierreux + fissures | 1 Biodiversité/tour (survie végétale) | DEF +1 dé (couverture pierres) | ATK -1 dé (terrain difficile) | Ralentissement : -1 MV pour unités lourdes (VIT ≥ 3) |

**Tuile Serre/Potager (à générer — stats déjà validées) :**
Production : 2 Nutriments/tour. Bonus Nourricières. Vulnérable événements humains (+1 dé Gris-Noir contre ce terrain).

## Règles de terrain

- **Contrôle :** Une faction contrôle un terrain si elle seule y a des unités en fin de Phase Contrôle.
- **Contesté :** Deux factions présentes = 0 production, 0 contrôle.
- **Transformation permanente :** carte *Bétonnage Express* ou 3 marqueurs Pollution non traités → terrain devient Friche Gris-Noir (irrécupérable sans *Sol Réveillé*).

---

# 5. UNITÉS — 12 FICHES CANONIQUES

## Format de fiche

`NOM | Faction | Coût | MV | ATK | DEF | VIT | Portée | Capacité`

- **MV** = cases de déplacement/tour
- **ATK** = dés lancés en attaque
- **DEF** = dés lancés en défense
- **VIT** = Vitalité (points de vie)
- **Portée** = 1 mêlée / 2+ distance

---

## NOURRICIÈRES

### Tomate-Bastion *(Tank / Défense)*

```
Coût    : 1 Eau + 1 Nutriment
MV      : 1
ATK     : 1
DEF     : 3
VIT     : 4
Portée  : 1
```

**Capacité — Coulis de Guerre :** à chaque fois qu'une unité ennemie attaque la Tomate-Bastion au corps à corps (Portée 1) et inflige au moins 1 dégât, l'ennemi reçoit automatiquement 1 marqueur **Ralentissement** (MV -1 pendant 1 tour). Pas de jet. C'est du jus. Ça colle.

**Note d'équilibre :** Le tank le plus défensif du jeu. ATK ridicule volontaire — elle tient, elle ne tue pas. À coupler avec Carotte-Perceuse pour un combo hold + charge. Seule, c'est une endurance contest qui s'étire. En bloquant un passage, c'est une putain de forteresse maraîchère.

---

### Carotte-Perceuse *(Assaut / Percée)*

```
Coût    : 1 Nutriment + 1 Sol (Ensoleillement)
MV      : 2
ATK     : 3
DEF     : 1
VIT     : 2
Portée  : 1
```

**Capacité — Charge Racinaire :** si la Carotte-Perceuse se déplace en ligne droite sur au moins 2 cases avant d'attaquer, elle gagne +1 dé ATK et **ignore 1 dé DEF adverse** ce tour. Une ligne droite. Comme une carotte dans de la terre.

**Note d'équilibre :** Haute ATK, DEF quasi nulle. Frappe en premier ou meurt. En tandem avec Tomate-Bastion = push classique. Seule sur terrain dégagé = frag rapide. En terrain fragmenté (Rocaille, Zone Humide) = piège à con — la ligne droite est impossible.

---

### Haricot-Grimpeur *(Mobilité / Capture d'objectif)*

```
Coût    : 1 Eau + 1 Biodiversité
MV      : 3
ATK     : 1
DEF     : 1
VIT     : 2
Portée  : 1
```

**Capacité — Vrilles d'Abordage :** peut traverser un obstacle végétal (Ronce, case avec unité alliée) sans pénalité de MV. En cas d'attaque réussie en mêlée, inflige en bonus 1 marqueur **Entrave** (cible ne peut pas se déplacer le tour suivant). La vrille empêche le retrait.

**Note d'équilibre :** Jamais en première ligne. Éclaireur / captureur d'objectif. L'Entrave est sa vraie valeur : bloquer une unité lourde adverse pour permettre un combo Carotte-Perceuse. ATK 1 = ne tue rien seul mais peut ruiner un plan ennemi.

---

## HYDROPHYTES

### Nénuphar-Sentinelle *(Défense / Zone aquatique)*

```
Coût    : 1 Eau + 1 Nutriment
MV      : 2
ATK     : 1
DEF     : 3
VIT     : 3
Portée  : 1
```

**Capacité — Onde de Repli :** 1x/tour, peut dépenser 1 Eau pour repousser une unité ennemie adjacente d'1 case (dans n'importe quelle direction). Le repousser dans une Zone Humide = la soumettre aux pénalités du terrain. Pas de jet. Le nénuphar pulse. L'ennemi recule.

**Condition de terrain :** Hors Zone Humide ou Bassin → Nénuphar-Sentinelle perd 1 VIT par tour (dessiccation). À surveiller.

---

### Roseau-Harponneur *(Distance / Contrôle)*

```
Coût    : 1 Eau + 1 Ensoleillement
MV      : 2
ATK     : 2
DEF     : 1
VIT     : 2
Portée  : 3
```

**Capacité — Harpon Végétal :** lors d'une attaque à distance réussie (au moins 1 dégât infligé), peut choisir de tirer la cible d'1 case vers lui (au lieu d'infliger le dernier dégât). Attire ou blesse. Jamais les deux au même jet.

**Note d'équilibre :** Sniper de marais. La plus longue portée des 12 unités de base. Combinaison Harpon + Onde de Repli du Nénuphar = micro-contrôle positionnel brutal. Fragile au corps à corps — ne jamais le laisser exposé.

---

### Algue-Enlaceuse *(Entrave / Perturbation)*

```
Coût    : 1 Eau + 1 Biodiversité
MV      : 2
ATK     : 1
DEF     : 1
VIT     : 3
Portée  : 1
```

**Capacité — Étreinte Vaseuse :** toute unité ennemie qui attaque l'Algue-Enlaceuse au corps à corps est automatiquement **Entravée** (MV -2 tour suivant), qu'elle réussisse ou non. La toucher, c'est se coller dedans.

**Capacité secondaire — Dérive :** une fois par tour, après avoir subi une attaque, l'Algue peut se repositionner gratuitement d'1 case (pas d'action de mouvement consommée).

**Note d'équilibre :** La "saloperie adorable" du roster. Elle ne tue pas. Elle englue. Elle se déplace après avoir été frappée. En Position sur un passage = ralentisseur stratégique de haute valeur. La sous-estimer est l'erreur classique du débutant.

---

## MÉDICINALES

### Sauge-Oracle *(Soutien / Soin)*

```
Coût    : 2 Biodiversité
MV      : 2
ATK     : 1
DEF     : 2
VIT     : 2
Portée  : 2
```

**Capacité — Feuille de Salut :** 1x/tour, soigne 1 VIT à une unité alliée à portée 2 (incluant elle-même). Coût : 1 Biodiversité. Peut être utilisée hors Phase Combat si l'unité n'a pas encore agi.

**Capacité secondaire — Conseil des Feuilles :** 1x/partie, peut accorder +1 dé DEF à une unité alliée à portée 2 jusqu'à la fin du round. Aucun coût. Une fois. Choisit bien.

**Note d'équilibre :** Inutile seule. Multiplicateur d'efficacité en groupe. La priorité cible adverse numéro 1 dans toute composition Médicinales. Protège-la ou perds le soutien structurel de toute ta faction.

---

### Menthe-Fouetteuse *(Rapide / Harcèlement)*

```
Coût    : 1 Biodiversité + 1 Ensoleillement
MV      : 3
ATK     : 2
DEF     : 1
VIT     : 2
Portée  : 1
```

**Capacité — Souffle Glacé :** après une attaque réussie (au moins 1 dégât), l'unité ciblée subit **-1 dé ATK** jusqu'à la fin de son prochain tour. La Menthe frappe vite et laisse un effet.

**Capacité secondaire — Esquive Mentholée :** si la Menthe-Fouetteuse se déplace avant d'attaquer, elle ne peut pas être ciblée par une attaque à distance ce tour (pas de LOS sur une cible mobile aussi chiante).

**Note d'équilibre :** Harcèlement pur. MV 3 = mobilité maximale dans le roster Médicinales. Combination Souffle Glacé + Belladone-Alchimiste = cible à -1 ATK et en train d'accumuler des Poisons. Fragile, mais une nuisance absolue si bien jouée.

---

### Belladone-Alchimiste *(Poison / Débuff / Trickster)*

```
Coût    : 1 Biodiversité + 1 Eau
MV      : 2
ATK     : 1
DEF     : 1
VIT     : 2
Portée  : 2
```

**Capacité — Infusion Interdite :** chaque attaque réussie inflige 1 marqueur **Poison** au lieu de dégâts directs (ou en plus, si un dégât normal est appliqué — au choix du joueur Médicinales). À 3 marqueurs Poison sur une cible → destruction automatique (voir règles Toxine Cumulative, Section 2).

**Capacité secondaire — Élixir Instable :** 1x/partie, peut cibler une unité alliée ou ennemie avec un effet aléatoire (D6) : 1–2 soin +2 VIT / 3–4 Poison immédiat x1 / 5 Boost +1 ATK pendant 2 tours / 6 Stupeur : cible ne peut pas agir le tour suivant. L'instabilité est une feature, pas un bug.

**Note d'équilibre :** La plus chiante à neutraliser. Pas de dégâts directs = pas de "kill shot" satisfaisant en réponse. Poison invisible qui accumule. Élixir Instable = outil de chaos maîtrisé à sortir au bon moment. Limite absolue : 3 marqueurs Poison par cible.

---

## TOXIQUES

### Ronce-Étrangleuse *(Contrôle / Défense agressive)*

```
Coût    : 1 Nutriment + 1 Biodiversité
MV      : 1
ATK     : 2
DEF     : 2
VIT     : 3
Portée  : 1
```

**Capacité — Couronne d'Épines :** Zone d'Épines passive étendue — toute unité ennemie entrant dans une case **adjacente** à la Ronce (pas seulement occupée) subit 1 dégât automatique. Combiné à la capacité passive de faction : 2 dégâts automatiques d'entrée.

**Capacité secondaire — Enserrement :** si une unité ennemie subit 2+ dégâts de Zone d'Épines au même tour (entrée + combat), elle est automatiquement **Entravée** (MV 0 le tour suivant).

**Note d'équilibre :** Le verrou territorial. MV 1 = elle ne bouge presque pas. À poser sur un couloir stratégique et laisser faire le travail. Combo absolu avec Dionée-Mâchefer : Ronce Entrave, Dionée Burst sur cible affaiblie.

---

### Dionée-Mâchefer *(Assaut / Embuscade / Burst)*

```
Coût    : 1 Nutriment + 1 Ensoleillement
MV      : 2
ATK     : 3
DEF     : 1
VIT     : 3
Portée  : 1
```

**Capacité — Morsure Vorace :** si la cible a déjà subi des dégâts ce tour (via Zone d'Épines, Poison, autre attaque), la Dionée gagne +2 dés ATK supplémentaires sur ce jet. Burst de prédateur sur proie affaiblie.

**Capacité secondaire — Claquement Surprise :** 1x/partie, peut attaquer en dehors de la Phase Combat (pendant la Phase Mouvement adverse, si une unité ennemie s'approche à Portée 1). L'embuscade végétale.

**Note d'équilibre :** ATK 3 de base + potentiellement ATK 5 = la plus haute puissance de burst du jeu. Contrepartie : DEF 1. Une réponse bien ciblée la détruit. Elle ne doit jamais être exposée sans Ronce ou Amanite autour d'elle. Jouée seule = mort rapide. En triangle Ronce/Amanite/Dionée = machine à tuer.

---

### Amanite-Sporifère *(Zone / Altération / Perturbation)*

```
Coût    : 1 Biodiversité + 1 Nutriment
MV      : 2
ATK     : 1
DEF     : 1
VIT     : 2
Portée  : 2
```

**Capacité — Pluie de Spores :** en Phase Combat, peut dépenser 1 Biodiversité pour lancer une attaque de zone sur toutes les unités (amies ET ennemies) dans un rayon de 1 case autour d'une cible choisie. Chaque unité touchée = -1 dé ATK jusqu'à la fin du tour suivant. Pas de dégâts directs. Nuisance de zone.

**Capacité secondaire — Spore Panique :** si 2+ unités ennemies sont affectées par Pluie de Spores simultanément, elles subissent également -1 MV ce tour (mouvement entravé par déorientation fongique).

**Note d'équilibre :** À ne jamais placer au cœur d'un groupe allié serré. La Pluie de Spores affecte ses propres alliés. Elle se positionne en périphérie, dans les rangées intermédiaires. Son rôle : préparer la cible pour la Dionée et neutraliser les tireurs distants adverses.

---

# 6. CARTES ÉVÉNEMENT

## Structure du deck

- 24 cartes. 6 familles de 4 cartes.
- 1 carte piochée par tour en Phase Événement.
- Effets : Instantané / Durée 1 tour / Durée 2 tours / Permanent.
- Médicinales peuvent annuler via Rite Médicinal (2 Biodiversité).

## 6 familles visuelles

| Famille | Icône famille | Couleur carte |
|---|---|---|
| Météo | ☁️ Nuage / Soleil / Pluie | Bleu ciel |
| Croissance | 🌱 Germe | Vert tendre |
| Parasites & Maladie | 🐛 Insecte | Jaune-brun |
| Gris-Noir | 🏭 Usine / Smog | Gris anthracite |
| Symbiose | 🔗 Racines liées | Vert profond |
| Catastrophe | 💀 Crâne végétal | Rouge sang |

## Deck complet — 24 cartes

### MÉTÉO (4 cartes)

| Nom | Durée | Effet |
|---|---|---|
| **Pluie Fine** | Instantané | Toutes les cases : +1 Eau en bonus. |
| **Soleil Cru** | 1 tour | Clairières : +1 Ensoleillement. Nénuphar-Sentinelle hors eau : -1 VIT. |
| **Nuit Froide** | 1 tour | -1 dé ATK pour toutes les unités. Médicinales immunisées (résistance naturelle). |
| **Floraison Soudaine** | 2 tours | +1 Biodiversité à tous. Terrains Fertiles : production doublée. |

### CROISSANCE (4 cartes)

| Nom | Durée | Effet |
|---|---|---|
| **Sol Réveillé** | Permanent | Un terrain Sol Fertile retire tous ses marqueurs Pollution. |
| **Pollinisation Massive** | Instantané | Chaque joueur recrute gratuitement 1 unité à coût ≤ 2 ressources totales. |
| **Compost Sauvage** | Instantané | Les ressources générées par les unités détruites ce tour sont récupérées par leurs propriétaires. |
| **Germination Précoce** | 2 tours | Le joueur avec le moins d'unités sur le plateau reçoit +2 Nutriments par tour. |

### PARASITES & MALADIE (4 cartes)

| Nom | Durée | Effet |
|---|---|---|
| **Invasion de Pucerons** | 1 tour | Une unité Nourricières aléatoire : -1 ATK et -1 DEF. |
| **Champignons Opportunistes** | 2 tours | Sur chaque Friche non contrôlée : 1 obstacle Spore (bloque 1 case). Toxiques immunisées. |
| **Racines Profondes** | Permanent | Une unité ciblée au choix gagne +2 DEF mais MV = 0 (immobilisation choisie). |
| **Parasite Inconnu** | 2 tours | Une unité aléatoire change de contrôle temporairement (passe à l'adversaire). Effet de chaos. |

### GRIS-NOIR (4 cartes)

| Nom | Durée | Effet |
|---|---|---|
| **Pluie Acide** | Instantané | Toutes unités en terrain ouvert (Clairière) : +1 marqueur Pollution. Médicinales : immunité via Rite. |
| **Épandage de Pesticides** | 1 tour | Nourricières : -1 DEF globale. Toxiques immunisées (elles n'y font plus attention). |
| **Smog Étouffant** | 2 tours | Ensoleillement inproductible sur Clairières. ATK photosynthétiques (Nourricières, Médicinales) -1 dé. |
| **Bétonnage Express** | Permanent | Un terrain devient Friche Gris-Noir. Irrécupérable sans *Sol Réveillé*. Effet le plus brutal du deck. |

### SYMBIOSE (4 cartes)

| Nom | Durée | Effet |
|---|---|---|
| **Source Cachée** | Instantané | 1 jeton Eau sur une case vide aléatoire du plateau. |
| **Réseau Racinaire** | 1 tour | Deux unités alliées non adjacentes agissent comme adjacentes pour les combos ce tour. |
| **Mutation Mineure** | Permanent | Une unité ciblée : +1 ATK et -1 DEF (marqueur permanent jusqu'à destruction). |
| **Alliance Forcée** | 1 tour | Les deux joueurs doivent désigner une unité alliée qui ne peut pas attaquer l'adversaire ce tour. Symbiose contrainte. |

### CATASTROPHE (4 cartes)

| Nom | Durée | Effet |
|---|---|---|
| **Sécheresse** | 2 tours | Zones Humides et Bassins : production réduite à 0. Nénuphar-Sentinelle : -1 VIT/tour. |
| **Incendie de Friche** | Instantané | Toutes unités sur la Friche Gris-Noir : 2 dégâts automatiques. Terrain reste Friche. |
| **Vent de Graines** | Instantané | Place 1 unité Haricot-Grimpeur ou Algue-Enlaceuse (à coût minimum) sur une case vide aléatoire. Le jeu décide. |
| **Épuisement Total** | 2 tours | Le joueur avec le plus de ressources en stock perd 2 ressources aléatoires par tour. La nature rééquilibre. |

---

# 7. SYSTÈME DE COMBAT D6

## Principe de base

**Attaquant** lance X dés D6 (X = valeur ATK + modificateurs).
**Défenseur** lance Y dés D6 (Y = valeur DEF + modificateurs).

- **Seuil de base : 4+** = réussite sur chaque dé.
- Les réussites DEF annulent les réussites ATK (ratio 1:1).
- Réussites ATK non annulées = dégâts sur VIT.
- VIT à 0 = unité retirée. Effets de mort appliqués immédiatement.

## Modificateurs

| Situation | Modificateur |
|---|---|
| Terrain favorable (faction) | Seuil passe à **3+** |
| Terrain défavorable | Seuil passe à **5+** |
| 1 marqueur Pollution | -1 dé à l'action concernée |
| 2+ marqueurs Pollution | -1 dé + seuil 5+ |
| Attaque de flanc (par derrière) | +1 dé ATK |
| Unité alliée adjacente | +1 dé DEF |
| Portée maximale atteinte | -1 dé ATK |
| Cible Entravée | +1 dé ATK |
| Cible avec marqueur Poison | +1 dé ATK (cible affaiblie) |

## Séquence de résolution

```
1. Déclaration de cible (dans portée).
2. Calcul dés ATK (valeur + modificateurs).
3. Jet ATK → décompte réussites.
4. Calcul dés DEF (valeur + modificateurs).
5. Jet DEF → décompte réussites.
6. Soustraction : réussites DEF annulent réussites ATK.
7. Réussites ATK restantes = dégâts → VIT diminuée.
8. Si VIT ≤ 0 : unité retirée, effets de mort appliqués.
9. Effets de capacités (Ralentissement, Poison, Entrave, etc.) appliqués.
```

## Exemple de résolution commenté

> **Carotte-Perceuse** (ATK 3, en Clairière, après charge 2 cases en ligne droite : Charge Racinaire active → +1 dé ATK, ignore 1 dé DEF adverse) attaque **Nénuphar-Sentinelle** (DEF 3, en Zone Humide : seuil 3+).
>
> Carotte lance **4 dés** (3 + 1 Charge). Seuil normal 4+. Résultats : 6, 4, 3, 1 → 2 réussites.
> Nénuphar lance **2 dés** (3 - 1 Charge ignorée). Seuil 3+ (terrain favorable). Résultats : 5, 2 → 1 réussite.
> 2 - 1 = **1 dégât**. Nénuphar : VIT 3 → 2.
> Pas de marqueur Ralentissement (Nénuphar n'a pas attaqué au CàC).

## Marqueurs de statut

| Marqueur | Application | Effet |
|---|---|---|
| **Poison** | Médicinales | -1 VIT/marqueur en fin de Phase Contrôle. 3 marqueurs = mort automatique. |
| **Pollution** | Gris-Noir, Événements | -1 dé ATK et production par marqueur. À 3 → stérile. |
| **Ralentissement** | Tomate-Bastion, Événements | MV réduit de 1. |
| **Entrave** | Haricot-Grimpeur, Ronce, Algue | MV 0 pendant 1 tour (ne peut pas se déplacer). |
| **Brûlure** | Incendie, Canicule | -1 VIT au début de chaque tour. |

---

# 8. BOUCLE DE TOUR

## Séquence complète

```
┌─────────────────────────────────────────────┐
│  PHASE 1 : ÉVÉNEMENT                        │
│  → Piocher 1 carte Événement                │
│  → Appliquer l'effet ou poser marqueur      │
│  → Médicinales : option annulation (2 Bio)  │
├─────────────────────────────────────────────┤
│  PHASE 2 : PRODUCTION                       │
│  → Ressources des terrains contrôlés        │
│  → Appliquer réductions Pollution           │
│  → Maximum 6 jetons par ressource           │
├─────────────────────────────────────────────┤
│  PHASE 3 : CROISSANCE / RECRUTEMENT         │
│  → Recruter une unité (coût fiche)          │
│  → Améliorer une unité (coût variable)      │
│  → Poser une défense passive (Ronce, etc.)  │
│  → Purifier 1 marqueur Pollution (2 Bio)    │
│  → Limite : 1 recrutement / case de départ  │
├─────────────────────────────────────────────┤
│  PHASE 4 : MOUVEMENT                        │
│  → Chaque unité déplace jusqu'à son MV     │
│  → Pénalités de terrain s'appliquent        │
│  → Unité immobile = +1 dé DEF ce tour      │
│  → Zone d'Épines : dégâts dès l'entrée     │
├─────────────────────────────────────────────┤
│  PHASE 5 : COMBAT                           │
│  → Attaquant actif choisit l'ordre          │
│  → Résolution une attaque à la fois         │
│  → Chaque joueur : 1 carte Tactique maxi    │
│  → Effets de mort immédiats                 │
│  → Appât Carnivore (Toxiques) déclenché     │
├─────────────────────────────────────────────┤
│  PHASE 6 : CONTRÔLE                         │
│  → Vérification terrains contrôlés          │
│  → Comptage des Points de Victoire          │
│  → Effets fin de tour : Poison, Brûlure     │
│  → Propagation Pollution (si Friche active) │
│  → Vérification condition de victoire       │
│  → Joueur suivant ou fin de round           │
└─────────────────────────────────────────────┘
```

## Durée de partie

| Format | Tours | Durée |
|---|---|---|
| Escarmouche (2 factions, 6×6) | 6 | 30–45 min |
| Bataille standard | 10 | 60–90 min |
| Scénario narratif | Variable | 2–3h |

---

# 9. CONDITIONS DE VICTOIRE

## 5 modes

| Mode | Condition | Tours max |
|---|---|---|
| **Domination** | Contrôler 4+ terrains en fin de Phase Contrôle | 10 |
| **Purification** | Premier à éliminer tous les marqueurs Pollution du plateau | 10 |
| **Invasion** | Occuper la case de départ adverse avec 2+ unités pendant 2 tours consécutifs | 12 |
| **Germination Sacrée** | Protéger la Pousse Sacrée (pion spécial) pendant 6 tours consécutifs | 8 |
| **Récolte Sanglante** | Atteindre 15 Points de Victoire en premier | Variable |

## Calcul PV — Mode Récolte Sanglante

| Action | PV |
|---|---|
| Contrôler un terrain | +1 PV/tour |
| Détruire une unité ennemie | +1 PV |
| Purifier un terrain pollué | +2 PV |
| Contrôler 3 types de terrains différents | +1 PV/tour (bonus diversité) |
| Survivre à une carte Catastrophe sans perdre d'unité | +1 PV (résilience) |

## Défaite immédiate (mode avancé)

- Toutes les unités détruites + 0 ressource pour recruter en Phase Production suivante.
- 5 terrains convertis en Friche Gris-Noir sur un plateau de 6 = effondrement écologique.

---

# 10. MODE GRIS-NOIR

## Version A — Deck automatique (MVP recommandé)

Tous les 2 tours, tirer 1 carte du deck Gris-Noir (séparé du deck Événement principal). La nature se dégrade indépendamment des joueurs.

## Deck Gris-Noir (10 cartes)

| Carte | Effet automatique |
|---|---|
| **Avancée du Béton** | Un terrain vide → Friche Gris-Noir |
| **Épandage Chimique** | +1 Pollution sur tous les terrains Sol Fertile du plateau |
| **Smog Industriel** | 0 Ensoleillement produit ce tour (tous terrains) |
| **Décharge Illégale** | +2 Pollution sur la Friche existante la plus ancienne |
| **Fuite de Nappe** | Zone Humide ciblée (aléatoire) : -1 Eau production ce tour |
| **Machine d'Extraction** | Retire 2 ressources aléatoires du stock du joueur en tête (PV) |
| **Désherbage Forcé** | Détruit 1 obstacle végétal (Ronce, Spore) présent sur le plateau |
| **Canicule Urbaine** | Toutes unités en Clairière : -1 VIT |
| **Drone de Surveillance** | 0 attaque à distance possible ce tour (Portée 2+ bloquée) |
| **Absorption des Sols** | Un Sol Fertile aléatoire → Rocaille Sèche (dégradation, pas Friche) |

## Version B — Mode coopératif "Effondrement Écologique"

Deux joueurs alliés contre le Gris-Noir. Pas d'attaque inter-joueurs.
1 carte Gris-Noir tirée **chaque tour**.
Victoire commune : purifier 6 terrains avant que 5 soient convertis en Ruines.

## Version C — Faction jouable (Extension)

Joueur 3 incarne le Gris-Noir. Aucune unité vivante : machines, drones, contaminations.
Victoire par destruction de terrain. Perd si les deux factions végétales purifient 8 terrains.

**Roster Gris-Noir Extension (preview) :**

| Unité | ATK | DEF | VIT | Capacité |
|---|---|---|---|---|
| Bulldozer-Spectral | 4 | 3 | 5 | Ignore tous obstacles végétaux |
| Drone Épandeur | 2 | 1 | 2 | Inflige 2 Pollutions en zone à chaque tour |
| Excavatrice Noire | 3 | 4 | 6 | Détruit un terrain (action unique, 1x/partie) |
| Nappe Toxique | — | — | — | Terrain transformé automatiquement en Friche |

---

# 11. VERSION MVP CODABLE

## Périmètre strict du MVP web (v0.1 code)

**Stack :** HTML + CSS + JavaScript vanilla. Un seul fichier. Aucun backend. État en variables JS.
**Plateau :** Grille carrée 6×6.
**Factions :** Nourricières vs Hydrophytes uniquement (les plus contrastées, les plus simples).

## Architecture JS

```javascript
const gameState = {
  plateau: [], // 36 cases [{id, terrain, production, pollution, unite, marqueurs}]
  joueurs: [
    {
      id: 1,
      faction: "nourrieres",
      ressources: {eau: 0, nutriments: 2, ensoleillement: 0, biodiversite: 0},
      unites: [], // fiches unités actives
      pv: 0,
      cartesMain: []
    },
    {
      id: 2,
      faction: "hydrophytes",
      ressources: {eau: 2, nutriments: 0, ensoleillement: 0, biodiversite: 0},
      unites: [],
      pv: 0,
      cartesMain: []
    }
  ],
  tour: { numero: 1, phase: "evenement", joueurActif: 1 },
  deckEvenement: [], // 24 cartes mélangées
  deckGrisNoir: [],  // 10 cartes mélangées
  log: []
};

// Fonctions principales
function initGame() {}         // initialise plateau, factions, decks
function nextPhase() {}        // avance dans la séquence EVNT→PROD→CROIS→MOV→COMBAT→CTRL
function produceResources() {} // calcule production Phase 2
function recruitUnit() {}      // Phase 3 recrutement avec vérification ressources
function moveUnit() {}         // Phase 4 déplacement + Zone d'Épines si Toxiques (n/a MVP)
function resolveAttack() {}    // Phase 5 jet de dés + calcul dégâts
function drawEvent() {}        // Phase 1 pioche + application effet
function applyGrisNoir() {}    // tous les 2 tours, auto
function checkVictory() {}     // vérifie conditions de victoire
function applyEndOfTurn() {}   // Poison, Brûlure, Propagation Pollution
```

## Priorités de développement (ordre strict)

| # | Fonctionnalité | Effort |
|---|---|---|
| 1 | Plateau 6×6 affiché, terrains colorés | 2h |
| 2 | Ressources par joueur, affichage live | 1h |
| 3 | Unités placées sur cases (pions + stats) | 2h |
| 4 | Bouton "Phase Suivante" avec rotation | 1h |
| 5 | Production automatique Phase 2 | 2h |
| 6 | Déplacement d'unité (clic source + clic destination) | 3h |
| 7 | Résolution combat (clic attaquant + clic cible → dés simulés → dégâts) | 3h |
| 8 | Pioche événement + affichage + effet simple | 2h |
| 9 | Vérification condition de victoire (Domination) | 1h |
| 10 | Gris-Noir automatique tous les 2 tours | 2h |
| **TOTAL MVP** | | **~19h** |

## Format JSON d'une case du plateau

```json
{
  "id": "3-4",
  "terrain": "sol_fertile",
  "production": {"nutriments": 1},
  "pollution": 0,
  "faction_bonus": "nourrieres",
  "unite": {
    "id": "tomate_bastion_j1",
    "nom": "Tomate-Bastion",
    "faction": "nourrieres",
    "joueur": 1,
    "mv": 1, "atk": 1, "def": 3, "vit": 3, "vit_max": 4,
    "portee": 1,
    "a_bouge": false,
    "a_attaque": false,
    "marqueurs": ["ralentissement"]
  }
}
```

## Interface minimale requise

```
┌────────────────────────────────────────────────────┐
│  GREENWAR MVP          Tour: 3   Phase: COMBAT     │
├─────────────────────┬──────────────────────────────┤
│                     │  NOURRICIÈRES (J1)            │
│   PLATEAU 6×6       │  💧0  🌱3  ☀️1  🌿0  PV:4  │
│   ┌──┬──┬──┬──┬──┬─┤                              │
│   │SF│CL│ZH│GN│RS│SF│  UNITÉS J1:                 │
│   ├──┼──┼──┼──┼──┼─┤  [🍅 Tomate-Bastion] VIT:3  │
│   │CL│🍅│  │  │🌿│CL│  [🥕 Carotte-Perceuse] VIT:2│
│   ├──┼──┼──┼──┼──┼─┤  [🫘 Haricot-Grimpeur] VIT:2│
│   │ZH│  │🌊│  │  │ZH│                              │
│   ├──┼──┼──┼──┼──┼─┤  HYDROPHYTES (J2)            │
│   │RS│  │  │🎋│  │RS│  💧3  🌱0  ☀️0  🌿1  PV:2  │
│   ├──┼──┼──┼──┼──┼─┤                              │
│   │GN│  │  │  │🌊│GN│  [🌸 Nénuphar] VIT:2        │
│   └──┴──┴──┴──┴──┴─┤  [🎋 Roseau] VIT:2           │
│  SF=Sol ZH=Humide   │  [🌿 Algue] VIT:3            │
│  CL=Clairière GN=GN ├──────────────────────────────┤
│  RS=Rocaille        │  ÉVÉNEMENT ACTIF:             │
│                     │  🏭 Smog Étouffant (2 tours) │
├─────────────────────┴──────────────────────────────┤
│  [DÉPLOYER]  [DÉPLACER]  [ATTAQUER]  [FIN PHASE]  │
└────────────────────────────────────────────────────┘
```

---

# 12. STRATÉGIE ÉCONOMIQUE

## Roadmap produit — 5 phases

### Phase 0 — Validation concept (Mois 1–3) — Coût 0

| Livrable | Format | Prix |
|---|---|---|
| Règles rapides v0.2 | PDF | Gratuit |
| Print & Play 2 factions (Nourricières + Hydrophytes) | PDF A4 | Gratuit |
| Prototype web MVP | HTML/JS | Gratuit |
| Assets visuels présentation | JPG compilés | Gratuit |

**KPIs :** 500 téléchargements, 3 sessions de playtest documentées, 1 Discord créé, 1 first press (blog wargame ou compte X/Reddit r/boardgames).

---

### Phase 1 — Première monétisation digitale (Mois 4–6)

| Produit | Contenu | Prix cible | Marge |
|---|---|---|---|
| **GreenWar Core PDF** | Règles v0.2 + 4 factions + 12 unités + 24 cartes + 6 terrains | 15€ | 95% |
| **STL Pack Alpha** | 12 fichiers 3D (3 unités × 4 factions) imprimables | 22€ | 95% |
| **Kit Pédagogique** | Règles simplifiées + fiches élève + scénario écologie B2B | 45€/classe | 90% |

**Canaux :** Itch.io (Core PDF), MyMiniFactory / Etsy (STL), direct (kit péda).

---

### Phase 2 — Starter Box physique (Mois 9–18)

Financement participatif recommandé. Objectif Kickstarter : 5 000€.

| Contenu | Coût prod | Prix vente |
|---|---|---|
| 2 factions × 6 figurines résine/PLA | 8–15€ | — |
| Deck 60 cartes | 3–5€ | — |
| Plateau carton 6×6 | 2€ | — |
| 40 jetons ressources | 1€ | — |
| 6 dés D6 | 1€ | — |
| Livret règles | 1€ | — |
| **Total prod** | **16–25€** | **55€** |

**Marge brute Starter Box :** 55–65%.
**Stretch goals Kickstarter :** Factions 3 & 4 (+15€), STL Pack (+10€), App Compagnon (-30% si objectif double atteint).

---

### Phase 3 — Gamme étendue (Mois 18–36)

| Produit | Prix | Marge |
|---|---|---|
| Faction Box (12 unités + héros + 30 cartes spéciales) | 40€ | 60% |
| Booster Cartes Événement (10 cartes) | 10€ | 75% |
| Terrain Pack (6 décors carton ou résine) | 25€ | 55% |
| Campaign Book (scénarios, lore, maps) | 30€ | 70% |
| STL Pack complet par faction | 25€ | 92% |

---

### Phase 4 — App Compagnon (Mois 24–48)

| Tier | Prix | Contenu |
|---|---|---|
| Gratuit | 0€ | Tracker ressources, référence règles |
| Standard | 5€/an | Builder d'armée, deck événement dynamique |
| Premium | 10€/an | IA Gris-Noir, campagnes procédurales, générateur scénarios |

---

### Phase 5 — Institutionnel & B2B

| Offre | Prix | Cible |
|---|---|---|
| Kit Classe (30 élèves, 6 équipes) | 200€ | Écoles primaires / collèges |
| Licence enseignant (PDF illimité) | 40€/an | Enseignants individuels |
| Atelier clé en main 2h | 600€ | Associations, médiathèques, festivals |
| Partenariat boutique spécialisée | 30% commission | Boutiques wargame / jeux |

**CA estimé conservateur an 2 :** 80 000–120 000€ brut.

---

## Actifs à valeur commerciale immédiate

| Asset | Valeur | Usage |
|---|---|---|
| Direction artistique botanical grimdark | Signature visuelle unique | Boîte, sleeves, Kickstarter, identité |
| 4 factions visuellement distinctes | Collection driver | Faction Boxes, STL individuels, standees |
| 12 illustrations officielles | Portfolio vendable | Print, prints encadrés, NFT optionnel |
| Système D6 simple et extensible | Licence potentielle | Accord de licence jeu ou co-édition |
| Univers Gris-Noir | Extension + mode coopératif | Produit séparé possible |

---

## Risques et contre-mesures

| Risque | Probabilité | Contre-mesure |
|---|---|---|
| Dionée-Mâchefer trop puissante (ATK 5 burst) | Élevée | Limiter Claquement Surprise à 1x/partie ET exiger cible avec dégâts préalables. Tester en priorité. |
| Médicinales dominantes via Toxine Cumulative | Moyenne | Limite 3 marqueurs Poison absolue + tempo lent = vérifier. |
| Coût production figurines élevé | Moyenne | Priorité STL + impression à la demande + partenariat imprimeur local |
| Marché wargame saturé | Moyenne | Angle écologique + DA forte + accessibilité Print & Play |
| Deux versions du projet qui divergent | Résolu | Ce document est la source unique canonique à partir de maintenant |

---

# ANNEXE A — TABLE DE RÉFÉRENCE RAPIDE

## Stats des 12 unités (format compact)

| Unité | Faction | MV | ATK | DEF | VIT | Portée | Coût |
|---|---|---|---|---|---|---|---|
| Tomate-Bastion | Nourricières | 1 | 1 | 3 | 4 | 1 | 1💧+1🌱 |
| Carotte-Perceuse | Nourricières | 2 | 3 | 1 | 2 | 1 | 1🌱+1☀️ |
| Haricot-Grimpeur | Nourricières | 3 | 1 | 1 | 2 | 1 | 1💧+1🌿 |
| Nénuphar-Sentinelle | Hydrophytes | 2 | 1 | 3 | 3 | 1 | 1💧+1🌱 |
| Roseau-Harponneur | Hydrophytes | 2 | 2 | 1 | 2 | 3 | 1💧+1☀️ |
| Algue-Enlaceuse | Hydrophytes | 2 | 1 | 1 | 3 | 1 | 1💧+1🌿 |
| Sauge-Oracle | Médicinales | 2 | 1 | 2 | 2 | 2 | 2🌿 |
| Menthe-Fouetteuse | Médicinales | 3 | 2 | 1 | 2 | 1 | 1🌿+1☀️ |
| Belladone-Alchimiste | Médicinales | 2 | 1 | 1 | 2 | 2 | 1🌿+1💧 |
| Ronce-Étrangleuse | Toxiques | 1 | 2 | 2 | 3 | 1 | 1🌱+1🌿 |
| Dionée-Mâchefer | Toxiques | 2 | 3 | 1 | 3 | 1 | 1🌱+1☀️ |
| Amanite-Sporifère | Toxiques | 2 | 1 | 1 | 2 | 2 | 1🌿+1🌱 |

---

# ANNEXE B — CHECKLIST PROTO PHYSIQUE

- [ ] Imprimer plateau 6×6 (6 tuiles × 6 cases, couleurs terrain)
- [ ] Découper 12 unités (pions carton, couleur faction)
- [ ] Préparer jetons ressources (cubes colorés : bleu/marron/jaune/vert)
- [ ] Imprimer 24 cartes événement (format carte à jouer)
- [ ] 10 dés D6
- [ ] Règles résumées 1 page recto-verso
- [ ] Premier test : Nourricières vs Hydrophytes, 6 tours, mode Domination
- [ ] Logger les déséquilibres, les règles floues, les phases mortes
- [ ] Itérer sur les marqueurs avant de toucher aux stats

## Documents à produire ensuite

1. Fiches d'unité individuelles imprimables (format 63×88mm)
2. Template carte unité HTML/CSS
3. Code MVP HTML/JS complet
4. Overlay icônes sur tuiles terrains (SVG)
5. Scénario de démo "La Première Récolte" (Nourricières vs Hydrophytes, 6 tours, tutorial)
6. Lorebook court (2 000 mots, histoire du monde GreenWar)

---

*GreenWar Bible de Prototype v0.2 — Document interne — Source canonique unique.*
*Toute version antérieure (v0.1, documents ChatGPT) est subordonnée à ce document en cas de contradiction.*
*Propriété intellectuelle originale. Dépôt INPI recommandé avant Phase 1.*
