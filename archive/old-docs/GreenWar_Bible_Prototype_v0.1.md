# GREENWAR — BIBLE DE PROTOTYPE v0.1
### Guerre du Potager | Document fondateur | Usage interne

---

> *La guerre ne fut pas déclarée. Elle germa.*

---

## SOMMAIRE

1. Pitch
2. Factions
3. Ressources
4. Terrains
5. Unités de départ
6. Cartes Événement
7. Système de Combat D6
8. Boucle de Tour
9. Conditions de Victoire
10. Mode Gris-Noir
11. Version MVP Codable
12. Stratégie Économique

---

# 1. PITCH

## Pitch court (version produit)

**GreenWar** est un wargame tactique de figurines, cartes et ressources dans lequel des factions végétales conscientes s'affrontent pour contrôler l'eau, les nutriments et la lumière — tout en résistant à la contamination systémique du **Gris-Noir**, incarnation de la destruction humaine.

4 factions asymétriques. 6 terrains actifs. 5 ressources. Un deck d'événements imprévisibles. Des dés. Des unités qui repoussent. Un monde qui se soucie très peu de ta survie.

## Pitch long (version lore / retail)

Dans un futur indéfini, les sols ont commencé à mourir. Les mycorhizes ont transmis le signal. Les plantes n'ont pas prié. Elles se sont armées.

Les **Nourricières** fortifient leurs potagers. Les **Officinales** distillent des poisons lents. Les **Hydrophytes** font monter les eaux. Les **Adventices-Mycéliennes** envahissent les ruines de l'intérieur.

Et le **Gris-Noir** avance : béton, smog, pétrole, pesticide, lumière artificielle, terres mortes.

GreenWar est un jeu sur la compétition, la coopération forcée, la résilience et la tactique végétale. Éducatif par les mécaniques. Cruel par le design. Commercialement sérieux.

## Positionnement commercial

| Axe | Référence | Différenciateur GreenWar |
|---|---|---|
| Profondeur tactique | Warhammer 40K | Univers écologique original |
| Jeu de cartes | Magic: The Gathering | Intégré au wargame, pas standalone |
| Accessibilité | Wingspan | Ton adulte, mécanique de guerre |
| Éducatif | Jeux pédago scolaires | Sans morale explicite, par les règles |

**Cible primaire :** 16–45 ans, wargamers, gamers écolo, enseignants innovants, communauté impression 3D.
**Prix d'entrée visé :** Starter Box 45–65€. Booster Cards 8–12€.

---

# 2. FACTIONS

## Vue d'ensemble

| Faction | Archétype | Style dominant | Difficulté |
|---|---|---|---|
| Nourricières | Armée populaire / milice potagère | Économie + production + résistance | ★☆☆ Facile |
| Officinales | Alchimistes / assassins botaniques | Poison + soin + contrôle | ★★☆ Intermédiaire |
| Hydrophytes | Armée de marais | Terrain + ralentissement + contrôle de zone | ★★☆ Intermédiaire |
| Adventices-Mycéliennes | Guérilla sauvage / réseau souterrain | Harcèlement + invasion + résurrection | ★★★ Avancé |

---

## FACTION 1 — LES NOURRICIÈRES

**Slogan de faction :** *"Nous nourrissons. Nous défendons. Dans cet ordre."*

**Identité :** Plantes alimentaires et potagères. Faction de départ recommandée. Excellente pour apprendre le jeu.

| Paramètre | Valeur |
|---|---|
| Ressource dominante | Nutriments |
| Ressource faible | Biodiversité |
| Terrain favori | Sol Fertile / Serre |
| Menace principale | Sécheresse, Pesticides |
| Style | Économie rapide, blob défensif, synergie |

**Capacités passives de faction :**
- **Récolte Commune** : +1 Nutriment par tour si au moins 2 unités contrôlent un terrain fertile.
- **Culture Associée** : +1 dé d'attaque si deux espèces différentes des Nourricières sont adjacentes.
- **Compost de Guerre** : une unité détruite génère 1 Nutriment.

---

## FACTION 2 — LES OFFICINALES

**Slogan de faction :** *"Tout soigne. Tout tue. La dose décide."*

**Identité :** Plantes médicinales, aromatiques et toxiques. Faction de contrôle subtil. Joue sur les debuffs, poisons et soins.

| Paramètre | Valeur |
|---|---|
| Ressource dominante | Biodiversité |
| Ressource faible | Nutriments |
| Terrain favori | Sol Fertile / Clairière |
| Menace principale | Attaque frontale massive, Smog |
| Style | Poison lent, soin, manipulation d'événements |

**Capacités passives de faction :**
- **Infusion de Guerre** : 1x par tour, soigne 1 Vitalité à une unité alliée adjacente pour 1 Biodiversité.
- **Rite Officinal** : peut dépenser 2 Biodiversité pour annuler ou modifier une carte Événement.
- **Toxine Cumulative** : chaque marqueur Poison infligé à un ennemi s'accumule; 3 marqueurs = destruction automatique fin de phase Contrôle.

---

## FACTION 3 — LES HYDROPHYTES

**Slogan de faction :** *"Nous ne chargeons pas. Nous engloutons."*

**Identité :** Plantes aquatiques et de zones humides. Faction de contrôle territorial. Domine les scénarios à objectifs.

| Paramètre | Valeur |
|---|---|
| Ressource dominante | Eau |
| Ressource faible | Ensoleillement |
| Terrain favori | Zone Humide |
| Menace principale | Sécheresse, Canicule, Sol Pollué |
| Style | Terrain, ralentissement, défense élastique |

**Capacités passives de faction :**
- **Submersion** : peut dépenser 2 Eau pour convertir une case adjacente en Zone Humide temporaire (dure 2 tours).
- **Réseau de Berges** : mouvement +1 sur cases aquatiques ou humides.
- **Floraison du Marais** : +1 dé de défense si 3 unités Hydrophytes occupent des terrains humides.

---

## FACTION 4 — LES ADVENTICES-MYCÉLIENNES

**Slogan de faction :** *"Vous avez arraché. Nous avons repoussé. Recommencez."*

**Identité :** Mauvaises herbes, espèces invasives, champignons. Guérilla végétale. Faction de harcèlement et de résilience.

| Paramètre | Valeur |
|---|---|
| Ressource dominante | Mycorhize |
| Ressource faible | Ensoleillement |
| Terrain favori | Friche Sauvage / Ruine Industrielle |
| Menace principale | Herbicides, Feu, Terrain stérile |
| Style | Invasion rapide, repousse, contamination |

**Capacités passives de faction :**
- **Repousse Sauvage** : une unité détruite revient au tour suivant avec Vitalité = 1, une fois par unité par partie.
- **Réseau Mycélien** : dépenser 1 Mycorhize pour téléporter une unité d'une case Friche à une autre (portée : 3 cases).
- **Invasion Adventice** : peut occuper une case vide sans dépenser de mouvement, une fois par phase de mouvement.

---

# 3. RESSOURCES

## Tableau des ressources

| Ressource | Icône proto | Rôle | Source principale | Rareté |
|---|---|---|---|---|
| **Eau** 💧 | Jeton Bleu | Mouvement spécial, soin, submersion | Zone Humide, Pluie | Commune |
| **Nutriments** 🌱 | Jeton Marron | Recrutement, renforcement, défenses | Sol Fertile, Compost | Commune |
| **Ensoleillement** ☀️ | Jeton Jaune | Attaques puissantes, croissance | Clairière, tour normal | Commune |
| **Biodiversité** 🌿 | Jeton Vert | Combos, soins avancés, rituels | Multi-espèces, Friche | Rare |
| **Mycorhize** 🍄 | Jeton Violet | Déplacement souterrain, résurrection | Friche, Mycéliennes | Très rare / Avancé |

## Règles de ressources

**Production de base (chaque Phase Production) :**
- Chaque case de terrain contrôlé produit 1 ressource de son type dominant.
- Le joueur qui n'a aucun terrain produit quand même : 1 Eau + 1 Ensoleillement (survie).
- Maximum en réserve : 6 jetons par ressource (sinon gaspillage — la nature ne stocke pas indéfiniment).

**Pollution et perte :**
- Un marqueur Pollution sur un terrain réduit sa production de 1.
- 3 marqueurs Pollution = terrain inutilisable jusqu'à purification.

**MVP sans Mycorhize :** Pour le prototype initial, Mycorhize est optionnel. Jouer avec 4 ressources seulement.

---

# 4. TERRAINS

## Tableau des terrains

| Terrain | Ressource produite | Bonus faction | Malus faction | Effet spécial |
|---|---|---|---|---|
| **Sol Fertile** | 1 Nutriment/tour | Nourricières | — | Unité détruite ici → 1 Nutriment |
| **Zone Humide** | 1 Eau/tour | Hydrophytes | -1 MV toutes non-Hydrophytes | Possibilité Submersion |
| **Friche Sauvage** | 1 Biodiversité/tour | Adventices-Mycéliennes | -1 dé attaque aux formations ordonnées | Unité détruite → Marqueur Repousse |
| **Serre / Potager** | 2 Nutriments/tour | Nourricières | Vulnérable événements humains +1 | Production doublée mais exposée |
| **Ruine Industrielle** | — | Gris-Noir / Adventices résistantes | Toute unité entrant = 1 Marqueur Pollution | Peut générer 1 Mycorhize si Adventice présente |
| **Clairière** | 1 Ensoleillement/tour | Toutes factions (attaque) | Aucune couverture (-1 dé défense) | +1 Ensoleillement si non contestée |

## Règles de terrain

- **Contrôle :** Un terrain est contrôlé si une seule faction y a des unités en fin de Phase Contrôle.
- **Contesté :** Des unités des deux factions présentes = terrain non contrôlé, pas de production.
- **Transformation :** Certaines cartes et capacités peuvent changer le type d'un terrain (ex : Submersion, Bétonnage Express).
- **Marqueurs Pollution :** Posés par le Gris-Noir ou certains événements. Visibles sur le terrain, réducteurs de production.

---

# 5. UNITÉS DE DÉPART

## Format de fiche d'unité

`NOM | Faction | Type | Coût | MV | ATK | DEF | VIT | Portée | Capacité`

- **MV** = Mouvement (cases par tour)
- **ATK** = Dés d'attaque
- **DEF** = Dés de défense
- **VIT** = Vitalité (points de vie)
- **Portée** = 1 = mêlée, 2+ = à distance

---

## NOURRICIÈRES — 3 unités de départ

| Nom | Type | Coût | MV | ATK | DEF | VIT | Portée | Capacité |
|---|---|---|---|---|---|---|---|---|
| **Chou Bouclier** | Défenseur | 2 Nut | 2 | 2 | 4 | 3 | 1 | *Bouclier Feuillu* : annule 1 marqueur Pollution sur sa case |
| **Tomate Bombarde** | Artillerie | 2 Eau + 1 Nut | 2 | 3 | 1 | 2 | 3 | *Explosion Pulpeuse* : attaque une zone 1 case autour de la cible (-1 dé) |
| **Haricot Grimpant** | Éclaireur | 1 Eau + 1 Sol | 4 | 2 | 1 | 2 | 1 | *Escalade* : peut traverser obstacles végétaux sans pénalité de mouvement |

**Notes d'équilibre :**
- Chou Bouclier = anchor défensif, lent, coûteux en Nutriments. Ne pas spammer.
- Tomate Bombarde = pièce offensive centrale. Explosion Pulpeuse peut blesser les alliés. Attention à sa DEF ridicule.
- Haricot Grimpant = capture d'objectif, éclairage des cases, jamais en première ligne.

---

## OFFICINALES — 3 unités de départ

| Nom | Type | Coût | MV | ATK | DEF | VIT | Portée | Capacité |
|---|---|---|---|---|---|---|---|---|
| **Sauge Soigneuse** | Soutien | 2 Bio | 2 | 1 | 2 | 2 | 2 | *Infusion* : soigne 1 VIT à une unité alliée à portée 2 (1x/tour) |
| **Belladone Toxique** | Assassin | 1 Bio + 1 Sol | 3 | 2 | 1 | 2 | 2 | *Venin Nocturne* : inflige 1 marqueur Poison (effets à fin de tour) |
| **Lavande Apaisante** | Contrôle | 1 Bio + 1 Eau | 2 | 1 | 2 | 2 | 2 | *Brume Calmante* : l'ennemi ciblé perd 1 dé d'attaque pendant 1 tour |

**Notes d'équilibre :**
- Belladone = fragile mais dangereuse à distance. Poison cumulatif = à surveiller. Limite : 3 marqueurs max par unité.
- Sauge = inutile seule, vitale avec alliés. Joueur avancé seulement en utilisation optimale.
- Lavande = meta-contrôle. Peut désactiver une Tomate Bombarde. Pas de dégâts directs = à coupler absolument.

---

## HYDROPHYTES — 3 unités de départ

| Nom | Type | Coût | MV | ATK | DEF | VIT | Portée | Capacité |
|---|---|---|---|---|---|---|---|---|
| **Roseau Piquier** | Ligne | 1 Eau + 1 Nut | 2 | 3 | 2 | 3 | 1 | *Digue Végétale* : toute unité ennemie entrant dans sa case perd 1 MV |
| **Lentille d'Eau** | Essaim | 1 Eau | 3 | 1 | 1 | 1 | 1 | *Prolifération* : si 3 Lentilles adjacentes = +1 ATK à toutes |
| **Nénuphar Gardien** | Forteresse | 2 Eau | 1 | 2 | 3 | 4 | 1 | *Plateforme Flottante* : une unité alliée peut se poser dessus (+1 DEF) |

**Notes d'équilibre :**
- Lentille d'Eau = unité de masse. Puissante en groupe, inutile seule. Nécessite gestion spatiale.
- Nénuphar = tank lent. Ne jamais l'envoyer en terrain sec — perd 1 VIT par tour hors eau.
- Roseau = gardien de passage. Idéal pour verrouiller une case stratégique.

---

## ADVENTICES-MYCÉLIENNES — 3 unités de départ

| Nom | Type | Coût | MV | ATK | DEF | VIT | Portée | Capacité |
|---|---|---|---|---|---|---|---|---|
| **Ortie Fouetteuse** | Berserker | 1 Bio | 4 | 3 | 1 | 2 | 1 | *Fouet Urticant* : si tue une unité, gagne 1 MV supplémentaire ce tour |
| **Ronce Entraveuse** | Piégeur | 1 Nut | 1 | 1 | 2 | 2 | 1 | *Barricade Vivante* : crée un obstacle dans une case adjacente vide (dure 2 tours) |
| **Spore Rampante** | Contaminateur | 1 Myco OU 2 Bio | 3 | 1 | 1 | 1 | 2 | *Nuage Sporulant* : inflige 1 marqueur Pollution à toutes unités à portée 1 (amis et ennemis) |

**Notes d'équilibre :**
- Ortie = aggressive. Kill-streak mecanic. Peut devenir incontrôlable sur terrain libre.
- Ronce = défense passive. Bloque aussi les alliés. À placer avec soin.
- Spore = zone denial. Se nuit à soi-même. Jamais en mêlée serrée avec ses propres unités.

---

# 6. CARTES ÉVÉNEMENT

## Règles d'utilisation

- Deck de 24 cartes minimum pour le prototype.
- 1 carte piochée par tour en Phase Événement.
- Certaines s'appliquent immédiatement, d'autres durent 1–3 tours.
- Les Officinales peuvent annuler certaines avec leur capacité Rite Officinal.
- Rareté proto : Commune (C), Peu Commune (U), Rare (R).

---

## TABLEAU COMPLET — 24 CARTES ÉVÉNEMENT

### Événements Naturels (6)

| Nom | Type | Rareté | Durée | Effet | Faction affectée |
|---|---|---|---|---|---|
| **Pluie Fine** | Naturel | C | Instantané | Toutes les cases reçoivent +1 Eau en bonus ce tour | Toutes |
| **Soleil Cru** | Naturel | C | 1 tour | +1 Ensoleillement sur Clairières. Nénuphar perd 1 VIT si hors eau | Hydrophytes (-) |
| **Nuit Froide** | Naturel | C | 1 tour | -1 ATK à toutes les unités. Officinales immunisées | Toutes sauf Officinales |
| **Vent de Graines** | Naturel | U | Instantané | Place 1 unité Lentille d'Eau ou Spore sur une case vide aléatoire | Hydrophytes / Adventices |
| **Floraison Soudaine** | Naturel | U | 2 tours | +1 Bio à toutes les factions. Terrains fertiles produisent le double | Toutes (+) |
| **Sol Réveillé** | Naturel | R | 3 tours | Un terrain Sol Fertile retire tous ses marqueurs Pollution | Nourricières (+) |

### Événements Gris-Noir (6)

| Nom | Type | Rareté | Durée | Effet | Faction affectée |
|---|---|---|---|---|---|
| **Pluie Acide** | Gris-Noir | C | Instantané | Toutes unités en terrain ouvert = +1 Pollution. Officinales peuvent payer 1 Bio pour immuniser une zone | Toutes (-) |
| **Épandage de Pesticides** | Gris-Noir | C | 1 tour | Toutes unités Nourricières = -1 DEF. Adventices immunisées | Nourricières (-) |
| **Marée d'Hydrocarbures** | Gris-Noir | U | 2 tours | Zone Humide ciblée → Ruine Industrielle temporaire | Hydrophytes (-) |
| **Smog Étouffant** | Gris-Noir | U | 2 tours | Ensoleillement non générable sur Clairières. Toutes attaques photosynthétiques -1 dé | Toutes (-) |
| **Bétonnage Express** | Gris-Noir | R | Permanent | Un terrain est converti en Ruine Industrielle. Irrécupérable sans carte Purification | Toutes (-) |
| **Fuite Chimique** | Gris-Noir | R | 3 tours | 1 terrain adjacent à la Ruine existante reçoit 2 marqueurs Pollution immédiatement | Toutes (-) |

### Événements Biologiques (6)

| Nom | Type | Rareté | Durée | Effet | Faction affectée |
|---|---|---|---|---|---|
| **Invasion de Pucerons** | Bio | C | 1 tour | Une unité Nourricière ciblée aléatoirement = -1 ATK et -1 DEF | Nourricières (-) |
| **Pollinisation Massive** | Bio | U | Instantané | Chaque joueur peut recruter 1 unité Commune gratuitement ce tour | Toutes (+) |
| **Champignons Opportunistes** | Bio | U | 2 tours | Sur toute Friche non contrôlée, place 1 marqueur Spore (obstacle mineur) | Adventices (+) / autres (-) |
| **Racines Profondes** | Bio | U | Permanent | Une unité ciblée gagne +2 DEF mais MV = 0 tant que l'effet est actif | Variable |
| **Compost Sauvage** | Bio | C | Instantané | Tous les marqueurs Nutriments des unités détruites ce tour sont récupérés par leurs propriétaires | Nourricières (+) |
| **Parasite Inconnu** | Bio | R | 2 tours | Une unité aléatoire change temporairement de contrôle (passe à l'adversaire) | Toutes (chaos) |

### Événements Tactiques (6)

| Nom | Type | Rareté | Durée | Effet | Faction affectée |
|---|---|---|---|---|---|
| **Terrain Instable** | Tactique | C | 1 tour | Toutes unités lourdes (VIT ≥ 3) perdent 1 MV | Variables |
| **Source Cachée** | Tactique | U | Instantané | Place 1 jeton Eau sur une case vide aléatoire du plateau | Hydrophytes (+) |
| **Mutation Mineure** | Tactique | U | Permanent | Une unité ciblée gagne +1 ATK et -1 DEF (marqueur permanent jusqu'à destruction) | Variable |
| **Réseau Souterrain** | Tactique | R | 1 tour | Toutes unités Adventices-Mycéliennes peuvent utiliser Réseau Mycélien gratuitement | Adventices (+) |
| **Éclaircie** | Tactique | C | 1 tour | Retire le Smog. Toutes cases = +1 Ensoleillement ce tour | Toutes (+) |
| **Épuisement du Sol** | Tactique | C | 2 tours | Sol Fertile ciblé produit 0 Nutriments | Nourricières (-) |

---

# 7. SYSTÈME DE COMBAT D6

## Principe de base

**Attaquant** lance un nombre de D6 égal à sa valeur **ATK**.
**Défenseur** lance un nombre de D6 égal à sa valeur **DEF**.

- Seuil de base : **4+ = réussite** sur chaque dé.
- Chaque réussite du défenseur annule une réussite de l'attaquant.
- Les réussites restantes de l'attaquant = dégâts infligés à la Vitalité.
- Vitalité à 0 = unité détruite.

## Modificateurs de terrain et contexte

| Situation | Modificateur |
|---|---|
| Terrain favorable (faction) | Seuil de réussite passe à **3+** pour l'action concernée |
| Terrain défavorable | Seuil de réussite passe à **5+** |
| Marqueur Pollution (1) | -1 dé à l'action concernée |
| Marqueur Pollution (2+) | -1 dé et seuil 5+ |
| Carte tactique favorable | +1 dé, OU conversion d'1 échec en réussite |
| Attaque de flanc | +1 dé d'attaque |
| Unité alliée adjacente | +1 dé de défense |
| Portée maximale | -1 dé d'attaque |

## Séquence de résolution d'un combat

```
1. L'attaquant déclare une cible (dans portée).
2. Calcul des dés ATK (+ modificateurs).
3. L'attaquant lance ses dés.
4. Calcul des dés DEF (+ modificateurs).
5. Le défenseur lance ses dés.
6. Soustraction : réussites DEF annulent réussites ATK.
7. Réussites ATK restantes = dégâts → diminuer VIT.
8. Si VIT ≤ 0 : unité retirée. Effets de mort appliqués (Repousse, Compost, etc.).
```

## Exemple de résolution

> **Tomate Bombarde (ATK 3, terrain Sol Fertile)** attaque **Roseau Piquier (DEF 2)**.
>
> Sol Fertile = favorable pour Nourricières → seuil 3+.
> Tomate lance 3 dés : 5, 3, 1 → 2 réussites (3+ : 5 et 3 passent).
> Roseau lance 2 dés : 4, 2 → 1 réussite.
> 2 - 1 = **1 dégât**. Roseau : VIT 3 → 2.

## Marqueurs de statut

| Marqueur | Effet |
|---|---|
| **Poison** | À chaque fin de Phase Contrôle : -1 VIT par marqueur actif |
| **Pollution** | -1 dé par marqueur aux jets d'attaque ET de production |
| **Repousse** | L'unité détruite peut revenir avec VIT 1 au début du prochain tour |
| **Brûlure** (Canicule) | -1 VIT au début de chaque tour |
| **Ralentissement** | MV réduit de moitié (arrondi au supérieur) |

---

# 8. BOUCLE DE TOUR

## Structure par tour

```
PHASE 1 : ÉVÉNEMENT
  → Piocher 1 carte du deck Événement
  → Appliquer l'effet immédiatement OU poser le marqueur de durée

PHASE 2 : PRODUCTION
  → Chaque joueur reçoit les ressources de ses terrains contrôlés
  → Application des réductions de Pollution
  → Maximum : 6 jetons par ressource

PHASE 3 : CROISSANCE / RECRUTEMENT
  → Dépenser des ressources pour :
     - Recruter une nouvelle unité (coût = fiche unité)
     - Améliorer une unité (coûts variables)
     - Poser une défense passive (Ronce, Digue, etc.)
     - Purifier un marqueur Pollution (coût : 2 Bio ou capacité faction)
  → Limite : 1 recrutement par case de départ contrôlée

PHASE 4 : MOUVEMENT
  → Chaque unité peut se déplacer de son score MV en cases
  → Terrains à pénalité réduisent le MV
  → Une unité peut attaquer OU se déplacer si elle a déjà bougé de son maximum
  → Une unité qui n'a pas bougé peut +1 DEF ce tour (position fortifiée)

PHASE 5 : COMBAT
  → L'attaquant actif choisit l'ordre de ses attaques
  → Résolution une attaque à la fois (pas simultané)
  → Effets de mort appliqués immédiatement
  → Les deux joueurs peuvent jouer 1 carte Tactique chacun pendant cette phase

PHASE 6 : CONTRÔLE
  → Vérifier terrains contrôlés / contestés
  → Compter les Points de Victoire
  → Appliquer effets de fin de tour (Poison, Brûlure, Pollution propagation)
  → Vérifier condition de victoire
  → Passer au joueur suivant (ou fin de round si les deux ont joué)
```

## Durée d'une partie

| Format | Nombre de tours | Durée estimée |
|---|---|---|
| Escarmouche | 6 tours | 30–45 min |
| Bataille standard | 10 tours | 60–90 min |
| Campagne (scénario) | Variable | 2–3h |

---

# 9. CONDITIONS DE VICTOIRE

## Modes de jeu de base

| Mode | Condition de victoire | Tours max |
|---|---|---|
| **Domination** | Contrôler 4+ terrains en fin de tour 8 | 10 |
| **Purification** | Premier à retirer tous les marqueurs Pollution du plateau | 10 |
| **Invasion** | Occuper la case de départ adverse avec 2+ unités pendant 2 tours consécutifs | 12 |
| **Germination Sacrée** | Protéger la Pousse Sacrée (pion spécial) pendant 6 tours | 8 |
| **Récolte Sanglante** | Atteindre 15 Points de Victoire en premier | Variable |

## Calcul des Points de Victoire (mode Récolte Sanglante)

| Action | PV |
|---|---|
| Contrôler un terrain | +1 PV/tour |
| Détruire une unité ennemie | +1 PV |
| Purifier un terrain pollué | +2 PV |
| Activer un objectif secondaire | +1 à +3 PV |
| Avoir 3 terrains différents | +1 PV/tour (bonus diversité) |

## Défaite immédiate (conditions optionnelles avancées)

- Toutes les unités détruites ET aucune ressource pour recruter.
- 5 cases du plateau converties en Ruine Industrielle (scénario Gris-Noir sévère).

---

# 10. MODE GRIS-NOIR

## Version 1 : Deck automatique (recommandée pour MVP)

**Principe :** À chaque début de tour, en plus de la carte Événement normale, le plateau reçoit 1 action Gris-Noir automatique.

**Deck Gris-Noir (10 cartes de base) :**

| Carte | Effet automatique |
|---|---|
| **Avancée du Béton** | Un terrain vide devient Ruine Industrielle |
| **Épandage Chimique** | +1 Pollution sur tous les terrains Sol Fertile du plateau |
| **Smog Industriel** | Aucun Ensoleillement produit ce tour |
| **Décharge Illégale** | +2 Pollution sur une Friche existante |
| **Fuite de Nappe** | Zone Humide perd 1 Eau de production ce tour |
| **Machine d'Extraction** | Retire 2 ressources aléatoires du stock d'un joueur aléatoire |
| **Désherbage Forcé** | Détruit la Ronce Entraveuse ou obstacle végétal présent |
| **Canicule Urbaine** | Toutes unités en Clairière : -1 VIT |
| **Drone de Surveillance** | Aucune attaque à distance possible ce tour |
| **Absorption des Sols** | Un Sol Fertile devient Friche Sauvage |

**Fréquence :** 1 carte Gris-Noir tirée tous les 2 tours en mode normal. Tous les tours en mode Apocalypse.

## Version 2 : Mode coopératif "Effondrement Écologique"

Les deux joueurs s'allient contre le Gris-Noir.

**Règles spécifiques :**
- Pas d'attaque entre joueurs. Combat uniquement contre marqueurs Gris-Noir et machines.
- 1 carte Gris-Noir tirée par tour + les effets s'accumulent.
- Objectif commun : purifier 6 terrains avant que 5 soient convertis en Ruines.
- Score coopératif : PV combinés des deux factions à la fin.

## Version 3 : Faction jouable (extension)

Dans une extension future, le joueur 3 incarne le Gris-Noir.

**Style de jeu Gris-Noir :**
- Aucune unité vivante. Machines, drones, contaminations.
- Ne gagne pas de PV par combat : gagne par destruction de terrain.
- Victoire : convertir 7 terrains ou réduire les deux factions à 0 unités.

**Unités proto Gris-Noir (extension) :**

| Unité | Type | ATK | DEF | VIT | Capacité |
|---|---|---|---|---|---|
| Bulldozer-Spectral | Machine | 4 | 3 | 5 | Ignore obstacles végétaux |
| Drone Épandeur | Volant | 2 | 1 | 2 | Inflige 2 Pollutions en zone |
| Excavatrice Noire | Siège | 3 | 4 | 6 | Détruit un terrain par activation |
| Nappe Toxique | Zone | 0 | 0 | — | Terrain transformé automatiquement |

---

# 11. VERSION MVP CODABLE

## Périmètre du prototype web (v0.1)

**Stack recommandée :** HTML + CSS + JavaScript vanilla dans un seul fichier.
**Pas de backend.** État du jeu stocké en variables JS.
**Plateau :** Grille hexagonale ou carrée 6×6 (carré plus simple pour proto).

## Architecture fonctionnelle

```
ÉTAT DU JEU (gameState object)
├── plateau : grille 6×6 (type de terrain, unités présentes, marqueurs)
├── joueurs : [J1, J2] avec ressources, unités, deck de cartes, PV
├── tour : numéro, phase active, joueur actif
├── deck_événement : tableau de cartes mélangées
└── log : historique des actions (debug)

FONCTIONS PRINCIPALES
├── initGame() : initialise plateau, factions, ressources
├── nextPhase() : avance dans la boucle de tour
├── deployUnit(unitId, caseX, caseY) : place une unité
├── moveUnit(unitId, caseX, caseY) : déplace avec vérification portée
├── resolveAttack(attackerId, targetId) : lance les dés, calcule dégâts
├── drawEvent() : pioche carte événement, applique effet
├── produceResources() : calcule production des terrains contrôlés
├── checkVictory() : vérifie conditions de fin
└── applyGrisNoir() : effets automatiques Gris-Noir
```

## Interface minimale requise

```
ÉCRAN PRINCIPAL
┌─────────────────────────────────────────────────┐
│  GreenWar MVP                    Tour: 3/10     │
│  Phase: COMBAT           Joueur Actif: J1       │
├────────────────────┬────────────────────────────┤
│                    │  J1 Ressources:             │
│   PLATEAU 6×6      │  💧 3  🌱 2  ☀️ 1  🌿 0  │
│   (cases cliquables│                             │
│    avec icônes     │  J2 Ressources:             │
│    terrain+unité)  │  💧 1  🌱 3  ☀️ 2  🌿 1  │
│                    ├────────────────────────────┤
│                    │  UNITÉS J1                  │
│                    │  [Chou Bouclier] VIT:3      │
│                    │  [Tomate Bombarde] VIT:2    │
│                    │  [Haricot Grimpant] VIT:1   │
│                    ├────────────────────────────┤
│                    │  ÉVÉNEMENT ACTIF            │
│                    │  Pluie Acide (1 tour)       │
├────────────────────┴────────────────────────────┤
│  [DÉPLOYER] [DÉPLACER] [ATTAQUER] [FIN DE PHASE]│
└─────────────────────────────────────────────────┘
```

## Priorités de développement (ordre strict)

| Priorité | Fonctionnalité | Effort estimé |
|---|---|---|
| 1 | Plateau affiché, terrains colorés, cliquables | 2h |
| 2 | Ressources affichées par joueur | 1h |
| 3 | Unités placées sur cases, visibles | 2h |
| 4 | Bouton "Fin de Phase" avec rotation phases | 1h |
| 5 | Production automatique Phase 2 | 2h |
| 6 | Déplacement d'unité au clic | 3h |
| 7 | Résolution combat au clic (dés simulés) | 3h |
| 8 | Pioche événement + affichage | 2h |
| 9 | Vérification condition de victoire | 1h |
| 10 | Gris-Noir automatique (tous les 2 tours) | 2h |
| TOTAL | MVP fonctionnel | ~19h |

## Factions disponibles en MVP

MVP recommande de commencer avec **2 factions** seulement : **Nourricières vs Hydrophytes** (le plus simple à équilibrer rapidement) avant d'ajouter Officinales puis Adventices.

## Représentation des cases (JSON)

```json
{
  "id": "3-4",
  "terrain": "sol_fertile",
  "production": {"nutriments": 1},
  "pollution": 0,
  "unite": {
    "id": "tomate_bombarde_j1",
    "faction": "nourrieres",
    "joueur": 1,
    "atk": 3, "def": 1, "vit": 2, "vit_max": 2,
    "portee": 3, "mv": 2, "a_bouge": false,
    "marqueurs": []
  }
}
```

---

# 12. STRATÉGIE ÉCONOMIQUE

## Roadmap produit (6 phases)

### Phase 0 — Prototype gratuit (Mois 1–3)
**Objectif :** Validation du concept. Zéro coût production.

| Livrable | Format | Coût prod | Prix |
|---|---|---|---|
| Règles rapides | PDF gratuit | 0 | Gratuit |
| Print & Play 2 factions | PDF A4 | 0 | Gratuit |
| Prototype web MVP | HTML/JS | 0 | Gratuit |
| Premières cartes (24) | PDF | 0 | Gratuit |

**KPIs :** 500 téléchargements, 3 retours de playtest, 1 communauté Discord créée.

---

### Phase 1 — Kit Fondateur digital (Mois 4–6)
**Objectif :** Première monétisation. Faible risque.

| Produit | Contenu | Prix cible |
|---|---|---|
| **GreenWar Starter PDF** | Règles complètes + 4 factions + 40 cartes + plateaux | 12–18€ |
| **STL Pack Alpha** | 12 fichiers 3D (3 unités × 4 factions) | 15–25€ |
| **Kit Pédagogique École** | Règles simplifiées + fiches élève + scénario écologie | 30–50€ (par classe) |

**Canal de vente :** Itch.io, Gumroad, Etsy (STL), propre site.
**Marge estimée :** 90–95% (produits digitaux).

---

### Phase 2 — Starter Box physique (Mois 9–18)
**Objectif :** Entrée marché physique. Financement participatif recommandé.

| Contenu Starter Box | Qté | Coût production estimé | Prix de vente |
|---|---|---|---|
| 2 factions × 6 unités résine/PLA | 12 figurines | 8–15€ | — |
| Deck de 60 cartes | 60 cartes | 3–5€ | — |
| Plateau carton 6×6 | 1 | 2€ | — |
| Jetons ressources | 40 | 1€ | — |
| 6 dés D6 | 6 | 1€ | — |
| Règles livret | 1 | 1€ | — |
| **Coût total production estimé** | — | **16–25€** | **45–65€** |

**Marge brute :** 60–65%.
**Kickstarter recommandé** : objectif 5 000€. Stretch goals : factions supplémentaires, STL pack, app.

---

### Phase 3 — Gamme étendue (Mois 18–36)

| Produit | Prix cible | Marge |
|---|---|---|
| Faction Box (1 faction complète, 12 unités, héros, 30 cartes) | 35–50€ | 55–65% |
| Booster Cards (10 cartes événement/tactiques) | 8–12€ | 70–80% |
| Terrain Pack (6 décors carton ou résine) | 20–30€ | 50–60% |
| Campaign Book (scénarios, lore, cartes spéciales) | 20–35€ | 65–75% |
| STL Pack complet par faction | 20–35€ | 90%+ |

---

### Phase 4 — App Compagnon (Mois 24–48)

**Modèle : Freemium**

| Tier | Prix | Contenu |
|---|---|---|
| Gratuit | 0€ | Suivi des ressources, règles rapides |
| Standard | 4,99€/an | Deck événement dynamique, builder d'armée |
| Premium | 9,99€/an | IA Gris-Noir, campagnes, génération scénarios |

---

### Phase 5 — Éducation et institutions

**Cible :** Écoles primaires/collèges, médiathèques, associations écologiques, ateliers permaculture.

| Offre | Format | Prix |
|---|---|---|
| Kit Classe (30 élèves, 6 équipes) | Boîte complète pédago | 150–250€ |
| Licence enseignant (ressources PDF illimitées) | Digital | 30–60€/an |
| Atelier clé en main (animation 2h) | Présentiel | 400–800€ |
| Partenariat festival / boutique | Commission | 25–35% |

---

## Tableau de positionnement prix global

| Produit | Prix | Canal | Volume cible (an 2) |
|---|---|---|---|
| PDF règles (gratuit) | 0€ | Direct | 5 000 dl |
| Kit Fondateur PDF | 15€ | Itch.io / Gumroad | 500 ventes |
| STL Pack faction | 20€ | Etsy / direct | 300 ventes |
| Starter Box | 55€ | Boutiques / direct | 1 000 ventes |
| Faction Box | 40€ | Boutiques / direct | 500 ventes |
| Boosters Cards | 10€ | Partout | 2 000 ventes |
| App Premium | 10€/an | App stores | 800 abonnés |
| Kit École | 200€ | Institutions | 100 ventes |

**CA potentiel an 2 (estimé conservateur) :** 85 000–120 000€ brut.

---

## Risques et contre-mesures

| Risque | Probabilité | Contre-mesure |
|---|---|---|
| Faction trop forte → méta figé | Élevée | Playtest régulier, FAQ rapide, errata digital |
| Coût production figurines trop élevé | Moyenne | Priorité STL + impression à la demande |
| Marché wargame saturé | Moyenne | Angle éducatif + communauté écolo-gamers |
| Copie IP sans dépôt | Faible | Dépôt INPI logo + nom + règles dès Phase 1 |
| Prototype trop complexe à coder | Faible | MVP 2 factions, plateau carré, dés simples |

---

# ANNEXE — CHECKLIST PROTOTYPE v0.1

## Pour démarrer dès maintenant

- [ ] Imprimer plateau 6×6 (6 types de terrain, 2 exemplaires)
- [ ] Découper 12 unités (3 × 4 factions) en carton ou pions colorés
- [ ] Préparer jetons ressources (petits cubes colorés ou billes)
- [ ] Imprimer 24 cartes événement (petit format)
- [ ] Trouver 10 dés D6
- [ ] Règles résumées sur 1 page recto-verso
- [ ] Première session de test : 2 factions, Nourricières vs Hydrophytes, 6 tours, mode Domination
- [ ] Logger les déséquilibres, les règles confuses, les phases mortes
- [ ] Itérer

## Prochains documents à produire

1. Fiche de référence rapide joueur (1 page)
2. Tableau d'équilibre de toutes les unités
3. Cartes complètes (artwork placeholder + stats)
4. Code HTML prototype v0.1
5. Scénario de démo "La Première Récolte"
6. Lorebook court (2 000 mots)

---

*GreenWar Bible de Prototype v0.1 — Document interne — Toute reproduction commerciale soumise à droits.*
*Produit intellectuel original. Non affilié à Games Workshop, Wizards of the Coast, ou toute autre licence.*
