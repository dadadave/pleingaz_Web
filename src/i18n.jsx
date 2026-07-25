import { createContext, useContext, useEffect, useState } from 'react';

// Full site content in both languages. Every visible string lives here so the
// FR/EN toggle can swap the whole page. Structured lists (products, news…)
// keep the same shape across languages so components stay language-agnostic.
export const CONTENT = {
  fr: {
    contact: {
      phone: '+237 6 80 00 00 75',
      phoneHref: 'tel:+237680000075',
      callLabel: 'Appelez-nous',
      email: 'support@pleingaz.com',
      writeLabel: 'Écrivez-nous',
      city: 'Yaoundé, Cameroun',
      findLabel: 'Nous trouver',
    },
    header: {
      reseller: 'Devenir revendeur',
      certified: 'Qualité certifiée',
      menu: 'Menu',
      home: 'Accueil',
    },
    nav: [
      {
        key: 'discover',
        label: 'Découvrir PleinGaz',
        href: '#top',
        mega: {
          blurb: 'PleinGaz, acteur majeur de la distribution de gaz et d’énergie au Cameroun.',
          links: [
            { label: 'Qui sommes-nous ?', href: '#footer' },
            { label: 'Histoire', href: '#footer' },
            { label: 'Nos engagements', href: '#footer' },
            { label: 'Organisation', href: '#footer' },
            { label: 'Nos partenaires', href: '#footer' },
          ],
          image: { ph: 'ph-slate', icon: 'team' },
        },
      },
      {
        key: 'activities',
        label: 'Nos activités',
        href: '#portfolio',
        mega: {
          blurb:
            'PleinGaz répond à tous vos besoins en énergie : bouteilles domestiques, gaz en vrac, réchauds, détendeurs et livraison à domicile.',
          links: [
            { label: 'Bouteilles domestiques', href: '#portfolio' },
            { label: 'Gaz en vrac', href: '#portfolio' },
            { label: 'Réchauds & cuisinières', href: '#portfolio' },
            { label: 'Détendeurs & accessoires', href: '#portfolio' },
            { label: 'Livraison à domicile', href: '#portfolio' },
          ],
          image: { ph: 'ph-warm', icon: 'bottle' },
        },
      },
      {
        key: 'news',
        label: 'Actualités',
        href: '#news',
        mega: {
          blurb:
            'Depuis 2015, PleinGaz met son expertise au service de ses clients, particuliers comme professionnels.',
          links: [
            { label: 'Évènements', href: '#news' },
            { label: 'Photothèque', href: '#news' },
            { label: 'Vidéothèque', href: '#news' },
          ],
          image: { ph: 'ph-green', icon: 'play' },
        },
      },
      { key: 'careers', label: 'Carrières', href: '#footer' },
      { key: 'contacts', label: 'Contacts', href: '#footer' },
    ],
    hero: {
      brand: 'PleinGaz.',
      tagline: 'Bouteilles toujours pleines.',
      slides: [
        {
          title: 'Faire de la sécurité une priorité absolue',
          text: 'PleinGaz s’engage à appliquer et à contrôler des règles de sécurité strictes, conformes aux normes internationales, à chaque étape de la chaîne.',
        },
        {
          title: 'Nous sommes à votre écoute pour tous vos besoins',
          text: 'Contactez-nous au +237 6 80 00 00 75 ou à support@pleingaz.com.',
        },
        {
          title: 'Votre avis compte pour nous',
          text: 'Prenez quelques minutes pour participer à notre enquête de satisfaction.',
        },
        {
          title: 'Une énergie fiable, partout au Cameroun',
          text: 'Un réseau de plus de 850 revendeurs partenaires, au service des foyers et des professionnels.',
        },
      ],
    },
    supplier: {
      title: 'Votre fournisseur d’énergie au Cameroun',
      text: 'Depuis 2015, PleinGaz alimente les foyers camerounais avec fiabilité, sécurité et passion. Particulier, professionnel ou secteur public : retrouvez toute notre gamme de produits.',
      about: 'À propos ›',
      iam: 'Je suis un',
      choices: { individual: 'Particulier', professional: 'Professionnel' },
    },
    portfolio: {
      eyebrow: 'Notre gamme',
      title: 'Découvrez notre gamme de produits',
      intro:
        'Choisir PleinGaz, c’est choisir une énergie pratique et disponible pour un confort maximal au quotidien. Trouvez le produit qu’il vous faut.',
      learnMore: 'En savoir plus',
    },
    products: [
      { title: 'Bouteille 6 kg', desc: 'Idéale pour les petits foyers, légère et facile à transporter.', price: 'Recharge dès 6 500 FCFA', icon: 'bottle' },
      { title: 'Bouteille 12,5 kg', desc: 'Le format familial le plus demandé pour une cuisine active.', price: 'Le plus populaire', icon: 'canister' },
      { title: 'Bouteille 50 kg', desc: 'Pour restaurants, hôtels et industries à forte consommation.', price: 'Recharge dès 26 000 FCFA', icon: 'factory' },
      { title: 'Réchauds & cuisinières', desc: 'Réchaud verre, allumage piézo — pratique et facile à nettoyer.', price: 'Dès 18 000 FCFA', icon: 'stove' },
      { title: 'Détendeurs & accessoires', desc: 'Détendeurs de sécurité, tuyaux et pièces homologués.', price: 'Sur devis', icon: 'wrench' },
    ],
    figures: {
      eyebrow: 'Chiffres clés',
      list: [
        { num: '2015', plus: '', cap: 'Au service des foyers depuis', icon: 'shieldCheck' },
        { num: '120 000', plus: '+', cap: 'Bouteilles en circulation', icon: 'bottle' },
        { num: '850', plus: '+', cap: 'Revendeurs partenaires', icon: 'shop' },
        { num: '24/7', plus: '', cap: 'Service client disponible', icon: 'team' },
      ],
    },
    distributors: {
      title: 'Notre réseau de distributeurs',
      text: 'PleinGaz offre à ses clients un réseau sûr et efficace, au service des régions. Nos équipes travaillent chaque jour pour la performance, la qualité et la responsabilité.',
      cta: 'Découvrir le réseau ›',
    },
    news: {
      eyebrow: 'Actualités PleinGaz',
      tag: 'News',
      readMore: 'Lire la suite',
      videosEyebrow: 'Vidéos',
      video: { date: '03 01 2026', title: 'PleinGaz sensibilise aux incidents liés au gaz' },
      items: [
        { date: '06 06 2026', ph: 'ph-blue', icon: 'team', title: 'PleinGaz certifié conforme aux normes environnementales', excerpt: 'PleinGaz et son partenaire transport ont reçu leurs certificats de conformité environnementale.' },
        { date: '18 03 2026', ph: 'ph-warm', icon: 'person', title: 'Don à la pouponnière : PleinGaz aux côtés des familles', excerpt: 'Dans le cadre de ses actions solidaires, PleinGaz a soutenu une pouponnière de la région.' },
        { date: '18 03 2026', ph: 'ph-crowd', icon: 'building', title: "Rapport d'avancement : rénovation du complexe scolaire", excerpt: "PleinGaz et la fondation ont effectué une visite de suivi du chantier de l'école primaire." },
      ],
    },
    approaches: [
      { bg: 'ph-green', icon: 'shield', lines: ['Approche', 'HSE'] },
      { bg: 'ph-slate', icon: 'search', lines: ['Approche', 'Qualité'] },
      { bg: 'ph-worker', icon: 'hand', lines: ['Fondation', 'PleinGaz'] },
    ],
    footer: {
      newsletterTitle: 'Vous souhaitez recevoir nos actualités ?',
      newsletterPlaceholder: 'Saisissez votre adresse e-mail',
      aboutTitle: 'À propos',
      about: ['Qui sommes-nous ?', 'Histoire', 'Nos engagements', 'Organisation', 'Nos partenaires'],
      activitiesTitle: 'Activités',
      activities: ['Bouteilles domestiques', 'Gaz en vrac', 'Réchauds & cuisinières', 'Détendeurs & accessoires', 'Livraison à domicile'],
      partnersTitle: 'Nos partenaires',
      partners: ['AfriqGaz', 'GazPlus', 'CamEnergy', 'SudGaz'],
      copyright: '© 2026 PleinGaz — Cameroun. Tous droits réservés.',
      slogan: 'Bouteilles toujours pleines',
      designedBy: 'Conçu par',
    },
    newsletterAlert: {
      errorTitle: 'Oups !',
      errorText: 'Veuillez saisir une adresse e-mail valide.',
      successTitle: 'Merci !',
      successText: 'Votre inscription à la newsletter est bien enregistrée.',
    },
  },

  en: {
    contact: {
      phone: '+237 6 80 00 00 75',
      phoneHref: 'tel:+237680000075',
      callLabel: 'Call us',
      email: 'support@pleingaz.com',
      writeLabel: 'Write to us',
      city: 'Yaoundé, Cameroon',
      findLabel: 'Find us',
    },
    header: {
      reseller: 'Become a reseller',
      certified: 'Certified quality',
      menu: 'Menu',
      home: 'Home',
    },
    nav: [
      {
        key: 'discover',
        label: 'Discover PleinGaz',
        href: '#top',
        mega: {
          blurb: 'PleinGaz, a major player in gas and energy distribution in Cameroon.',
          links: [
            { label: 'Who are we?', href: '#footer' },
            { label: 'History', href: '#footer' },
            { label: 'Our commitments', href: '#footer' },
            { label: 'Organization', href: '#footer' },
            { label: 'Our partners', href: '#footer' },
          ],
          image: { ph: 'ph-slate', icon: 'team' },
        },
      },
      {
        key: 'activities',
        label: 'Our activities',
        href: '#portfolio',
        mega: {
          blurb:
            'PleinGaz meets all your energy needs: domestic cylinders, bulk gas, stoves, regulators and home delivery.',
          links: [
            { label: 'Domestic cylinders', href: '#portfolio' },
            { label: 'Bulk gas', href: '#portfolio' },
            { label: 'Stoves & cookers', href: '#portfolio' },
            { label: 'Regulators & accessories', href: '#portfolio' },
            { label: 'Home delivery', href: '#portfolio' },
          ],
          image: { ph: 'ph-warm', icon: 'bottle' },
        },
      },
      {
        key: 'news',
        label: 'News',
        href: '#news',
        mega: {
          blurb:
            'Since 2015, PleinGaz has put its expertise at the service of its customers, both individuals and professionals.',
          links: [
            { label: 'Events', href: '#news' },
            { label: 'Photo library', href: '#news' },
            { label: 'Video library', href: '#news' },
          ],
          image: { ph: 'ph-green', icon: 'play' },
        },
      },
      { key: 'careers', label: 'Careers', href: '#footer' },
      { key: 'contacts', label: 'Contacts', href: '#footer' },
    ],
    hero: {
      brand: 'PleinGaz.',
      tagline: 'Always full cylinders.',
      slides: [
        {
          title: 'Making safety an absolute priority',
          text: 'PleinGaz is committed to applying and monitoring strict safety rules, in line with international standards, at every stage of the chain.',
        },
        {
          title: 'We are here to help you with all your needs',
          text: 'Contact us on +237 6 80 00 00 75 or at support@pleingaz.com.',
        },
        {
          title: 'We value your opinion',
          text: 'Take a few minutes to take part in our satisfaction survey.',
        },
        {
          title: 'Reliable energy, everywhere in Cameroon',
          text: 'A network of over 850 partner resellers, serving households and professionals.',
        },
      ],
    },
    supplier: {
      title: 'Your energy supplier in Cameroon',
      text: 'Since 2015, PleinGaz has supplied Cameroonian households with reliability, safety and passion. Individual, professional or public sector: find our full range of products.',
      about: 'About us ›',
      iam: 'I am a',
      choices: { individual: 'Individual', professional: 'Professional' },
    },
    portfolio: {
      eyebrow: 'Our range',
      title: 'Discover our product range',
      intro:
        'Choosing PleinGaz means choosing practical, available energy for maximum daily comfort. Find the product you need.',
      learnMore: 'Learn more',
    },
    products: [
      { title: '6 kg cylinder', desc: 'Ideal for small households, light and easy to carry.', price: 'Refill from 6,500 FCFA', icon: 'bottle' },
      { title: '12.5 kg cylinder', desc: 'The most requested family size for an active kitchen.', price: 'Most popular', icon: 'canister' },
      { title: '50 kg cylinder', desc: 'For restaurants, hotels and high-consumption industries.', price: 'Refill from 26,000 FCFA', icon: 'factory' },
      { title: 'Stoves & cookers', desc: 'Glass stove, piezo ignition — practical and easy to clean.', price: 'From 18,000 FCFA', icon: 'stove' },
      { title: 'Regulators & accessories', desc: 'Safety regulators, hoses and approved parts.', price: 'On quote', icon: 'wrench' },
    ],
    figures: {
      eyebrow: 'Key figures',
      list: [
        { num: '2015', plus: '', cap: 'Serving households since', icon: 'shieldCheck' },
        { num: '120,000', plus: '+', cap: 'Cylinders in circulation', icon: 'bottle' },
        { num: '850', plus: '+', cap: 'Partner resellers', icon: 'shop' },
        { num: '24/7', plus: '', cap: 'Customer service available', icon: 'team' },
      ],
    },
    distributors: {
      title: 'Our distributor network',
      text: 'PleinGaz offers its customers a safe and efficient network, at the service of the regions. Our teams work every day for performance, quality and responsibility.',
      cta: 'Discover the network ›',
    },
    news: {
      eyebrow: 'PleinGaz news',
      tag: 'News',
      readMore: 'Read more',
      videosEyebrow: 'Videos',
      video: { date: '03 01 2026', title: 'PleinGaz raises awareness about gas-related incidents' },
      items: [
        { date: '06 06 2026', ph: 'ph-blue', icon: 'team', title: 'PleinGaz certified compliant with environmental standards', excerpt: 'PleinGaz and its transport partner received their environmental compliance certificates.' },
        { date: '18 03 2026', ph: 'ph-warm', icon: 'person', title: 'Nursery donation: PleinGaz alongside families', excerpt: 'As part of its charitable actions, PleinGaz supported a nursery in the region.' },
        { date: '18 03 2026', ph: 'ph-crowd', icon: 'building', title: 'Progress report: renovation of the school complex', excerpt: 'PleinGaz and the foundation carried out a follow-up visit to the primary school worksite.' },
      ],
    },
    approaches: [
      { bg: 'ph-green', icon: 'shield', lines: ['HSE', 'approach'] },
      { bg: 'ph-slate', icon: 'search', lines: ['Quality', 'approach'] },
      { bg: 'ph-worker', icon: 'hand', lines: ['PleinGaz', 'Foundation'] },
    ],
    footer: {
      newsletterTitle: 'Want to receive our news?',
      newsletterPlaceholder: 'Enter your email address',
      aboutTitle: 'About',
      about: ['Who are we?', 'History', 'Our commitments', 'Organization', 'Our partners'],
      activitiesTitle: 'Activities',
      activities: ['Domestic cylinders', 'Bulk gas', 'Stoves & cookers', 'Regulators & accessories', 'Home delivery'],
      partnersTitle: 'Our partners',
      partners: ['AfriqGaz', 'GazPlus', 'CamEnergy', 'SudGaz'],
      copyright: '© 2026 PleinGaz — Cameroon. All rights reserved.',
      slogan: 'Always full cylinders',
      designedBy: 'Designed by',
    },
    newsletterAlert: {
      errorTitle: 'Oops!',
      errorText: 'Please enter a valid email address.',
      successTitle: 'Thank you!',
      successText: 'Your newsletter subscription has been registered.',
    },
  },
};

const LangContext = createContext(null);

const STORAGE_KEY = 'pg-lang';

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    }
    return 'fr';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore storage errors (private mode) */
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

// `lang`/`setLang` drive the FR/EN toggle; `t` is the active content tree.
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within <LangProvider>');
  return ctx;
}
