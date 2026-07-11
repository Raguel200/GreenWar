# RECOMMANDATIONS D'ÉQUILIBRAGE — v0.2.7

Statut : **propositions en attente de validation humaine.** Rien n'a été appliqué aux
règles officielles ni aux prototypes.

## Ce que les données disent

1. Le déséquilibre J2 est structurel (71,5 % en bots aléatoires, 100 % en heuristique).
2. Il ne se corrige ni par le coût du Roseau, ni par sa portée, ni par l'économie J1
   (trois expériences réfutées, 1000 parties chacune, mêmes seeds).
3. Les parties se décident à la **domination territoriale au round 5**, sur un centre
   de plateau majoritairement humide où J2 est plus rapide (+1 MV, coût 1 vs 2),
   mieux défendu (3+) et alimenté en eau.
4. L'économie est globalement morte : les deux camps laissent dormir ~12-14 ressources,
   J1 sature son plafond de nutriments. Le seul exutoire de dépense est UN recrutement
   par round.
5. Aucun avantage de siège (50/50) : inutile de toucher à l'ordre du tour.

## Leviers recommandés, par ordre de rendement attendu

### R1 — Géométrie du plateau (cause racine)
Rééquilibrer la carte MVP : le centre compte 8 cases ZH/BA sur les rangées 3-4,
toutes favorables à J2. Proposition testable : symétriser (2 SF + 2 ZH au centre,
miroir des moitiés) ou introduire une variante de carte « prairie » neutre.
*Test lab : override MAP à ajouter au lab (petit développement, hors périmètre actuel).*

### R2 — Règle de domination (cause aggravante)
La cible 4 dès le round 5 récompense la vitesse pure. Propositions testables :
domination exigeant 2 rounds consécutifs de contrôle, ou cible pondérée par type de
terrain (les cases humides comptent 0,5 pour J2 ?), ou fenêtre repoussée au round 6.
*Test lab : dominationTarget déjà paramétrable ; les variantes fines demandent un hook.*

### R3 — Mobilité comparée (cause racine bis)
Réseau de Berges (+1 MV en zone humide) cumulé au surcoût J1 (2 PM par case humide)
crée un différentiel de tempo que rien ne compense côté Nourricières. Proposition :
limiter le +1 MV aux déplacements ZH→ZH, ou donner aux Nourricières un équivalent
en Sol Fertile/Serre (« Rangs Serrés » : +1 MV entre cases SF).

### R4 — Débouchés économiques
Autoriser un second recrutement à coût majoré (+1 ressource au choix), ou des dépenses
alternatives (fortification, purification) pour rentabiliser les stocks dormants.
Le plafond de 6 par ressource devrait aussi être questionné pour J1.

### R5 — Roseau (cosmétique au niveau winrate, réel au niveau ressenti)
45 % des dégâts totaux et unité décisive de 83 % des victoires J2 : même si le winrate
n'en dépend pas, le ressenti de jeu si. Portée 2 (v0.2.7-B) reste recommandable pour
la santé du jeu APRÈS correction structurelle — pas comme correctif principal.

## Prochaines expériences suggérées (lab prêt, sauf mention)

1. dominationTarget 5 + fenêtre round 6 (`maxRounds`/`dominationTarget` : déjà possible).
2. Carte symétrisée (nécessite hook d'override MAP dans lab-core — ~20 lignes).
3. Réseau de Berges restreint (nécessite patch de `effectiveMovePoints` en contexte —
   faisable par monkey-patch sans toucher au prototype).
4. Second recrutement J1 (politique de bot + règle : à prototyper en v0.2.7).
