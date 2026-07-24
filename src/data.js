// Content data for the PleinGaz site. Editing copy/products happens here.

export const NAV_LINKS = [
  { label: 'Découvrir PleinGaz', href: '#top' },
  { label: 'Nos activités', href: '#portfolio', caret: true },
  { label: 'Actualités', href: '#news', caret: true },
  { label: 'Carrières', href: '#footer' },
  { label: 'Contacts', href: '#footer' },
];

export const PRODUCTS = [
  {
    title: 'Bouteilles domestiques',
    desc: 'Formats 6, 12,5 et 38 kg pour la maison.',
    icon: 'bottle',
  },
  {
    title: 'Gaz conditionné',
    desc: 'Bouteilles remplies, contrôlées et scellées.',
    icon: 'canister',
  },
  {
    title: 'Gaz en vrac',
    desc: 'Distribution de gaz en vrac aux industriels.',
    icon: 'drop',
  },
  {
    title: 'Détendeurs & accessoires',
    desc: 'Détendeurs, tuyaux et pièces homologués.',
    icon: 'wrench',
  },
  {
    title: 'Gaz industriel',
    desc: 'Solutions énergie pour sites et commerces.',
    icon: 'factory',
  },
];

export const FIGURES = [
  { num: '120 000', plus: '+', cap: 'Bouteilles en circulation', icon: 'bottle' },
  { num: '850', plus: '+', cap: 'Revendeurs partenaires', icon: 'shop' },
  { num: '400', plus: '+', cap: 'Collaborateurs', icon: 'team' },
  { num: '10', plus: '+', cap: 'Régions desservies', icon: 'pin' },
];

export const NEWS = [
  {
    date: '06 06 2026',
    ph: 'ph-blue',
    icon: 'team',
    title: 'PleinGaz certifié conforme aux normes environnementales',
    excerpt: 'PleinGaz et son partenaire transport ont reçu leurs certificats de conformité environnementale.',
  },
  {
    date: '18 03 2026',
    ph: 'ph-warm',
    icon: 'person',
    title: 'Don à la pouponnière : PleinGaz aux côtés des familles',
    excerpt: 'Dans le cadre de ses actions solidaires, PleinGaz a soutenu une pouponnière de la région.',
  },
  {
    date: '18 03 2026',
    ph: 'ph-crowd',
    icon: 'building',
    title: "Rapport d'avancement : rénovation du complexe scolaire",
    excerpt: "PleinGaz et la fondation ont effectué une visite de suivi du chantier de l'école primaire.",
  },
];

export const FOOTER_ABOUT = [
  'Qui sommes-nous ?', 'Histoire', 'Nos engagements', 'Organisation', 'Nos partenaires',
];

export const FOOTER_ACTIVITIES = [
  'Gaz en vrac', 'Bouteilles domestiques', 'Gaz conditionné', 'Accessoires', 'Gaz industriel',
];
