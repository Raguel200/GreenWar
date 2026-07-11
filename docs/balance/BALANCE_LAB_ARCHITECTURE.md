# BALANCE LAB — Architecture (v0.2.7)

## Principe

Le laboratoire d'équilibrage (`tooling/balance-lab/`) exécute le moteur du prototype
officiel `prototypes/web-mvp/greenwar_mvp_v0.2.6.html` en headless (Node, module `vm`),
**sans jamais modifier le fichier historique** : le script est extrait du HTML en lecture
seule et évalué dans un contexte isolé avec un stub DOM minimal. Les règles simulées
sont donc, par construction, exactement celles du prototype jouable.

## Modules

| Fichier | Rôle |
|---|---|
| `rng.js` | RNG seedé mulberry32 + hash de seeds nommés. Remplace `Math.random` du contexte. |
| `dom-stub.js` | Stub DOM minimal (getElementById, createElement, classList…). |
| `engine-loader.js` | Extraction du `<script>` du prototype, création du contexte vm, injection RNG. |
| `lab-core.js` | Pont vers les bindings lexicaux du moteur (`S`, `UNITS`, `MAP`…), boucle de partie instrumentée, overrides de paramètres, lots avec inversion de sièges. |
| `bots.js` | Bots : `heuristic` (fonctions autoplay* du prototype, inchangées) et `random` (aléatoire contrôlé, seedé). |
| `metrics.js` | Agrégation, variance inter-seeds, **alertes de régression** (seuils ci-dessous). |
| `report.js` | Exports JSON (brut), CSV (1 ligne/partie), Markdown (rapport + comparaison). |
| `simulate.js` | CLI : configs JSON, comparaison baseline/expérience. |
| `test.js` | 11 tests du lab, incluant la suite de tests du prototype exécutée en headless. |
| `experiments/*.json` | Configurations d'expériences contrôlées et de baselines. |
| `results/` | Sorties (JSON bruts non versionnés — régénérables via seeds ; CSV et MD versionnés). |

## Points techniques notables

- **Bindings lexicaux cross-realm** : `let S` et `const UNITS` du script ne sont pas des
  propriétés du global du contexte ; `lab-core` installe un pont (`__bridge`) évalué dans
  le contexte pour lire/écrire ces bindings.
- **Instrumentation production** : `gainRes` (déclaration de fonction globale) est
  enveloppée pour mesurer les gains effectifs (plafond de 6 respecté).
  Dépensé = initial + produit − final.
- **Inversion de sièges** : la boucle de partie du lab reprend `autoplayPlayGame` mais
  paramètre l'ordre d'activation `[1,2]` / `[2,1]`. Chaque lot joue chaque seed dans les
  deux ordres (`swapSeats: true`) pour mesurer l'avantage du premier joueur.
- **Overrides** : mutation contrôlée de `UNITS` (coût, portée, stats), bonus de revenu
  J1 injecté après production, `dominationTarget` transmis au mode diagnostic du moteur,
  ressources initiales substituables. Chaque contexte est jetable : aucune contamination
  entre configurations (testé).
- **Objets cross-realm** : les comparaisons de tests utilisent JSON/longueurs, jamais
  `deepStrictEqual` (prototypes d'un autre realm).

## Seuils d'alerte de régression (metrics.js — THRESHOLDS)

| Code | Seuil | Signification |
|---|---|---|
| FACTION_DOMINANTE | winrate > 65 % | Une faction gagne trop. |
| FACTION_MORTE | winrate < 20 % | Une faction ne gagne presque jamais. |
| AVANTAGE_SIEGE | |winrate 1er joueur − 50 %| > 10 pts | Avantage J1/J2 structurel. |
| PARTIES_COURTES | durée moyenne < 3 rounds | Parties expédiées. |
| PARTIES_LONGUES | durée moyenne > 5,8 rounds | Parties qui traînent (cap moteur : 6). |
| RESSOURCES_DORMANTES | moyenne non dépensée > 8 | Économie sous-utilisée. |
| UNITE_OBLIGATOIRE | > 60 % des recrutements d'une faction | Unité auto-include. |
| CAUSE_ECRASANTE | > 80 % des fins de partie | Une cause de victoire écrase les autres. |
| PARTIES_BLOQUEES | > 5 % sans vainqueur | Blocages. |
| ECHANTILLON_FAIBLE | < 50 parties | Alertes indicatives seulement. |

Les alertes sont calculées et affichées à chaque exécution de `simulate.js` et
intégrées aux rapports MD et aux exports JSON.

## Limites connues

- Les bots ne jouent qu'un sous-ensemble de l'espace stratégique : un déséquilibre
  mesuré est un déséquilibre *sous ces politiques*. Le protocole random-vs-random sert
  de contrôle (voir BOT_BEHAVIOR.md).
- Le moteur cap les parties à 6 rounds (règle playtest v0.2.x) : les alertes de durée
  sont calibrées sur ce cap.
- J1 = Nourricières et J2 = Hydrophytes par construction du prototype ; l'inversion de
  sièges inverse l'ordre d'activation, pas les factions.
