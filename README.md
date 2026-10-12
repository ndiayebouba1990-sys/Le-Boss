# Site institutionnel U-IMCEC Sénégal — refonte

Projet complet de refonte du site `uimcec.sn` : page d'accueil, pages de solutions, services numériques, présentation de l'institution, recherche d'agence, actualités administrables, formulaire de contact sécurisé, pages légales.

> **État : version de travail.** Le site est fonctionnel, mais plusieurs contenus doivent être validés ou complétés par U-IMCEC avant la mise en ligne. Tant que `prepublication` vaut `true` dans `src/_data/site.json`, un bandeau l'indique, les éléments à confirmer sont signalés en jaune et l'indexation par les moteurs de recherche est bloquée. Voir la [liste de contrôle](#7-liste-de-contrôle-avant-la-mise-en-ligne).

Documents associés : [docs/AUDIT-ET-SOURCES.md](docs/AUDIT-ET-SOURCES.md) (analyse des deux sites, couleurs relevées, sources de chaque information, crédits des images).

---

## 1. Voir le site

**Le plus simple (Windows)** : double-cliquez sur `apercu.bat`. Le site s'ouvre sur <http://localhost:8080>. Node.js doit être installé (<https://nodejs.org>, version 18 ou plus récente).

En ligne de commande :

```bash
npm install        # une seule fois
npm run build      # construit le site dans _site/
npm run apercu     # sert _site/ sur http://localhost:8080
```

Pendant que vous modifiez des contenus, utilisez plutôt `npm run dev` : la page se recharge à chaque enregistrement.

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Aperçu avec rechargement automatique |
| `npm run build` | Construit le site final dans `_site/` |
| `npm run apercu` | Sert `_site/` et simule le traitement du formulaire |
| `npm run admin` | Lance l'interface d'administration en local (voir § 3) |
| `npm run images` | Optimise les photos de `media/originaux/` |
| `npm run verifier` | Contrôle liens, images, SEO et accessibilité de `_site/` |

## 2. Organisation du projet

```
uimcec-site/
├── src/                      ← tout ce qui se modifie
│   ├── _data/                ← contenus structurés (JSON)
│   │   ├── site.json         coordonnées, réseaux sociaux, mode « version de travail »
│   │   ├── accueil.json      bannière, accès rapides, mission, engagements
│   │   ├── chiffres.json     chiffres clés, avec leur source
│   │   ├── agences.json      caisses, agences, guichets
│   │   ├── numerique.json    services numériques
│   │   ├── navigation.json   menus
│   │   └── images.json       (généré par « npm run images » — ne pas modifier à la main)
│   ├── actualites/*.md       un fichier par actualité
│   ├── solutions/*.md        un fichier par solution (épargne, crédit…)
│   ├── agences/              page de recherche + fiche de chaque caisse
│   ├── _includes/            gabarits (mise en page, en-tête, pied de page, composants)
│   │   └── css/              système de design, en 6 fichiers commentés
│   ├── assets/               polices, scripts, images optimisées
│   ├── static/               fichiers copiés tels quels (.htaccess, api/contact.php, icônes)
│   └── admin/                interface d'administration (Decap CMS)
├── media/                    photos d'origine + crédits (sources.json) — non publié
├── tools/                    scripts : images, aperçu, contrôle qualité, administration locale
├── docs/                     audit, sources, crédits
└── _site/                    ← le site construit, prêt à déposer sur l'hébergement
```

**Technologie.** Le site actuel est un gabarit HTML statique (Bootstrap + jQuery). La refonte reste statique — donc rapide, peu coûteuse à héberger et sans base de données à sécuriser — mais elle est produite par le générateur [Eleventy](https://www.11ty.dev) : les contenus sont séparés de la mise en page et modifiables sans toucher au code. Aucune bibliothèque n'est chargée dans le navigateur du visiteur : HTML, une feuille de style, trois petits scripts.

## 3. Modifier les contenus

### Avec l'interface d'administration (recommandé)

1. Dans un premier terminal : `npm run dev`
2. Dans un second terminal : `npm run admin`
3. Ouvrez <http://localhost:8080/admin/> et cliquez sur « Se connecter » (aucun mot de passe en local).

Vous pouvez alors modifier : les **actualités**, les **solutions**, et dans « Réglages et données » les **coordonnées**, les **agences**, les **chiffres clés**, la **page d'accueil** et les **services numériques**. Chaque enregistrement modifie le fichier correspondant dans `src/` ; relancez ensuite `npm run build` pour produire le site à publier.

Pour administrer le site **en ligne**, sans poste technique, il faut héberger le projet dans un dépôt Git (GitHub ou GitLab) et relier Decap CMS à ce dépôt : voir § 6, option B.

### Directement dans les fichiers

- **Ajouter une actualité** : dupliquez un fichier de `src/actualites/`, nommez-le `AAAA-MM-JJ-titre-court.md`, modifiez l'en-tête (titre, date, rubrique, résumé) et le texte. Les quatre plus récentes apparaissent sur l'accueil.
- **Ajouter une agence** : ajoutez un bloc dans `src/_data/agences.json`. Un point marqué `"verifie": false` n'apparaît que dans la version de travail.
- **Corriger un chiffre clé** : `src/_data/chiffres.json`. Un chiffre marqué `"confirme": false` n'est pas publié.

### Règles éditoriales à conserver

- Ne publiez **aucun taux, tarif, durée ou condition** qui ne soit validé par U-IMCEC.
- Indiquez toujours la **source et la date** d'un chiffre.
- Pas de témoignage sans l'accord écrit de la personne ; pas de photo de client sans son autorisation.
- Une actualité tirée d'une publication externe doit citer sa source (champs « Source » de l'article).

## 4. Images

1. Déposez la photo d'origine (JPEG ou PNG, 1 920 px de large ou plus) dans `media/originaux/`.
2. Ajoutez son crédit dans `media/sources.json` (titre, auteur, licence, lien de la source, date, nature `officiel` ou `illustration`).
3. Lancez `npm run images` : la photo est déclinée en WebP (480, 800, 1 200, 1 920 px) avec un JPEG de repli, et devient utilisable par son nom (ex. `marche-lompoul`).

Le crédit s'affiche automatiquement sur l'image et sur la page `/credits/`. Une image `illustration` est accompagnée d'une mention précisant qu'elle ne représente pas U-IMCEC.

**Logo.** Le logo utilisé provient de l'icône officielle de l'application UIMCEC Mobile (512 px). Il est net aux tailles affichées, mais il faut le remplacer par le fichier d'origine de U-IMCEC (idéalement vectoriel) : `src/assets/img/logo-uimcec-96.png`, `-192.png`, `-192.webp` et les icônes de `src/static/`.

## 5. Identité visuelle

Toutes les couleurs sont des variables définies dans `src/_includes/css/01-jetons.css`. Les quatre couleurs de marque ont été **mesurées** sur les supports officiels (détail dans l'audit) :

| Variable | Valeur | Origine |
| --- | --- | --- |
| `--orange` | `#ff880e` | Site officiel (boutons, soulignés) |
| `--orange-fonce` | `#d66c0b` | Site officiel (survols, filets) |
| `--terre` | `#e48753` | Orange du logo et de l'application mobile |
| `--brun` | `#5b4339` | Brun du logo et de l'application mobile |

Les autres teintes (fonds sable, brun profond, textes) en sont dérivées. Le motif récurrent — demi-disque, arches, cercles — reprend le demi-disque orange du logo. Polices : Bricolage Grotesque (titres) et Figtree (texte), sous licence libre OFL, hébergées sur le site.

> Le logo comporte un orange et un **brun**, non un bordeaux : la palette suit le logo. Si la charte officielle prévoit un bordeaux, il suffit de modifier `--brun` et ses déclinaisons.

## 6. Mise en ligne

### Option A — Hébergement actuel (Apache + PHP)

1. `npm run build`
2. Passez `prepublication` à `false` dans `src/_data/site.json` **une fois la liste de contrôle terminée**, puis reconstruisez.
3. Déposez **le contenu** du dossier `_site/` à la racine du site (FTP/SFTP), fichiers `.htaccess` compris.
4. Formulaire : ouvrez `api/config.php` sur le serveur, renseignez l'adresse de réception, une adresse d'expédition du domaine et remplacez la valeur `sel`. PHP 8.0 ou plus récent est nécessaire. Envoyez un message de test.
5. HTTPS : une fois le certificat actif, décommentez dans `.htaccess` la redirection HTTPS et l'en-tête `Strict-Transport-Security`.

Le fichier `.htaccess` fourni gère : les **redirections des anciennes adresses** (`services.html`, `new.html`, `credit.html`…), les en-têtes de sécurité (dont une politique de contenu stricte), le cache et la compression.

### Option B — Hébergement avec administration en ligne

Placez le projet dans un dépôt Git et reliez-le à un service qui construit le site à chaque modification (Netlify, Cloudflare Pages…). Dans `src/admin/config.yml`, adaptez la section `backend` ; l'équipe se connecte alors sur `/admin/` avec son compte. Le formulaire PHP n'étant pas disponible sur ces services, indiquez un autre point de traitement dans `site.json` → `formulaire.point_de_traitement`.

### Comptes d'administration

- Un compte nominatif par personne, jamais de compte partagé.
- Double authentification obligatoire sur le service Git.
- Droits d'écriture limités aux personnes qui publient ; retrait immédiat des accès à chaque départ.

## 7. Liste de contrôle avant la mise en ligne

Contenus à fournir ou à valider par U-IMCEC (ils sont signalés en jaune dans la version de travail) :

- [ ] **Logo** officiel en haute définition et charte graphique.
- [ ] **Répertoire complet** des 19 agences et 53 guichets : adresse, téléphone, horaires (seuls le siège et les quatre caisses sont confirmés ; huit points proviennent d'un annuaire tiers).
- [ ] **Coordonnées des quatre caisses de base** et horaires de la direction générale.
- [ ] **Catalogue des produits** : épargne, crédit, assurances, conditions, pièces à fournir.
- [ ] **Services numériques** : cartes, Bank to Wallet, Agency Banking, disponibilité de l'application sur iPhone.
- [ ] **Nombre de membres** (avec sa date de référence) et confirmation des chiffres publiés.
- [ ] **Photographies officielles** (agences, équipes, événements) avec autorisations, pour remplacer les illustrations.
- [ ] **Témoignages** validés, si U-IMCEC souhaite en publier.
- [ ] Relecture des **actualités** et de la liste des **partenaires**.
- [ ] **Mentions légales** (directeur de la publication, hébergeur) et **politique de confidentialité** (durée de conservation, formalités CDP).
- [ ] Test d'envoi du **formulaire** sur l'hébergement réel.
- [ ] Passage de `prepublication` à `false`, puis `npm run build` et `npm run verifier`.

## 8. Ce qui a été vérifié — et ce qui ne l'a pas été

**Vérifié** (sur le serveur d'aperçu local) :

- Construction sans erreur ; `npm run verifier` : 29 pages, aucun lien interne cassé, une balise `<h1>` par page, titres et descriptions uniques, texte alternatif sur toutes les images, aucun style ni script en ligne.
- Lien d'évitement au clavier, menu mobile (ouverture, sous-menu, fermeture par Échap avec retour du focus), panneau « Solutions », carrousel avec pause.
- Recherche d'agence : par texte (sans tenir compte des accents), par région, par type ; état « aucun résultat ».
- Formulaire : contrôles dans le navigateur et **côté serveur**, champ piège anti-robots, limite de taille, limitation de débit, masquage d'un numéro de carte saisi par erreur.
- Interface d'administration en local : lecture des contenus et enregistrement d'une modification.
- Mise en page : 23 pages mesurées à 9 largeurs (de 320 à 1 440 px), sans aucun défilement horizontal ; sur mobile, tous les boutons et champs font au moins 40 px de haut.
- Contrastes des couleurs de texte : tous au niveau AA (détail dans l'audit).
- Poids du premier écran : environ 160 Ko sur mobile, 300 Ko sur ordinateur.

**Non vérifié** :

- `api/contact.php` n'a pas pu être exécuté (PHP absent du poste de développement). Sa logique est identique à celle du serveur d'aperçu, qui a été testée ; **un test sur l'hébergement est indispensable**.
- Les règles du fichier `.htaccess` (redirections, en-têtes) n'ont pas été testées sur un serveur Apache.
- L'administration **en ligne** (connexion à un dépôt Git) n'est pas configurée.
- Aucun test sur de vrais téléphones ni avec un lecteur d'écran ; aucune mesure Lighthouse.

## 9. Maintenance

- `npm audit` signale des alertes sur des outils de construction (`sharp` en particulier, figé en version 0.32 pour rester compatible avec Node 18.15). Ces outils ne sont pas publiés avec le site. Avec Node 20 ou plus récent, mettez-les à jour : `npm install --save-dev sharp@latest`.
- La version de Decap CMS est figée dans `src/admin/index.html`.
- Après toute modification : `npm run build` puis `npm run verifier`.
