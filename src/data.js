// Content data for the PleinGaz site. Editing copy/products happens here.

export const CONTACT = {
  phone: '+237 6 80 00 00 75',
  phoneHref: 'tel:+237680000075',
  email: 'support@pleingaz.com',
  city: 'Yaoundé, Cameroun',
};

export const NAV_LINKS = [
  { label: 'Découvrir PleinGaz', href: '#top' },
  { label: 'Nos activités', href: '#portfolio', caret: true },
  { label: 'Actualités', href: '#news', caret: true },
  { label: 'Carrières', href: '#footer' },
  { label: 'Contacts', href: '#footer' },
];

export const PRODUCTS = [
  {
    title: 'Bouteille 6 kg',
    desc: 'Idéale pour les petits foyers, légère et facile à transporter.',
    price: 'Recharge dès 6 500 FCFA',
    icon: 'bottle',
  },
  {
    title: 'Bouteille 12,5 kg',
    desc: 'Le format familial le plus demandé pour une cuisine active.',
    price: 'Le plus populaire',
    icon: 'canister',
  },
  {
    title: 'Bouteille 50 kg',
    desc: 'Pour restaurants, hôtels et industries à forte consommation.',
    price: 'Recharge dès 26 000 FCFA',
    icon: 'factory',
  },
  {
    title: 'Réchauds & cuisinières',
    desc: 'Réchaud verre, allumage piézo — pratique et facile à nettoyer.',
    price: 'Dès 18 000 FCFA',
    icon: 'stove',
  },
  {
    title: 'Détendeurs & accessoires',
    desc: 'Détendeurs de sécurité, tuyaux et pièces homologués.',
    price: 'Sur devis',
    icon: 'wrench',
  },
];

export const FIGURES = [
  { num: '2015', plus: '', cap: 'Au service des foyers depuis', icon: 'shieldCheck' },
  { num: '120 000', plus: '+', cap: 'Bouteilles en circulation', icon: 'bottle' },
  { num: '850', plus: '+', cap: 'Revendeurs partenaires', icon: 'shop' },
  { num: '24/7', plus: '', cap: 'Service client disponible', icon: 'team' },
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
  'Bouteilles domestiques', 'Gaz en vrac', 'Réchauds & cuisinières', 'Détendeurs & accessoires', 'Livraison à domicile',
];
