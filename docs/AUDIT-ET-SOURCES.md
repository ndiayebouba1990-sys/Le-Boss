# Audit, sources et crédits

Document de référence de la refonte : ce qui a été observé sur les deux sites, d'où vient chaque information publiée, et ce qui n'a pas pu être vérifié. Réalisé le 11 octobre 2026.

## 1. Limites rencontrées pendant la recherche

| Source | Situation | Conséquence |
| --- | --- | --- |
| `www.uimcec.sn` (site officiel) | **Hors ligne** : le serveur (41.208.148.80) ne répondait ni en HTTP ni en HTTPS, depuis deux réseaux différents, du début à la fin du travail. | Le site a été lu dans ses captures publiques de l'Internet Archive (août 2024 à avril 2026). |
| Internet Archive (Wayback Machine) | Accès partiellement bloqué : le service limite le trafic automatisé depuis le réseau utilisé. La récupération a été interrompue pour respecter ce blocage. | Obtenus : page d'accueil (avril 2026), pages Services, Actualités et Contact (août 2025), page Présentation (août 2024), feuille de style (novembre 2025). **Non obtenus** : les pages détaillées Crédit, Épargne, Compte, Assurance, Digital, CFA, les pages des caisses, et toutes les photographies du site. |
| LinkedIn, Facebook, X | Non consultés (contenus derrière connexion). | Aucune actualité tirée des réseaux sociaux. |

Conséquences directes : les photographies officielles n'ont pas pu être reprises (voir § 6) et le détail des produits reste à fournir par U-IMCEC.

## 2. Le site actuel de U-IMCEC

Page d'accueil intitulée « UIMCEC 2.0 », capture du 18 avril 2026.

**Technologie.** Pages HTML statiques (`index.html`, `exchange.html`, `services.html`, `new.html`, `contact.html`) bâties sur un gabarit Bootstrap 4 + jQuery, avec une trentaine de feuilles de style et de scripts. Pas de système de gestion de contenu.

**Points à corriger, repris dans la refonte :**

- titre de page générique, aucune méta-description ni mot-clé ;
- zoom bloqué sur mobile (`user-scalable=no`) ;
- texte alternatif `#` sur toutes les images ;
- restes du gabarit d'origine : liens `mailto:exchang@gmail.com` et `tel:exchang@gmail.com`, texte de remplissage en anglais, pages nommées d'après le gabarit (`exchange.html`, `new.html`) ;
- images d'origine non optimisées : cinq fichiers d'environ 5 à 14 Mo chacun sur la page d'accueil ;
- cinq familles de polices chargées depuis Google ;
- formulaire de contact et inscription à la lettre d'information sans traitement visible ;
- incohérence de chiffres entre deux versions du site (17 agences et 51 guichets en 2024, 19 agences et 53 guichets en 2025-2026).

**Contenus officiels repris :** présentation institutionnelle, mission, quatre caisses de base, services numériques (carte GIM-UEMOA, application mobile, Bank to Wallet, Agency Banking), Réseau national des femmes, Centre Financier Agricole, coordonnées, liens vers les réseaux sociaux.

## 3. Le site du CMS, référence de qualité

Analyse de la page d'accueil de `cms.sn`. Ce qui a servi d'inspiration fonctionnelle, et ce qui a été fait différemment :

| Principe observé au CMS | Traduction pour U-IMCEC |
| --- | --- |
| Grand carrousel plein écran (7 diapositives, flèches) | Bannière de 3 diapositives, pilotée par des **onglets libellés** avec barre de progression et bouton pause |
| Boutons « Devenir client » / « Trouver une agence » | Panneau « Que souhaitez-vous faire ? » : six accès par besoin, posé sur la bannière |
| Trois cartes numérotées Épargner / Emprunter / Services | Grille éditoriale de six solutions avec photographie, chacune menant à une page en six étapes |
| Compteurs de chiffres clés | Bandeau de chiffres, **chacun accompagné de sa source** |
| Localisateur d'agences avec carte et géolocalisation | Recherche par texte, région et type, liens d'itinéraire ; pas de carte interactive tant que les coordonnées GPS ne sont pas fournies |
| Trois témoignages de clients | Section « Nos engagements » (aucun témoignage validé disponible) |
| Carrousel de logos partenaires | Liste de partenaires en texte, sourcée, sans logo (autorisations à obtenir) |
| Pied de page avec liens et réseaux sociaux | Pied de page avec mentions réglementaires (agrément, loi applicable) |

Rien n'a été repris du CMS : ni code, ni texte, ni image, ni couleur, ni chiffre.

## 4. Couleurs relevées

Valeurs mesurées, non estimées :

| Couleur | Valeur | Relevée sur |
| --- | --- | --- |
| Orange | `#ff880e` | Feuille de style du site officiel (9 règles : boutons, liens survolés, soulignés de titres, navigation du carrousel) et styles en ligne de la page d'accueil |
| Orange foncé | `#d66c0b` | Feuille de style du site officiel (5 règles : survols, filets du pied de page, bouton de la lettre d'information) |
| Brun | `#5b4339` | Aplats de l'application UIMCEC Mobile (en-tête, tuiles, écran de connexion) ; brun du logo mesuré à `#5c4239` |
| Orange du logo | `#e48753` | Barre de navigation de l'application ; orange du logo mesuré entre `#e78a5a` et `#eb8856` |

Autres couleurs présentes dans la feuille de style officielle (`#e91327`, `#57cef8`, `#f2184f`…) : ce sont des restes du gabarit, non utilisés par la marque. L'ancienne version du site (2024) utilisait un brun `#8b4513`.

**Bordeaux.** Le logo ne contient pas de bordeaux mais un brun chocolat. La palette suit le logo.

**Contrastes** (norme WCAG 2.1, niveau AA = 4,5:1) : texte courant 11,8:1 ; texte secondaire 6,1:1 ; bouton principal, texte brun sur orange, 6,8:1 ; blanc sur brun 9,1:1 ; orange sur brun profond 5,5:1. Le blanc sur orange (2,4:1) est insuffisant : il n'est jamais utilisé pour du texte.

## 5. Origine de chaque information publiée

| Information | Source | Date |
| --- | --- | --- |
| Agrément n° DK 1.06.0009 U ; loi n° 2008-47 du 3 septembre 2008 ; création en 2001 | Site officiel, page d'accueil | capture du 18 avril 2026 |
| Quatre caisses de base ; 19 agences ; 53 guichets | Site officiel, page d'accueil ; chiffres identiques sur la fiche partenaire de SOS Faim Luxembourg | avril 2026 |
| Mission ; gouvernance (conseil d'administration, conseil de surveillance, comité de crédit) | Site officiel, page Présentation | capture du 8 août 2024 |
| Adresse, téléphone, e-mail, boîte postale | Site officiel | 2024-2026 |
| Services numériques (liste) | Site officiel, page Services | capture du 8 août 2025 |
| Fonctions de l'application ; comptes « Épargne à vue » et « Épargne nantie » | Fiche Google Play « UIMCEC Mobile » et ses captures d'écran | mise à jour du 27 août 2026 |
| Présence dans 14 régions ; plus de 60 % du portefeuille dédié aux femmes ; agences Agri-fin ; services non financiers | Entretien d'Ousmane Thiongane, directeur général — SOS Faim Luxembourg | 2 juin 2026 |
| Prêt d'un million d'euros de Kampani | ImpactAlpha | 24 juin 2026 |
| Enveloppe de 12 millions de FCFA à Sédhiou | Le Soleil | 27 novembre 2025 |
| Programme des Linguères | BRS | 2 juillet 2025 |
| Accompagnement des jeunes avec ADA et Jokkolabs | ADA (page non datée) | — |
| Crédit couplé à l'assurance agricole ; énergies renouvelables ; partenariat depuis 2025 | Fiche partenaire, SOS Faim Luxembourg | 2026 |
| Présentation de la stratégie à ADA (13 novembre 2024) ; guichet de Rufisque (juin 2024) | Site officiel, page Actualités | capture du 8 août 2025 |
| Huit points de service de la région de Dakar | Annuaire Go Africa Online — **source tierce non datée**, masquée hors version de travail | — |

**À signaler à U-IMCEC :**

- Le site officiel date l'inauguration de Rufisque du « jeudi 12 juin 2024 », or le 12 juin 2024 était un mercredi. Seul le mois est affiché.
- Le directeur général évoque « plus de 50 agences et guichets », le site 19 agences et 53 guichets. Les chiffres du site ont été retenus.
- Les rôles des organes de gouvernance, les démarches d'ouverture de compte et de demande de crédit, et les quatre engagements sont rédigés de façon générale : ils doivent être validés.

**Non trouvé :** nombre de membres, encours d'épargne et de crédit, effectif, taux et tarifs, liste complète des agences. Aucune de ces données n'a été inventée.

## 6. Photographies

**Ce qui a été cherché, dans l'ordre demandé :** site officiel (hors ligne), réseaux sociaux officiels (inaccessibles), reportages de partenaires, puis banques d'images libres.

**Ce qui est utilisé :**

- **13 photographies d'illustration** de Wikimedia Commons, prises au Sénégal entre 2022 et 2026 (douze datent de 2024 à 2026), sous licence CC0 ou CC BY-SA 4.0 : marchés, maraîchage dans les Niayes, pêche artisanale. Elles sont signalées comme illustrations partout où elles apparaissent. Quatre ont été recadrées pour retirer un filigrane.
- **2 captures d'écran officielles** de l'application UIMCEC Mobile, issues de sa fiche Google Play.
- **Le logo**, extrait de l'icône officielle de l'application.

Le détail (auteur, licence, lien) figure dans `media/sources.json` et sur la page `/credits/` du site.

**Points de vigilance :**

- La licence CC BY-SA impose de citer l'auteur et la licence : c'est fait sur chaque image et sur la page Crédits.
- Ces licences couvrent le droit d'auteur, **pas le droit à l'image** des personnes photographiées dans l'espace public. Pour un site d'institution financière, il est préférable de les remplacer par des photographies de U-IMCEC réalisées avec l'accord des personnes.
- Les captures de l'application et le logo appartiennent à U-IMCEC et à son éditeur : leur usage ici doit être confirmé.

**Photographies repérées mais non reprises, faute d'autorisation :**

- Reportage BRS sur le lancement des Linguères (mai 2025) : photos de l'événement et des entrepreneures.
- Entretien SOS Faim (juin 2026) : portrait du directeur général.
- Site officiel : siège, guichet de Rufisque, visite ministérielle, assemblées générales, financement agricole.

Ce sont les meilleures images pour le site : il suffit que U-IMCEC les fournisse ou obtienne l'accord de ses partenaires.
