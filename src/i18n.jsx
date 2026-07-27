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
            { label: 'Qui sommes-nous ?', href: '/apropos' },
            { label: 'Histoire', href: '/histoire' },
            { label: 'Nos engagements', href: '/nos-engagements' },
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
            { label: 'Bouteilles domestiques', href: '/produit/bouteilles-domestiques' },
            { label: 'Gaz en vrac', href: '/produit/gaz-vrac' },
            { label: 'Réchauds & cuisinières', href: '/produit/rechauds-cuisinieres' },
            { label: 'Détendeurs & accessoires', href: '/produit/detendeurs-accessoires' },
            { label: 'Livraison à domicile', href: '/produit/livraison-domicile' },
            { label: 'Points de vente', href: '/reseau' },
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
      { title: 'Bouteille 6 kg', desc: 'Idéale pour les petits foyers, légère et facile à transporter.', price: 'Recharge dès 6 500 FCFA', icon: 'bottle', slug: 'bouteilles-domestiques' },
      { title: 'Bouteille 12,5 kg', desc: 'Le format familial le plus demandé pour une cuisine active.', price: 'Le plus populaire', icon: 'canister', slug: 'bouteilles-domestiques' },
      { title: 'Bouteille 50 kg', desc: 'Pour restaurants, hôtels et industries à forte consommation.', price: 'Recharge dès 26 000 FCFA', icon: 'factory', slug: 'bouteilles-domestiques' },
      { title: 'Réchauds & cuisinières', desc: 'Réchaud verre, allumage piézo — pratique et facile à nettoyer.', price: 'Dès 18 000 FCFA', icon: 'stove', slug: 'rechauds-cuisinieres' },
      { title: 'Détendeurs & accessoires', desc: 'Détendeurs de sécurité, tuyaux et pièces homologués.', price: 'Sur devis', icon: 'wrench', slug: 'detendeurs-accessoires' },
    ],
    figures: {
      eyebrow: 'Chiffres clés',
      list: [
        { num: '2015', plus: '', cap: 'Au service des foyers depuis', icon: 'shieldCheck' },
        { num: '120 000', plus: '+', cap: 'Bouteilles en circulation', icon: 'gasBottle' },
        { num: '850', plus: '+', cap: 'Revendeurs partenaires', icon: 'house' },
        { num: '24/7', plus: '', cap: 'Service client disponible', icon: 'headset' },
      ],
    },
    distributors: {
      title: 'Notre réseau de distributeurs',
      text: 'PleinGaz offre à ses clients un réseau sûr et efficace, au service des régions. Nos équipes travaillent chaque jour pour la performance, la qualité et la responsabilité.',
      cta: 'Découvrir le réseau ›',
    },
    mascot: {
      label: 'À votre service',
      title: 'Discutez avec nous',
      whatsapp: 'WhatsApp',
      call: 'Nous appeler',
      close: 'Fermer',
    },
    network: {
      title: 'Points de vente',
      crumbParent: 'Nos activités',
      intro: 'Retrouvez PleinGaz partout au Cameroun. Notre réseau de revendeurs partenaires couvre les grandes villes et les régions. Cliquez sur un marqueur pour voir les coordonnées du point de vente.',
      overlayCount: 'points de vente',
      note: 'Réseau en expansion continue — de nouveaux points de vente sont ajoutés régulièrement.',
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
      about: [
        { label: 'Qui sommes-nous ?', href: '/apropos' },
        { label: 'Histoire', href: '/histoire' },
        { label: 'Nos engagements', href: '/nos-engagements' },
      ],
      activitiesTitle: 'Activités',
      activities: [
        { label: 'Bouteilles domestiques', href: '/produit/bouteilles-domestiques' },
        { label: 'Gaz en vrac', href: '/produit/gaz-vrac' },
        { label: 'Réchauds & cuisinières', href: '/produit/rechauds-cuisinieres' },
        { label: 'Détendeurs & accessoires', href: '/produit/detendeurs-accessoires' },
        { label: 'Livraison à domicile', href: '/produit/livraison-domicile' },
      ],
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
    about: {
      home: 'Accueil',
      title: 'Qui sommes-nous ?',
      sidebarTitle: 'Découvrir PleinGaz',
      sidebar: [
        { label: 'Qui sommes-nous ?', href: '/apropos' },
        { label: 'Histoire', href: '/histoire' },
        { label: 'Nos engagements', href: '/nos-engagements' },
      ],
      quote: 'Demander un devis',
      pos: 'Points de vente',
      paragraphs: [
        'PleinGaz est un acteur majeur de la distribution de gaz et de produits énergétiques au Cameroun. Grâce à sa stratégie de distribution unique, les bouteilles sont livrées chaque jour à son vaste réseau de dépôts, garantissant la disponibilité du gaz.',
        'Notre gamme s’adresse, d’une part, aux professionnels — bouteilles industrielles, gaz en vrac, lubrifiants, additifs et biocides — et, d’autre part, aux ménages, avec les bouteilles domestiques de 6 kg, 12,5 kg et 50 kg.',
        'Afin d’offrir un haut niveau de sécurité, des innovations majeures ont été apportées à nos bouteilles et à nos équipements. Avec plus de 850 revendeurs partenaires à travers le pays, PleinGaz met son expertise au service du plus grand nombre depuis 2015.',
        'PleinGaz est conscient de sa responsabilité face aux enjeux sociétaux et environnementaux. L’entreprise veille au respect de l’environnement, à la sécurité au travail et à la conformité de ses procédures, tout en multipliant ses initiatives sociales.',
      ],
      valuesTitle: 'Nos valeurs',
      values: [
        { title: 'La sécurité avant tout', items: ['Adopter un comportement sûr dans tout ce que nous faisons.', 'Veiller à ce que le travail et les déplacements se fassent en toute sécurité.', 'Promouvoir la sécurité et la santé au travail.'] },
        { title: 'La réussite des employés', items: ['Continuer à se développer et à faire grandir les autres.', 'Chercher des solutions et encourager chacun à progresser.', 'Participer à la vie de l’entreprise, être socialement responsable.'] },
        { title: 'Esprit d’équipe et collaboration', items: ['Traiter ses collègues comme on aimerait l’être.', 'Faire confiance aux compétences de chacun.', 'Rechercher activement des points de vue et des idées nouvelles.'] },
        { title: 'Excellence et amélioration continue', items: ['Être professionnel en respectant ses engagements.', 'Exceller, avec la volonté d’être un leader.', 'Oser innover en prenant des risques raisonnables.'] },
        { title: 'Satisfaction client', items: ['Placer le client au cœur de nos préoccupations.', 'Répondre aux besoins des clients et à leurs attentes.', 'Apporter de la valeur à chacune de nos interactions.'] },
      ],
    },
    history: {
      title: 'Histoire',
      timeline: [
        { year: '2024', events: ['Extension du réseau à plus de 850 revendeurs partenaires à travers le Cameroun.', 'PleinGaz distingué pour la qualité de son service client.'] },
        { year: '2021', events: ['Mise en service d’un nouveau centre d’emplissage à forte capacité de stockage.', 'Renforcement des normes de sécurité sur toute la chaîne de distribution.'] },
        { year: '2018', events: ['Lancement de la livraison à domicile pour les particuliers et les professionnels.'] },
        { year: '2015', events: ['Création de PleinGaz au Cameroun.'] },
      ],
    },
    engagements: {
      title: 'Nos engagements',
      sections: [
        { title: 'HSE (Hygiène, Sécurité, Environnement)', text: 'PleinGaz s’engage dans une démarche HSE afin de maîtriser les risques pour la santé et la sécurité au travail et d’assurer la protection des biens, des personnes et de l’environnement. En tant que distributeur d’énergie, nous veillons à ce que nos produits et la logistique associée limitent au maximum notre empreinte écologique, dans l’intérêt des générations futures.' },
        { title: 'Fondation PleinGaz', text: 'À travers ses actions solidaires, PleinGaz s’investit sur le terrain pour la santé, l’éducation et le bien-être des communautés camerounaises : soutien aux écoles, dons aux structures d’accueil et participation à des initiatives sociales et culturelles.' },
      ],
    },
    catalogTitle: 'Nos activités',
    catalogPromo: {
      title: 'Ce produit vous intéresse ?',
      text: 'Nos conseillers sont à votre disposition pour vous orienter vers la solution la mieux adaptée à vos besoins et vous communiquer nos tarifs.',
      quote: 'Demander un devis',
      pos: 'Points de vente',
      features: 'Nos atouts',
    },
    catalog: [
      {
        slug: 'bouteilles-domestiques', title: 'Bouteilles domestiques', icon: 'bottle', ph: 'ph-warm',
        paragraphs: [
          'PleinGaz met à disposition des ménages une gamme complète de bouteilles de gaz : 6 kg pour les petits foyers, 12,5 kg pour la cuisine familiale et 50 kg pour les besoins les plus importants.',
          'Chaque bouteille répond à des contrôles de sécurité stricts et bénéficie de notre réseau de recharge disponible partout au Cameroun.',
        ],
        features: ['Formats 6 kg, 12,5 kg et 50 kg', 'Recharge rapide chez plus de 850 revendeurs', 'Bouteilles contrôlées et sécurisées'],
      },
      {
        slug: 'gaz-vrac', title: 'Gaz en vrac', icon: 'factory', ph: 'ph-slate',
        paragraphs: [
          'Pour les industriels et les professionnels à forte consommation, PleinGaz assure l’approvisionnement en gaz en vrac, livré directement dans vos citernes.',
          'Un suivi régulier et une logistique dédiée garantissent la continuité de votre activité.',
        ],
        features: ['Livraison en citerne', 'Approvisionnement continu', 'Solutions sur mesure pour l’industrie'],
      },
      {
        slug: 'rechauds-cuisinieres', title: 'Réchauds & cuisinières', icon: 'stove', ph: 'ph-crowd',
        paragraphs: [
          'Complétez votre installation avec nos réchauds et cuisinières : allumage piézo, plans en verre trempé, faciles à nettoyer et adaptés à un usage quotidien.',
          'Des équipements fiables, pensés pour la sécurité et le confort de toute la famille.',
        ],
        features: ['Allumage piézo', 'Verre trempé facile à nettoyer', 'Modèles 1 à 4 feux'],
      },
      {
        slug: 'detendeurs-accessoires', title: 'Détendeurs & accessoires', icon: 'wrench', ph: 'ph-green',
        paragraphs: [
          'Détendeurs de sécurité, tuyaux, colliers et pièces homologuées : tout le nécessaire pour raccorder et utiliser votre installation en toute sérénité.',
          'Des accessoires certifiés, conformes aux normes en vigueur.',
        ],
        features: ['Détendeurs de sécurité homologués', 'Tuyaux et raccords certifiés', 'Pièces de rechange disponibles'],
      },
      {
        slug: 'livraison-domicile', title: 'Livraison à domicile', icon: 'team', ph: 'ph-blue',
        paragraphs: [
          'Commandez votre gaz et faites-vous livrer directement chez vous, rapidement et en toute sécurité, partout dans nos zones de couverture.',
          'Un service pensé pour vous simplifier le quotidien, particuliers comme professionnels.',
        ],
        features: ['Livraison rapide et sécurisée', 'Particuliers et professionnels', 'Large zone de couverture'],
      },
    ],
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
            { label: 'Who are we?', href: '/apropos' },
            { label: 'History', href: '/histoire' },
            { label: 'Our commitments', href: '/nos-engagements' },
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
            { label: 'Domestic cylinders', href: '/produit/bouteilles-domestiques' },
            { label: 'Bulk gas', href: '/produit/gaz-vrac' },
            { label: 'Stoves & cookers', href: '/produit/rechauds-cuisinieres' },
            { label: 'Regulators & accessories', href: '/produit/detendeurs-accessoires' },
            { label: 'Home delivery', href: '/produit/livraison-domicile' },
            { label: 'Points of sale', href: '/reseau' },
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
      { title: '6 kg cylinder', desc: 'Ideal for small households, light and easy to carry.', price: 'Refill from 6,500 FCFA', icon: 'bottle', slug: 'bouteilles-domestiques' },
      { title: '12.5 kg cylinder', desc: 'The most requested family size for an active kitchen.', price: 'Most popular', icon: 'canister', slug: 'bouteilles-domestiques' },
      { title: '50 kg cylinder', desc: 'For restaurants, hotels and high-consumption industries.', price: 'Refill from 26,000 FCFA', icon: 'factory', slug: 'bouteilles-domestiques' },
      { title: 'Stoves & cookers', desc: 'Glass stove, piezo ignition — practical and easy to clean.', price: 'From 18,000 FCFA', icon: 'stove', slug: 'rechauds-cuisinieres' },
      { title: 'Regulators & accessories', desc: 'Safety regulators, hoses and approved parts.', price: 'On quote', icon: 'wrench', slug: 'detendeurs-accessoires' },
    ],
    figures: {
      eyebrow: 'Key figures',
      list: [
        { num: '2015', plus: '', cap: 'Serving households since', icon: 'shieldCheck' },
        { num: '120,000', plus: '+', cap: 'Cylinders in circulation', icon: 'gasBottle' },
        { num: '850', plus: '+', cap: 'Partner resellers', icon: 'house' },
        { num: '24/7', plus: '', cap: 'Customer service available', icon: 'headset' },
      ],
    },
    distributors: {
      title: 'Our distributor network',
      text: 'PleinGaz offers its customers a safe and efficient network, at the service of the regions. Our teams work every day for performance, quality and responsibility.',
      cta: 'Discover the network ›',
    },
    mascot: {
      label: 'At your service',
      title: 'Chat with us',
      whatsapp: 'WhatsApp',
      call: 'Call us',
      close: 'Close',
    },
    network: {
      title: 'Points of sale',
      crumbParent: 'Our activities',
      intro: 'Find PleinGaz everywhere in Cameroon. Our network of partner resellers covers the major cities and regions. Click a marker to see the point-of-sale details.',
      overlayCount: 'points of sale',
      note: 'A continuously growing network — new points of sale are added regularly.',
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
      about: [
        { label: 'Who are we?', href: '/apropos' },
        { label: 'History', href: '/histoire' },
        { label: 'Our commitments', href: '/nos-engagements' },
      ],
      activitiesTitle: 'Activities',
      activities: [
        { label: 'Domestic cylinders', href: '/produit/bouteilles-domestiques' },
        { label: 'Bulk gas', href: '/produit/gaz-vrac' },
        { label: 'Stoves & cookers', href: '/produit/rechauds-cuisinieres' },
        { label: 'Regulators & accessories', href: '/produit/detendeurs-accessoires' },
        { label: 'Home delivery', href: '/produit/livraison-domicile' },
      ],
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
    about: {
      home: 'Home',
      title: 'Who are we?',
      sidebarTitle: 'Discover PleinGaz',
      sidebar: [
        { label: 'Who are we?', href: '/apropos' },
        { label: 'History', href: '/histoire' },
        { label: 'Our commitments', href: '/nos-engagements' },
      ],
      quote: 'Ask for a quote',
      pos: 'Points of sale',
      paragraphs: [
        'PleinGaz is a major player in the distribution of gas and energy products in Cameroon. Thanks to its unique distribution strategy, cylinders are delivered daily to its extensive network of depots, ensuring the availability of gas.',
        'Our range is aimed, on the one hand, at professionals — industrial cylinders, bulk gas, lubricants, additives and biocides — and, on the other hand, at households, with the 6 kg, 12.5 kg and 50 kg domestic cylinders.',
        'In order to offer a high level of safety, major innovations have been made to our cylinders and equipment. With more than 850 partner resellers across the country, PleinGaz has put its expertise at the service of the greatest number since 2015.',
        'PleinGaz is aware of its responsibility in the face of societal and environmental challenges. The company ensures respect for the environment, workplace safety and compliance of its procedures, while increasing its social initiatives.',
      ],
      valuesTitle: 'Our values',
      values: [
        { title: 'Health and safety first', items: ['Demonstrate safe behavior in everything we do.', 'Ensure that all work and travel is done safely.', 'Promote safety and health in the workplace.'] },
        { title: 'Employee achievement', items: ['Continue to develop oneself and others.', 'Seek solutions and encourage others to improve.', 'Take part in the life of the company, be socially responsible.'] },
        { title: 'Team spirit and collaboration', items: ['Treat colleagues as we would like to be treated.', 'Trust in the abilities of our colleagues.', 'Actively seek different points of view and new ideas.'] },
        { title: 'Excellence and continuous improvement', items: ['Be professional by respecting the commitments made.', 'Excel, with the will to be a leader.', 'Dare to innovate while taking reasonable risks.'] },
        { title: 'Client satisfaction', items: ['Put the customer at the heart of our concerns.', 'Respond to customer needs and expectations.', 'Bring value to every one of our interactions.'] },
      ],
    },
    history: {
      title: 'History',
      timeline: [
        { year: '2024', events: ['Network extended to more than 850 partner resellers across Cameroon.', 'PleinGaz recognised for the quality of its customer service.'] },
        { year: '2021', events: ['Commissioning of a new filling centre with large storage capacity.', 'Strengthened safety standards across the whole distribution chain.'] },
        { year: '2018', events: ['Launch of home delivery for individuals and professionals.'] },
        { year: '2015', events: ['Creation of PleinGaz in Cameroon.'] },
      ],
    },
    engagements: {
      title: 'Our commitments',
      sections: [
        { title: 'HSE (Health, Safety, Environment)', text: 'PleinGaz is committed to an HSE approach in order to control health and safety risks in the workplace and to ensure the protection of goods, people and the environment. As an energy distributor, we make sure that our products and the associated logistics limit our ecological footprint as much as possible, in the interest of future generations.' },
        { title: 'PleinGaz Foundation', text: 'Through its charitable actions, PleinGaz works on the ground for the health, education and well-being of Cameroonian communities: support for schools, donations to care facilities and participation in social and cultural initiatives.' },
      ],
    },
    catalogTitle: 'Our activities',
    catalogPromo: {
      title: 'Interested in this product?',
      text: 'Our advisers are on hand to guide you toward the solution best suited to your needs and to share our pricing with you.',
      quote: 'Request a quote',
      pos: 'Points of sale',
      features: 'Key benefits',
    },
    catalog: [
      {
        slug: 'bouteilles-domestiques', title: 'Domestic cylinders', icon: 'bottle', ph: 'ph-warm',
        paragraphs: [
          'PleinGaz offers households a full range of gas cylinders: 6 kg for small homes, 12.5 kg for family cooking and 50 kg for the heaviest needs.',
          'Every cylinder meets strict safety checks and benefits from our refill network available throughout Cameroon.',
        ],
        features: ['6 kg, 12.5 kg and 50 kg formats', 'Fast refills at over 850 resellers', 'Inspected and secured cylinders'],
      },
      {
        slug: 'gaz-vrac', title: 'Bulk gas', icon: 'factory', ph: 'ph-slate',
        paragraphs: [
          'For industry and high-consumption professionals, PleinGaz ensures a bulk gas supply, delivered directly into your tanks.',
          'Regular monitoring and dedicated logistics keep your operations running without interruption.',
        ],
        features: ['Tanker delivery', 'Continuous supply', 'Tailored solutions for industry'],
      },
      {
        slug: 'rechauds-cuisinieres', title: 'Stoves & cookers', icon: 'stove', ph: 'ph-crowd',
        paragraphs: [
          'Complete your setup with our stoves and cookers: piezo ignition, tempered-glass tops, easy to clean and built for daily use.',
          'Reliable equipment designed for the safety and comfort of the whole family.',
        ],
        features: ['Piezo ignition', 'Easy-clean tempered glass', '1 to 4-burner models'],
      },
      {
        slug: 'detendeurs-accessoires', title: 'Regulators & accessories', icon: 'wrench', ph: 'ph-green',
        paragraphs: [
          'Safety regulators, hoses, clamps and approved parts: everything you need to connect and use your installation with complete peace of mind.',
          'Certified accessories that comply with current standards.',
        ],
        features: ['Approved safety regulators', 'Certified hoses and fittings', 'Spare parts available'],
      },
      {
        slug: 'livraison-domicile', title: 'Home delivery', icon: 'team', ph: 'ph-blue',
        paragraphs: [
          'Order your gas and have it delivered straight to your door, quickly and safely, anywhere within our coverage areas.',
          'A service designed to make your everyday life easier, for individuals and professionals alike.',
        ],
        features: ['Fast, secure delivery', 'Individuals and professionals', 'Wide coverage area'],
      },
    ],
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
