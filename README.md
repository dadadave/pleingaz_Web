# PleinGaz — Landing page

Landing page moderne pour **PleinGaz**, service de livraison de gaz domestique à
domicile (bouteilles certifiées, recharge, accessoires).

## Aperçu

- Page unique `index.html`, entièrement autonome (aucune dépendance CDN).
- CSS écrit à la main dans `assets/styles.css` — palette de marque personnalisée
  (bleu pétrole + flamme orange/ambre + bleu gaz), pas de couleurs Tailwind par défaut.
- Polices auto-hébergées (`assets/fonts/`) : Bricolage Grotesque (titres),
  Manrope (texte), Spline Sans Mono (données) — fonctionne hors-ligne.
- Responsive mobile-first, animations `transform`/`opacity` uniquement,
  états `hover`/`focus-visible`/`active` sur les éléments interactifs,
  respect de `prefers-reduced-motion`.

## Démarrer en local

```bash
node serve.mjs          # sert la racine du projet sur http://localhost:3000
```

## Captures d'écran

Le serveur doit tourner. Les captures sont enregistrées dans
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
index.html              # page
assets/styles.css       # styles
assets/logo.svg         # logo (placeholder — à remplacer par le logo final)
assets/fonts/           # polices auto-hébergées + fonts.local.css
serve.mjs               # serveur statique de dev
screenshot.mjs          # captures pleine page (CDP)
```

## À faire

- Remplacer `assets/logo.svg` par le logo officiel PleinGaz et ajuster les
  couleurs de marque exactes si nécessaire.
- Brancher les vrais numéros de téléphone / liens WhatsApp / e-mail.
- Confirmer les tarifs et les zones de livraison réels.
