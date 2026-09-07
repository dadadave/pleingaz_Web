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
    contactPage: {
      title: 'Contactez-nous',
      crumbParent: 'Contacts',
      infoTitle: 'Informations',
      formTitle: 'Formulaire',
      info: [
        { icon: 'mapPin', label: 'Siège social', value: 'Yaoundé, Cameroun' },
        { icon: 'clock', label: 'Horaires', value: 'Lundi – Vendredi : 08h00 – 18h00' },
        { icon: 'phone', label: 'Standard', value: '+237 6 80 00 00 75', href: 'tel:+237680000075' },
        { icon: 'mail', label: 'E-mail', value: 'support@pleingaz.com', href: 'mailto:support@pleingaz.com' },
      ],
      form: {
        name: 'Nom', email: 'E-mail', subject: 'Objet', message: 'Message',
        send: 'Envoyer', required: '*',
      },
    },
    header: {
      certified: 'Qualité certifiée',
      menu: 'Menu',
    },
    nav: [
      {
        key: 'discover',
        label: 'Découvrir PleinGaz',
        href: '#top',
        mega: {
          blurb: 'PleinGaz, acteur majeur de la distribution de gaz au Cameroun.',
          links: [
            { label: 'Qui sommes-nous ?', href: '/apropos' },
            { label: 'Histoire', href: '/histoire' },
            { label: 'Nos engagements', href: '/nos-engagements' },
            { label: 'Conseils de sécurité', href: '/securite' },
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
            'PleinGaz répond à tous vos besoins en gaz : bouteilles domestiques, gaz en vrac, réchauds, détendeurs et livraison à domicile.',
          links: [
            { label: 'Bouteilles domestiques', href: '/produit/bouteilles-domestiques' },
            { label: 'Bouteille 50 kg', href: '/produit/bouteille-50kg' },
            { label: 'Plaque à gaz', href: '/produit/rechauds-cuisinieres' },
            { label: 'Tuyau de gaz', href: '/produit/tuyau-gaz' },
            { label: 'Support de réchaud', href: '/produit/support-rechaud' },
            { label: 'Camping gaz', href: '/produit/camping-gaz' },
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
      { key: 'contacts', label: 'Contacts', href: '/contacts' },
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
          title: 'Du gaz fiable, partout au Cameroun',
          text: 'Un réseau de plus de 1 000 points de vente, au service des foyers et des professionnels.',
        },
      ],
    },
    supplier: {
      title: 'Votre fournisseur de gaz au Cameroun',
      text: 'Depuis 2015, PleinGaz fournit du gaz et des accessoires de gaz aux foyers camerounais avec fiabilité, sécurité et passion. Particuliers et professionnels : retrouvez toute notre gamme de produits.',
      about: 'À propos ›',
    },
    portfolio: {
      eyebrow: 'Notre gamme',
      title: 'Découvrez notre gamme de produits',
      intro:
        'Choisir PleinGaz, c’est choisir un gaz pratique et disponible pour un confort maximal au quotidien. Trouvez le produit qu’il vous faut.',
      learnMore: 'En savoir plus',
      prev: 'Produits précédents',
      next: 'Produits suivants',
    },
    products: [
      { title: 'Bouteille 6 kg', desc: 'Idéale pour les petits foyers, légère et facile à transporter.', price: 'Recharge dès 3 120 FCFA', icon: 'bottle', image: '/images/products/bouteille-6kg.png', slug: 'bouteille-6kg' },
      { title: 'Bouteille 12,5 kg', desc: 'Le format familial le plus demandé pour une cuisine active.', price: 'Recharge dès 6 500 FCFA', icon: 'canister', image: '/images/products/bouteille-12kg.png', slug: 'bouteille-12-5kg' },
      { title: 'Bouteille 50 kg', desc: 'Pour restaurants, hôtels et industries à forte consommation.', price: 'Recharge dès 26 000 FCFA', icon: 'factory', image: '/images/products/bouteille-50kg.png', slug: 'bouteille-50kg' },
      { title: 'Plaque à gaz', desc: 'Réchaud verre, allumage piézo — pratique et facile à nettoyer.', price: 'Dès 18 000 FCFA', icon: 'stove', image: '/images/products/plaque-gaz.png', slug: 'rechauds-cuisinieres' },
      { title: 'Tuyau de gaz', desc: 'Tuyau flexible homologué pour raccorder votre bouteille en toute sécurité.', price: '6,3 mm × 13 mm', icon: 'wrench', image: '/images/products/tuyau-gaz.png', slug: 'tuyau-gaz' },
      { title: 'Support de réchaud', desc: 'Trépied en fonte robuste pour poser vos marmites sur le réchaud.', price: 'Fonte massive', icon: 'stove', image: '/images/products/support-rechaud.png', slug: 'support-rechaud' },
      { title: 'Camping gaz', desc: 'Cartouches de gaz butane pour la cuisine nomade, le camping et la randonnée.', price: '230 g / 450 g', icon: 'canister', image: '/images/products/camping-butane.png', slug: 'camping-gaz' },
      { title: 'Détendeurs & accessoires', desc: 'Détendeurs de sécurité, chalumeaux, brûleurs et pièces homologués.', price: 'Sur devis', icon: 'wrench', image: '/images/products/detendeur-28mbar.png', slug: 'detendeurs-accessoires' },
    ],
    figures: {
      eyebrow: 'Chiffres clés',
      list: [
        { num: '2015', plus: '', cap: 'Au service des foyers depuis', icon: 'calendar' },
        { num: '1 000', plus: '+', cap: 'Points de vente au Cameroun', icon: 'storefront' },
        { num: '1,5 M', plus: '', cap: 'Bouteilles remplies chaque année', icon: 'gasBottle' },
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
      videosEyebrow: 'Vidéos',
      video: {
        date: '03 01 2026',
        title: 'PleinGaz sensibilise aux incidents liés au gaz',
        src: '/videos/pleingaz-1.mp4',
        poster: '/images/video-poster.jpg',
        play: 'Lire la vidéo',
      },
    },
    footer: {
      newsletterTitle: 'Vous souhaitez recevoir nos actualités ?',
      newsletterPlaceholder: 'Saisissez votre adresse e-mail',
      aboutTitle: 'À propos',
      about: [
        { label: 'Qui sommes-nous ?', href: '/apropos' },
        { label: 'Histoire', href: '/histoire' },
        { label: 'Nos engagements', href: '/nos-engagements' },
        { label: 'Conseils de sécurité', href: '/securite' },
      ],
      activitiesTitle: 'Activités',
      activities: [
        { label: 'Bouteilles domestiques', href: '/produit/bouteilles-domestiques' },
        { label: 'Bouteille 50 kg', href: '/produit/bouteille-50kg' },
        { label: 'Plaque à gaz', href: '/produit/rechauds-cuisinieres' },
        { label: 'Tuyau de gaz', href: '/produit/tuyau-gaz' },
        { label: 'Support de réchaud', href: '/produit/support-rechaud' },
        { label: 'Camping gaz', href: '/produit/camping-gaz' },
        { label: 'Détendeurs & accessoires', href: '/produit/detendeurs-accessoires' },
        { label: 'Livraison à domicile', href: '/produit/livraison-domicile' },
      ],
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
        { label: 'Conseils de sécurité', href: '/securite' },
      ],
      quote: 'Demander un devis',
      pos: 'Points de vente',
      paragraphs: [
        'PleinGaz est un acteur majeur de la distribution de gaz et d’accessoires de gaz au Cameroun. Portée par le groupe INFOTECH S.A., fondé en 1997 par l’ingénieur Blanchard Kenfack, la marque met le client au centre de ses actions depuis 2015.',
        'Notre force, c’est de maîtriser toute la chaîne : de la fabrication de la bouteille à son remplissage, jusqu’à la distribution du produit chez le consommateur final, en passant par les réchauds et accessoires qui facilitent son utilisation au quotidien.',
        'Notre gamme s’adresse, d’une part, aux professionnels — bouteilles industrielles, gaz en vrac, détendeurs, tuyaux et accessoires de gaz — et, d’autre part, aux ménages, avec les bouteilles domestiques de 6 kg, 12,5 kg et 50 kg.',
        'Afin d’offrir un haut niveau de sécurité, des innovations majeures ont été apportées à nos bouteilles et à nos équipements. Avec plus de 1 000 points de vente à travers le pays, PleinGaz met son expertise au service du plus grand nombre.',
        'PleinGaz est conscient de sa responsabilité face aux enjeux sociétaux et environnementaux. L’entreprise veille au respect de l’environnement, à la sécurité au travail et à la conformité de ses procédures, tout en multipliant ses initiatives sociales.',
      ],
      chainTitle: 'Une chaîne intégrée, de la fabrication à la distribution',
      chain: [
        { icon: 'factory', title: 'Usine de fabrication', text: 'Nous fabriquons nos propres bouteilles de 6 kg et 12,5 kg, contrôlées avant leur mise en circulation.', stat: '600', statLabel: 'bouteilles produites / jour' },
        { icon: 'gasBottle', title: 'Centres de remplissage GPL', text: 'Deux centres emplisseurs, à Yaoundé et à Douala, avec plus de 150 tonnes de stockage en vrac.', stat: '1,5 M', statLabel: 'bouteilles remplies / an' },
        { icon: 'house', title: 'Réseau de distribution', text: 'Camions et camionnettes acheminent nos produits partout dans le triangle national, jusqu’au consommateur final.', stat: '1 000+', statLabel: 'points de vente' },
        { icon: 'stove', title: 'Montage de réchauds', text: 'Une unité dédiée assemble les réchauds à gaz PleinGaz et leurs accessoires.', stat: '104 000', statLabel: 'réchauds montés / an' },
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
        { year: '2024', events: ['Extension du réseau à plus de 1 000 points de vente à travers le Cameroun.', 'PleinGaz distingué pour la qualité de son service client.'] },
        { year: '2021', events: ['Renforcement des capacités de remplissage et de stockage en vrac (plus de 150 tonnes) sur les centres emplisseurs.', 'Renforcement des normes de sécurité sur toute la chaîne de distribution.'] },
        { year: '2018', events: ['Lancement de la livraison à domicile pour les particuliers et les professionnels.'] },
        { year: '2015', events: ['Lancement de la marque PleinGaz, qui intègre toute la chaîne : fabrication des bouteilles, remplissage, montage de réchauds et distribution.'] },
        { year: '1997', events: ['Création du groupe INFOTECH S.A. par le jeune ingénieur Blanchard Kenfack.'] },
      ],
    },
    engagements: {
      title: 'Nos engagements',
      whyTitle: 'Pourquoi nous avons choisi le gaz',
      whyIntro: 'Nous avons choisi le gaz pour aider notre pays, en sensibilisant la population et en vulgarisant ce combustible propre et accessible.',
      why: [
        { icon: 'shieldCheck', title: 'Santé', text: 'La cuisson au bois et au charbon expose les foyers à des fumées nocives pour les poumons. Le gaz, plus propre, protège la santé de toute la famille.' },
        { icon: 'team', title: 'Social', text: 'Le temps passé à chercher du bois ou du charbon, c’est autant de temps en moins pour les enfants et la famille. Le gaz libère ce temps au quotidien.' },
        { icon: 'shop', title: 'Économique', text: 'Le gaz revient moins cher que le bois ou le charbon — et le temps gagné sur le feu profite directement aux ménages et aux commerçantes.' },
        { icon: 'drop', title: 'Environnemental', text: 'Réduire l’usage du bois, c’est lutter contre la déforestation et le réchauffement climatique, dans l’intérêt des générations futures.' },
      ],
      sections: [
        { title: 'HSE (Hygiène, Sécurité, Environnement)', text: 'PleinGaz s’engage dans une démarche HSE afin de maîtriser les risques pour la santé et la sécurité au travail et d’assurer la protection des biens, des personnes et de l’environnement. En tant que distributeur de gaz, nous veillons à ce que nos produits et la logistique associée limitent au maximum notre empreinte écologique, dans l’intérêt des générations futures.' },
        { title: 'Fondation PleinGaz', text: 'À travers ses actions solidaires, PleinGaz s’investit sur le terrain pour la santé, l’éducation et le bien-être des communautés camerounaises : soutien aux écoles, dons aux structures d’accueil et participation à des initiatives sociales et culturelles.' },
      ],
    },
    safety: {
      title: 'Conseils de sécurité',
      intro: 'Quelques conseils pratiques pour utiliser votre gaz domestique (GPL) en toute sécurité, au quotidien comme en cas d’urgence.',
      groups: [
        {
          title: 'Utilisation courante', icon: 'gasBottle',
          items: [
            'Fermez bien votre bouteille après chaque utilisation.',
            'Placez toujours la bouteille à la verticale, dans un endroit aéré.',
            'Gardez la bouteille hors de portée des enfants.',
            'Évitez d’entrer dans la cuisine avec un téléphone portable.',
            'Vérifiez que la flamme est bien bleue ; signalez toute autre couleur.',
            'N’allumez aucun feu à proximité d’une bouteille de gaz.',
          ],
        },
        {
          title: 'Installation d’une nouvelle bouteille', icon: 'wrench',
          items: [
            'Assurez-vous que la bouteille, même vide, est bien fermée avant de la transporter.',
            'Vérifiez que le robinet et le tuyau disposent chacun d’un joint en caoutchouc.',
            'Assurez-vous qu’il n’y a aucune fuite ni odeur anormale dans la cuisine.',
          ],
        },
        {
          title: 'Maintenance régulière', icon: 'shieldCheck',
          items: [
            'Vérifiez la date de péremption de vos accessoires (tuyau, détendeur).',
            'Contrôlez l’état des brûleurs de votre cuisinière ou plaque à gaz.',
          ],
        },
      ],
      dangerTitle: 'En cas de danger',
      danger: [
        {
          title: 'En cas de fuite ou d’odeur de gaz',
          items: [
            'N’actionnez aucun branchement électrique et ne touchez pas aux interrupteurs.',
            'Ouvrez toutes les portes et fenêtres.',
            'Éloignez les téléphones portables.',
            'Demandez l’assistance d’un spécialiste ou appelez les pompiers.',
          ],
        },
        {
          title: 'Si la bouteille prend feu',
          items: [
            'Couvrez-la immédiatement d’un tissu lourd et trempé d’eau.',
            'Demandez l’assistance d’un spécialiste ou appelez les pompiers.',
          ],
        },
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
    pricing: {
      title: 'Grille tarifaire',
      size: 'Bouteille',
      consigne: 'Consigne',
      recharge: 'Recharge',
      note: 'La consigne correspond à l’achat de la bouteille (première acquisition) ; la recharge, au remplissage de votre bouteille. Prix indicatifs, susceptibles d’évoluer.',
    },
    catalog: [
      {
        slug: 'bouteilles-domestiques', title: 'Bouteilles domestiques', icon: 'bottle', ph: 'ph-warm', image: '/images/products/bouteille-6kg.png',
        paragraphs: [
          'PleinGaz met à disposition des ménages une gamme complète de bouteilles de gaz : 6 kg pour les petits foyers, 12,5 kg pour la cuisine familiale et 50 kg pour les besoins les plus importants.',
          'Chaque bouteille répond à des contrôles de sécurité stricts et bénéficie de notre réseau de recharge disponible partout au Cameroun.',
        ],
        features: ['Formats 6 kg, 12,5 kg et 50 kg', 'Recharge rapide dans plus de 1 000 points de vente', 'Bouteilles contrôlées et sécurisées'],
        priceGrid: [
          { size: '6 kg', consigne: '13 000 FCFA', recharge: '3 120 FCFA' },
          { size: '12,5 kg', consigne: '18 500 FCFA', recharge: '6 500 FCFA' },
          { size: '50 kg', consigne: '50 000 FCFA', recharge: '26 000 FCFA' },
        ],
      },
      {
        slug: 'bouteille-6kg', title: 'Bouteille 6 kg', icon: 'bottle', ph: 'ph-warm', image: '/images/products/bouteille-6kg.png',
        paragraphs: [
          'La bouteille de 6 kg est le format le plus léger de la gamme PleinGaz : idéale pour les petits foyers, les studios et les usages d’appoint, elle se transporte et se range sans effort.',
          'Facile à manipuler, elle offre une autonomie confortable pour une cuisine occasionnelle et se recharge en quelques minutes dans notre réseau de revendeurs.',
        ],
        features: ['Format léger 6 kg, facile à transporter', 'Idéale pour les petits foyers et les studios', 'Recharge dès 3 120 FCFA'],
        priceGrid: [{ size: '6 kg', consigne: '13 000 FCFA', recharge: '3 120 FCFA' }],
      },
      {
        slug: 'bouteille-12-5kg', title: 'Bouteille 12,5 kg', icon: 'canister', ph: 'ph-warm', image: '/images/products/bouteille-12kg.png',
        paragraphs: [
          'La bouteille de 12,5 kg est le format familial le plus demandé : idéale pour une cuisine active au quotidien, elle offre une grande autonomie tout en restant facile à manipuler.',
          'C’est le choix privilégié des familles : un bon équilibre entre autonomie et encombrement, avec une recharge disponible partout au Cameroun.',
        ],
        features: ['Format familial 12,5 kg', 'Grande autonomie pour un usage quotidien', 'Recharge rapide dans plus de 1 000 points de vente'],
        priceGrid: [{ size: '12,5 kg', consigne: '18 500 FCFA', recharge: '6 500 FCFA' }],
      },
      {
        slug: 'bouteille-50kg', title: 'Bouteille 50 kg', icon: 'factory', ph: 'ph-slate', image: '/images/products/bouteille-50kg.png',
        paragraphs: [
          'La bouteille de 50 kg est le format le plus généreux de la gamme PleinGaz : pensée pour les restaurants, les hôtels et les activités à forte consommation, elle assure une longue autonomie sans recharges fréquentes.',
          'Robuste et contrôlée selon des normes de sécurité strictes, elle garantit la continuité de votre activité professionnelle.',
        ],
        features: ['Grand format 50 kg, longue autonomie', 'Idéale pour restaurants, hôtels et industries', 'Recharge dès 26 000 FCFA'],
        priceGrid: [{ size: '50 kg', consigne: '50 000 FCFA', recharge: '26 000 FCFA' }],
      },
      {
        slug: 'rechauds-cuisinieres', title: 'Plaque à gaz', icon: 'stove', ph: 'ph-crowd', image: '/images/products/plaque-gaz.png',
        paragraphs: [
          'Complétez votre installation avec notre plaque à gaz : allumage piézo, plan en verre trempé, facile à nettoyer et adaptée à un usage quotidien.',
          'Un équipement fiable, pensé pour la sécurité et le confort de toute la famille.',
        ],
        features: ['Allumage piézo', 'Verre trempé facile à nettoyer', 'Plaque 3 feux'],
      },
      {
        slug: 'tuyau-gaz', title: 'Tuyau de gaz', icon: 'wrench', ph: 'ph-warm', image: '/images/products/tuyau-gaz.png',
        paragraphs: [
          'Le tuyau de gaz PleinGaz assure un raccordement fiable et sûr entre votre bouteille et votre appareil. Souple et résistant, il est conçu pour un usage domestique quotidien.',
          'Aux dimensions standard 6,3 mm × 13 mm, il se pose facilement et résiste dans le temps aux conditions d’utilisation.',
        ],
        features: ['Dimensions 6,3 mm × 13 mm', 'Souple et résistant', 'Raccordement sûr et durable'],
      },
      {
        slug: 'support-rechaud', title: 'Support de réchaud', icon: 'stove', ph: 'ph-slate', image: '/images/products/support-rechaud.png',
        paragraphs: [
          'Le support de réchaud en fonte offre une base stable et robuste pour poser vos marmites et casseroles sur le brûleur.',
          'Massif et durable, il résiste à la chaleur et à un usage intensif, pour une cuisine en toute sécurité.',
        ],
        features: ['Fonte massive et durable', 'Grande stabilité pour vos marmites', 'Résistant à la chaleur'],
      },
      {
        slug: 'camping-gaz', title: 'Camping gaz', icon: 'canister', ph: 'ph-warm', image: '/images/products/camping-butane.png',
        paragraphs: [
          'Les cartouches de camping gaz PleinGaz sont pensées pour la cuisine nomade : camping, randonnée, pique-nique ou appoint à la maison.',
          'Disponibles en plusieurs formats (230 g et 450 g), elles alimentent réchauds portatifs et brûleurs de plein air avec un gaz butane haute performance.',
        ],
        features: ['Formats 230 g et 450 g', 'Idéal camping, randonnée et cuisine nomade', 'Gaz butane haute performance'],
        gallery: [
          { src: '/images/products/camping-450g.png', label: '450 g' },
          { src: '/images/products/camping-230g.png', label: '230 g' },
        ],
      },
      {
        slug: 'detendeurs-accessoires', title: 'Détendeurs & accessoires', icon: 'wrench', ph: 'ph-green', image: '/images/products/detendeur-28mbar.png',
        paragraphs: [
          'Détendeurs de sécurité, chalumeaux, brûleurs et pièces homologuées : tout le nécessaire pour raccorder, allumer et compléter votre installation en toute sérénité.',
          'Des accessoires certifiés, conformes aux normes en vigueur (EN 16129).',
        ],
        features: ['Détendeurs butane 28 & 30 mbar homologués', 'Chalumeau et brûleur haute puissance', 'Raccords et pièces certifiés'],
        gallery: [
          { src: '/images/products/detendeur-30mbar.png', label: 'Détendeur 30 mbar' },
          { src: '/images/products/chalumeau.png', label: 'Chalumeau' },
          { src: '/images/products/bruleur.png', label: 'Brûleur à gaz' },
        ],
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
    contactPage: {
      title: 'Contact us',
      crumbParent: 'Contacts',
      infoTitle: 'Information',
      formTitle: 'Form',
      info: [
        { icon: 'mapPin', label: 'Head office', value: 'Yaoundé, Cameroon' },
        { icon: 'clock', label: 'Hours', value: 'Monday – Friday: 08:00 – 18:00' },
        { icon: 'phone', label: 'Switchboard', value: '+237 6 80 00 00 75', href: 'tel:+237680000075' },
        { icon: 'mail', label: 'E-mail', value: 'support@pleingaz.com', href: 'mailto:support@pleingaz.com' },
      ],
      form: {
        name: 'Name', email: 'E-mail', subject: 'Subject', message: 'Message',
        send: 'Send', required: '*',
      },
    },
    header: {
      certified: 'Certified quality',
      menu: 'Menu',
    },
    nav: [
      {
        key: 'discover',
        label: 'Discover PleinGaz',
        href: '#top',
        mega: {
          blurb: 'PleinGaz, a major player in gas distribution in Cameroon.',
          links: [
            { label: 'Who are we?', href: '/apropos' },
            { label: 'History', href: '/histoire' },
            { label: 'Our commitments', href: '/nos-engagements' },
            { label: 'Safety tips', href: '/securite' },
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
            'PleinGaz meets all your gas needs: domestic cylinders, bulk gas, stoves, regulators and home delivery.',
          links: [
            { label: 'Domestic cylinders', href: '/produit/bouteilles-domestiques' },
            { label: '50 kg cylinder', href: '/produit/bouteille-50kg' },
            { label: 'Gas stove', href: '/produit/rechauds-cuisinieres' },
            { label: 'Gas hose', href: '/produit/tuyau-gaz' },
            { label: 'Stove trivet', href: '/produit/support-rechaud' },
            { label: 'Camping gas', href: '/produit/camping-gaz' },
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
      { key: 'contacts', label: 'Contacts', href: '/contacts' },
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
          title: 'Reliable gas, everywhere in Cameroon',
          text: 'A network of over 1,000 points of sale, serving households and professionals.',
        },
      ],
    },
    supplier: {
      title: 'Your gas supplier in Cameroon',
      text: 'Since 2015, PleinGaz has supplied Cameroonian households with gas and gas accessories, with reliability, safety and passion. Individuals and professionals: find our full range of products.',
      about: 'About us ›',
    },
    portfolio: {
      eyebrow: 'Our range',
      title: 'Discover our product range',
      intro:
        'Choosing PleinGaz means choosing practical, available gas for maximum daily comfort. Find the product you need.',
      learnMore: 'Learn more',
      prev: 'Previous products',
      next: 'Next products',
    },
    products: [
      { title: '6 kg cylinder', desc: 'Ideal for small households, light and easy to carry.', price: 'Refill from 3,120 FCFA', icon: 'bottle', image: '/images/products/bouteille-6kg.png', slug: 'bouteille-6kg' },
      { title: '12.5 kg cylinder', desc: 'The most requested family size for an active kitchen.', price: 'Refill from 6,500 FCFA', icon: 'canister', image: '/images/products/bouteille-12kg.png', slug: 'bouteille-12-5kg' },
      { title: '50 kg cylinder', desc: 'For restaurants, hotels and high-consumption industries.', price: 'Refill from 26,000 FCFA', icon: 'factory', image: '/images/products/bouteille-50kg.png', slug: 'bouteille-50kg' },
      { title: 'Gas stove', desc: 'Glass stove, piezo ignition — practical and easy to clean.', price: 'From 18,000 FCFA', icon: 'stove', image: '/images/products/plaque-gaz.png', slug: 'rechauds-cuisinieres' },
      { title: 'Gas hose', desc: 'Approved flexible hose to connect your cylinder safely.', price: '6.3 mm × 13 mm', icon: 'wrench', image: '/images/products/tuyau-gaz.png', slug: 'tuyau-gaz' },
      { title: 'Stove trivet', desc: 'Sturdy cast-iron stand to rest your pots on the burner.', price: 'Solid cast iron', icon: 'stove', image: '/images/products/support-rechaud.png', slug: 'support-rechaud' },
      { title: 'Camping gas', desc: 'Butane cartridges for outdoor cooking, camping and hiking.', price: '230 g / 450 g', icon: 'canister', image: '/images/products/camping-butane.png', slug: 'camping-gaz' },
      { title: 'Regulators & accessories', desc: 'Safety regulators, torches, burners and approved parts.', price: 'On quote', icon: 'wrench', image: '/images/products/detendeur-28mbar.png', slug: 'detendeurs-accessoires' },
    ],
    figures: {
      eyebrow: 'Key figures',
      list: [
        { num: '2015', plus: '', cap: 'Serving households since', icon: 'calendar' },
        { num: '1,000', plus: '+', cap: 'Points of sale in Cameroon', icon: 'storefront' },
        { num: '1.5 M', plus: '', cap: 'Cylinders filled each year', icon: 'gasBottle' },
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
      videosEyebrow: 'Videos',
      video: {
        date: '03 01 2026',
        title: 'PleinGaz raises awareness about gas-related incidents',
        src: '/videos/pleingaz-1.mp4',
        poster: '/images/video-poster.jpg',
        play: 'Play video',
      },
    },
    footer: {
      newsletterTitle: 'Want to receive our news?',
      newsletterPlaceholder: 'Enter your email address',
      aboutTitle: 'About',
      about: [
        { label: 'Who are we?', href: '/apropos' },
        { label: 'History', href: '/histoire' },
        { label: 'Our commitments', href: '/nos-engagements' },
        { label: 'Safety tips', href: '/securite' },
      ],
      activitiesTitle: 'Activities',
      activities: [
        { label: 'Domestic cylinders', href: '/produit/bouteilles-domestiques' },
        { label: '50 kg cylinder', href: '/produit/bouteille-50kg' },
        { label: 'Gas stove', href: '/produit/rechauds-cuisinieres' },
        { label: 'Gas hose', href: '/produit/tuyau-gaz' },
        { label: 'Stove trivet', href: '/produit/support-rechaud' },
        { label: 'Camping gas', href: '/produit/camping-gaz' },
        { label: 'Regulators & accessories', href: '/produit/detendeurs-accessoires' },
        { label: 'Home delivery', href: '/produit/livraison-domicile' },
      ],
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
        { label: 'Safety tips', href: '/securite' },
      ],
      quote: 'Ask for a quote',
      pos: 'Points of sale',
      paragraphs: [
        'PleinGaz is a major player in the distribution of gas and gas accessories in Cameroon. Backed by the INFOTECH S.A. group, founded in 1997 by engineer Blanchard Kenfack, the brand has put the customer at the heart of everything it does since 2015.',
        'Our strength is mastering the whole chain: from manufacturing the cylinder to filling it, all the way to delivering the product to the end consumer, including the stoves and accessories that make everyday use easier.',
        'Our range is aimed, on the one hand, at professionals — industrial cylinders, bulk gas, regulators, hoses and gas accessories — and, on the other hand, at households, with the 6 kg, 12.5 kg and 50 kg domestic cylinders.',
        'In order to offer a high level of safety, major innovations have been made to our cylinders and equipment. With more than 1,000 points of sale across the country, PleinGaz has put its expertise at the service of the greatest number.',
        'PleinGaz is aware of its responsibility in the face of societal and environmental challenges. The company ensures respect for the environment, workplace safety and compliance of its procedures, while increasing its social initiatives.',
      ],
      chainTitle: 'An integrated chain, from manufacturing to distribution',
      chain: [
        { icon: 'factory', title: 'Manufacturing plant', text: 'We manufacture our own 6 kg and 12.5 kg cylinders, inspected before they enter circulation.', stat: '600', statLabel: 'cylinders produced / day' },
        { icon: 'gasBottle', title: 'LPG filling centres', text: 'Two filling centres, in Yaoundé and Douala, with over 150 tonnes of bulk storage.', stat: '1.5 M', statLabel: 'cylinders filled / year' },
        { icon: 'house', title: 'Distribution network', text: 'Trucks and vans carry our products throughout the country, all the way to the end consumer.', stat: '1,000+', statLabel: 'points of sale' },
        { icon: 'stove', title: 'Stove assembly', text: 'A dedicated unit assembles PleinGaz gas stoves and their accessories.', stat: '104,000', statLabel: 'stoves assembled / year' },
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
        { year: '2024', events: ['Network extended to more than 1,000 points of sale across Cameroon.', 'PleinGaz recognised for the quality of its customer service.'] },
        { year: '2021', events: ['Strengthened filling and bulk storage capacity (over 150 tonnes) across the filling centres.', 'Strengthened safety standards across the whole distribution chain.'] },
        { year: '2018', events: ['Launch of home delivery for individuals and professionals.'] },
        { year: '2015', events: ['Launch of the PleinGaz brand, integrating the whole chain: cylinder manufacturing, filling, stove assembly and distribution.'] },
        { year: '1997', events: ['Creation of the INFOTECH S.A. group by the young engineer Blanchard Kenfack.'] },
      ],
    },
    engagements: {
      title: 'Our commitments',
      whyTitle: 'Why we chose gas',
      whyIntro: 'We chose gas to help our country, by raising public awareness and promoting a clean, accessible fuel.',
      why: [
        { icon: 'shieldCheck', title: 'Health', text: 'Cooking with wood and charcoal exposes households to smoke that harms the lungs. Cleaner gas protects the health of the whole family.' },
        { icon: 'team', title: 'Social', text: 'Time spent gathering wood or charcoal is time taken away from children and family. Gas frees up that time every day.' },
        { icon: 'shop', title: 'Economic', text: 'Gas costs less than wood or charcoal — and the time saved on the fire directly benefits households and traders.' },
        { icon: 'drop', title: 'Environmental', text: 'Reducing the use of wood means fighting deforestation and climate change, in the interest of future generations.' },
      ],
      sections: [
        { title: 'HSE (Health, Safety, Environment)', text: 'PleinGaz is committed to an HSE approach in order to control health and safety risks in the workplace and to ensure the protection of goods, people and the environment. As a gas distributor, we make sure that our products and the associated logistics limit our ecological footprint as much as possible, in the interest of future generations.' },
        { title: 'PleinGaz Foundation', text: 'Through its charitable actions, PleinGaz works on the ground for the health, education and well-being of Cameroonian communities: support for schools, donations to care facilities and participation in social and cultural initiatives.' },
      ],
    },
    safety: {
      title: 'Safety tips',
      intro: 'A few practical tips for using your domestic gas (LPG) safely, both day to day and in an emergency.',
      groups: [
        {
          title: 'Everyday use', icon: 'gasBottle',
          items: [
            'Always close your cylinder properly after each use.',
            'Always keep the cylinder upright, in a well-ventilated place.',
            'Keep the cylinder out of the reach of children.',
            'Avoid entering the kitchen with a mobile phone.',
            'Check that the flame is blue; report any other colour.',
            'Never light a fire near a gas cylinder.',
          ],
        },
        {
          title: 'Installing a new cylinder', icon: 'wrench',
          items: [
            'Make sure the cylinder, even when empty, is properly closed before moving it.',
            'Check that the valve and hose each have a rubber seal.',
            'Make sure there is no leak or abnormal smell in the kitchen.',
          ],
        },
        {
          title: 'Regular maintenance', icon: 'shieldCheck',
          items: [
            'Check the expiry date of your accessories (hose, regulator).',
            'Check the condition of the burners on your cooker or gas hob.',
          ],
        },
      ],
      dangerTitle: 'In case of danger',
      danger: [
        {
          title: 'If there is a leak or a smell of gas',
          items: [
            'Do not operate any electrical connection and do not touch the switches.',
            'Open all doors and windows.',
            'Keep mobile phones away.',
            'Ask a specialist for help or call the fire brigade.',
          ],
        },
        {
          title: 'If the cylinder catches fire',
          items: [
            'Cover it immediately with a heavy cloth soaked in water.',
            'Ask a specialist for help or call the fire brigade.',
          ],
        },
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
    pricing: {
      title: 'Price list',
      size: 'Cylinder',
      consigne: 'Deposit',
      recharge: 'Refill',
      note: 'The deposit covers the purchase of the cylinder (first acquisition); the refill is the cost of filling your cylinder. Indicative prices, subject to change.',
    },
    catalog: [
      {
        slug: 'bouteilles-domestiques', title: 'Domestic cylinders', icon: 'bottle', ph: 'ph-warm', image: '/images/products/bouteille-6kg.png',
        paragraphs: [
          'PleinGaz offers households a full range of gas cylinders: 6 kg for small homes, 12.5 kg for family cooking and 50 kg for the heaviest needs.',
          'Every cylinder meets strict safety checks and benefits from our refill network available throughout Cameroon.',
        ],
        features: ['6 kg, 12.5 kg and 50 kg formats', 'Fast refills at over 1,000 points of sale', 'Inspected and secured cylinders'],
        priceGrid: [
          { size: '6 kg', consigne: '13,000 FCFA', recharge: '3,120 FCFA' },
          { size: '12.5 kg', consigne: '18,500 FCFA', recharge: '6,500 FCFA' },
          { size: '50 kg', consigne: '50,000 FCFA', recharge: '26,000 FCFA' },
        ],
      },
      {
        slug: 'bouteille-6kg', title: '6 kg cylinder', icon: 'bottle', ph: 'ph-warm', image: '/images/products/bouteille-6kg.png',
        paragraphs: [
          'The 6 kg cylinder is the lightest format in the PleinGaz range: ideal for small homes, studios and occasional use, it is effortless to carry and store.',
          'Easy to handle, it offers comfortable autonomy for occasional cooking and refills in just a few minutes across our reseller network.',
        ],
        features: ['Light 6 kg format, easy to carry', 'Ideal for small homes and studios', 'Refill from 3,120 FCFA'],
        priceGrid: [{ size: '6 kg', consigne: '13,000 FCFA', recharge: '3,120 FCFA' }],
      },
      {
        slug: 'bouteille-12-5kg', title: '12.5 kg cylinder', icon: 'canister', ph: 'ph-warm', image: '/images/products/bouteille-12kg.png',
        paragraphs: [
          'The 12.5 kg cylinder is the most requested family size: perfect for active daily cooking, it offers plenty of autonomy while staying easy to handle.',
          'It is the favourite choice for families: a great balance between autonomy and footprint, with refills available throughout Cameroon.',
        ],
        features: ['12.5 kg family format', 'Great autonomy for daily use', 'Fast refills at over 1,000 points of sale'],
        priceGrid: [{ size: '12.5 kg', consigne: '18,500 FCFA', recharge: '6,500 FCFA' }],
      },
      {
        slug: 'bouteille-50kg', title: '50 kg cylinder', icon: 'factory', ph: 'ph-slate', image: '/images/products/bouteille-50kg.png',
        paragraphs: [
          'The 50 kg cylinder is the largest format in the PleinGaz range: designed for restaurants, hotels and high-consumption activities, it delivers long autonomy without frequent refills.',
          'Sturdy and inspected to strict safety standards, it keeps your professional operations running smoothly.',
        ],
        features: ['Large 50 kg format, long autonomy', 'Ideal for restaurants, hotels and industry', 'Refill from 26,000 FCFA'],
        priceGrid: [{ size: '50 kg', consigne: '50,000 FCFA', recharge: '26,000 FCFA' }],
      },
      {
        slug: 'rechauds-cuisinieres', title: 'Gas stove', icon: 'stove', ph: 'ph-crowd', image: '/images/products/plaque-gaz.png',
        paragraphs: [
          'Complete your setup with our gas stove: piezo ignition, tempered-glass top, easy to clean and built for daily use.',
          'Reliable equipment designed for the safety and comfort of the whole family.',
        ],
        features: ['Piezo ignition', 'Easy-clean tempered glass', '3-burner hob'],
      },
      {
        slug: 'tuyau-gaz', title: 'Gas hose', icon: 'wrench', ph: 'ph-warm', image: '/images/products/tuyau-gaz.png',
        paragraphs: [
          'The PleinGaz gas hose provides a reliable, safe connection between your cylinder and your appliance. Flexible and durable, it is designed for everyday household use.',
          'In the standard 6.3 mm × 13 mm size, it is easy to fit and withstands daily use over time.',
        ],
        features: ['6.3 mm × 13 mm size', 'Flexible and durable', 'Safe, long-lasting connection'],
      },
      {
        slug: 'support-rechaud', title: 'Stove trivet', icon: 'stove', ph: 'ph-slate', image: '/images/products/support-rechaud.png',
        paragraphs: [
          'The cast-iron stove trivet offers a stable, sturdy base to rest your pots and pans on the burner.',
          'Solid and durable, it withstands heat and heavy use for safe, comfortable cooking.',
        ],
        features: ['Solid, durable cast iron', 'Great stability for your pots', 'Heat-resistant'],
      },
      {
        slug: 'camping-gaz', title: 'Camping gas', icon: 'canister', ph: 'ph-warm', image: '/images/products/camping-butane.png',
        paragraphs: [
          'PleinGaz camping gas cartridges are built for cooking on the move: camping, hiking, picnics or a backup at home.',
          'Available in several sizes (230 g and 450 g), they power portable stoves and outdoor burners with high-performance butane gas.',
        ],
        features: ['230 g and 450 g sizes', 'Ideal for camping, hiking and outdoor cooking', 'High-performance butane gas'],
        gallery: [
          { src: '/images/products/camping-450g.png', label: '450 g' },
          { src: '/images/products/camping-230g.png', label: '230 g' },
        ],
      },
      {
        slug: 'detendeurs-accessoires', title: 'Regulators & accessories', icon: 'wrench', ph: 'ph-green', image: '/images/products/detendeur-28mbar.png',
        gallery: [
          { src: '/images/products/detendeur-30mbar.png', label: '30 mbar regulator' },
          { src: '/images/products/chalumeau.png', label: 'Torch' },
          { src: '/images/products/bruleur.png', label: 'Gas burner' },
        ],
        paragraphs: [
          'Safety regulators, torches, burners and approved parts: everything you need to connect, ignite and complete your installation with complete peace of mind.',
          'Certified accessories that comply with current standards (EN 16129).',
        ],
        features: ['Approved 28 & 30 mbar butane regulators', 'High-power torch and burner', 'Certified fittings and parts'],
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
