# PleinGaz — Site vitrine (React + Vite)

Site vitrine pour **PleinGaz** (« Bouteilles toujours pleines »), fournisseur
d'énergie : bouteilles domestiques, gaz conditionné, gaz en vrac, gaz industriel
et accessoires. Application **React** propulsée par **Vite**.

## Aperçu

- Reprend la **structure de mise en page du site SIMAM CI** (nav, héros doré,
  bandeau fournisseur, portefeuille produits, chiffres clés + réseau, actualités
  + vidéo, bandeaux d'approche, pied de page marine), adaptée à la marque PleinGaz.
- **React 18 + Vite** : chaque section est un composant (`src/components/`),
  le contenu éditorial est centralisé dans `src/data.js`.
- Logo PleinGaz recréé en SVG inline (mot-symbole rouge + flamme).
- CSS écrit à la main dans `src/styles.css` — palette dorée/marine façon SIMAM
  avec l'accent rouge de la marque, pas de couleurs Tailwind par défaut.
- Imagerie de substitution 100 % locale (dégradés + icônes SVG) — aucune image
  externe, fonctionne hors-ligne.
- Polices auto-hébergées (`public/assets/fonts/`) : Manrope (texte/titres),
  Spline Sans Mono (données).
- Responsive mobile-first, animations `transform`/`opacity` uniquement,
  états `hover`/`focus-visible`/`active` sur les éléments interactifs,
  respect de `prefers-reduced-motion`.

## Démarrer en local

```bash
npm install
npm run dev        # serveur de dev Vite → http://localhost:3000
npm run build      # build de production → dist/
npm run preview    # prévisualise le build de production
```

## Captures d'écran

Le serveur de dev doit tourner. Les captures sont enregistrées dans
`temporary screenshots/` (numérotées automatiquement) :

```bash
node screenshot.mjs http://localhost:3000                 # pleine page, desktop (1440px)
node screenshot.mjs http://localhost:3000 mon-label       # avec un suffixe de nom
node screenshot.mjs http://localhost:3000 mobile --mobile # rendu mobile (390px)
```

Ajoutez `?static` à l'URL (`http://localhost:3000/?static`) pour révéler
immédiatement toutes les sections animées au scroll — utile pour une capture
pleine page. Le script pilote le Chromium pré-installé via le DevTools Protocol
(capture pleine page réelle), sans dépendance npm.

## Structure

```
index.html                 # point d'entrée Vite
vite.config.js             # config Vite (plugin React, port 3000)
src/
  main.jsx                 # montage React
  App.jsx                  # assemblage des sections + reveal au scroll
  styles.css               # styles (classes identiques à la maquette)
  data.js                  # contenu éditorial (produits, actus, chiffres…)
  components/
    Icons.jsx              # icônes SVG + flamme + mot-symbole PleinGaz
    Header.jsx  Hero.jsx  Supplier.jsx  Portfolio.jsx
    Figures.jsx  News.jsx  Approaches.jsx  Footer.jsx
public/assets/
  logo.svg                 # favicon flamme
  fonts/                   # polices auto-hébergées + fonts.local.css
screenshot.mjs             # captures pleine page (CDP)
```

## À faire

- Remplacer l'imagerie de substitution par les vraies photos PleinGaz.
- Brancher les vrais numéros de téléphone / liens WhatsApp / e-mail et
  l'endpoint d'inscription à la newsletter.
- Confirmer les produits, chiffres et régions desservies réels.
