// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzmpMoLef_0A7J4NTyNasTIyo9UlUBpqSWOg1abmLIU72HxEQhwExflAUGAkRL86oox/exec';

// ─────────────────────────────────────────────
// DONNÉES COMPLÈTES DES BRANCHES
// ─────────────────────────────────────────────
const BRANCHES = [
  {
    id: 'concert',
    name: 'Branche Concert',
    tagline: 'La scène est à toi.',
    desc: 'Organisation d\'événements musicaux, concerts live et showcases sur le campus IESEG.',
    color: '#a39171',
    collab: null,
    photo: 'card-concert.jpeg',
    photoPos: 'center 30%',

    profileExample: "Ex. : « Je n'ai jamais chanté devant un public mais j'adore la musique » ou « Je joue de la guitare dans un groupe depuis 5 ans »",
    en: {
      name: "Concert Branch",
      short: "Concert",
      tagline: "The stage is yours.",
      desc: "Music events, live concerts and showcases on the IESEG campus.",
      description: `The Concert Branch is the beating heart of the BDA. We put on live concerts, showcases and music nights that bring the whole IESEG community together around music. Whether you're a musician, a singer, a guitarist or just a live-music lover, there's a place for you here.\n\nEvery year, the branch produces several major events on campus and around Lille, giving student artists the chance to perform in front of a real audience.`,
      activities: ["Live concerts on campus", "Coaching & rehearsals", "Showcases & open mics", "A community of musicians"],
      profileExample: "e.g. “I’ve never sung in front of an audience but I love music” or “I’ve been playing guitar in a band for 5 years”",
    },

    description: `La Branche Concert est le cœur battant du BDA. On organise des concerts live, des showcases et des soirées musicales qui rassemblent toute la communauté IESEG autour de la musique. Que tu sois musicien, chanteur, guitariste ou simple passionné de live music, tu as ta place ici.\n\nChaque année, la branche produit plusieurs événements d'envergure sur le campus et dans la métropole lilloise, en donnant à des artistes étudiants la chance de monter sur scène devant un vrai public.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`, label: 'Concerts live sur campus' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`, label: 'Coaching & répétitions' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`, label: 'Showcases & open mics' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`, label: 'Communauté de musiciens' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
  },

  {
    id: 'bpm',
    name: 'Branche BPM',
    tagline: 'Le son entre tes mains.',
    desc: 'DJ sets, mix et production musicale. Pour tous les passionnés de la scène électronique.',
    color: '#306b34',
    collab: null,
    photo: 'card-bpm.jpeg',
    photoPos: 'center 25%',

    profileExample: "Ex. : « Je n'ai jamais touché à des platines mais j'adore la musique électro » ou « Je mixe sur Rekordbox depuis 2 ans »",
    en: {
      name: "BPM Branch",
      short: "BPM",
      tagline: "The sound is in your hands.",
      desc: "DJ sets, mixing and music production. For everyone who loves the electronic scene.",
      description: `The BPM (Beats Per Minute) Branch brings together fans of electronic music, DJ culture and sound production. Want to learn to mix, discover the basics of production or just soak up the vibe of IESEG's electronic nights? This is the place.\n\nThe branch runs training sessions on Pioneer decks and group listening sessions, and showcases the school's DJ talent at the big BDA parties.`,
      activities: ["Intro to DJ decks", "Music production", "DJ sets at BDA parties", "Mixing & discovery sessions"],
      profileExample: "e.g. “I’ve never touched DJ decks but I love electronic music” or “I’ve been mixing on Rekordbox for 2 years”",
    },

    description: `La Branche BPM (Beats Per Minute) réunit les amateurs de musique électronique, de DJ culture et de production sonore. Tu veux apprendre à mixer, découvrir les bases de la production ou simplement être dans l'ambiance des soirées électroniques de l'IESEG ? C'est ici.\n\nLa branche organise des formations aux platines Pioneer, des sessions d'écoute collective et met en lumière les talents DJ de l'école lors des grandes soirées BDA.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg>`, label: 'Initiation aux platines DJ' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, label: 'Production musicale' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`, label: 'DJ sets lors des soirées BDA' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`, label: 'Sessions de mix & découverte' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg>`
  },

  {
    id: 'arts-plastiques',
    name: 'Branche Arts Plastiques',
    tagline: 'Donne vie à tes idées.',
    desc: 'Illustration, peinture et arts visuels. Ateliers créatifs et expositions tout au long de l\'année.',
    color: '#a39171',
    collab: null,
    photo: 'card-dessin.jpeg',
    photoPos: 'center 20%',

    profileExample: "Ex. : « Je dessine juste dans les marges de mes cahiers mais j'ai envie de progresser » ou « Je fais de l'aquarelle et de l'illustration depuis le lycée »",
    en: {
      name: "Visual Arts Branch",
      short: "Visual Arts",
      tagline: "Bring your ideas to life.",
      desc: "Illustration, painting and visual arts. Creative workshops and exhibitions all year round.",
      description: `The Visual Arts Branch is the BDA's space for visual creation. Illustration, painting, watercolour, digital drawing, street art — every form of visual expression has its place. Whatever your level, the branch welcomes beginners and experienced artists alike.\n\nThroughout the year, we run themed workshops, live-painting sessions at BDA events and an end-of-year exhibition showcasing our members' work.`,
      activities: ["Drawing & painting workshops", "Annual exhibition", "Live painting & events", "Digital drawing & illustration"],
      profileExample: "e.g. “I only doodle in my notebooks but I’d love to get better” or “I’ve been doing watercolour and illustration since high school”",
    },

    description: `La Branche Arts Plastiques est l'espace de création visuelle du BDA. Illustration, peinture, aquarelle, dessin numérique, street art — toutes les formes d'expression plastique y ont leur place. Peu importe ton niveau, la branche accueille aussi bien les débutants que les artistes confirmés.\n\nSur l'année, on organise des ateliers thématiques, des sessions live painting lors des événements BDA et une exposition de fin d'année qui met en valeur les œuvres des membres.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`, label: 'Ateliers dessin & peinture' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`, label: 'Exposition annuelle' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01M7 20v-4"/><path d="M12 20V10"/><path d="M17 20V4"/><path d="M22 20v-8"/></svg>`, label: 'Live painting & events' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`, label: 'Dessin numérique & illustration' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`
  },

  {
    id: 'cinema',
    name: 'Branche Cinéma',
    tagline: 'Raconte. Filme. Émeut.',
    desc: 'Tournage, montage, réalisation de courts-métrages et ciné-clubs.',
    color: '#306b34',
    collab: null,
    photo: 'hero.jpeg',
    photoPos: 'center 30%',

    profileExample: "Ex. : « Je n'ai jamais tenu une caméra mais je suis fan de cinéma » ou « J'ai déjà réalisé deux courts-métrages et je monte sur Premiere Pro »",
    en: {
      name: "Cinema Branch",
      short: "Cinema",
      tagline: "Tell. Film. Move.",
      desc: "Shooting, editing, directing short films, and film clubs.",
      description: `The BDA's Cinema Branch is a creative lab dedicated to the seventh art. Screenwriting, shooting, video editing, directing actors — we cover the whole filmmaking process. Whether you want to make your first short film or simply share your love of cinema, this branch is for you.\n\nWe host regular film-club screenings, technical workshops and an end-of-year short film festival where members' films are screened for the whole IESEG community.`,
      activities: ["Shooting short films", "Editing & post-production", "Film clubs & screenings", "Screenwriting workshops"],
      profileExample: "e.g. “I’ve never held a camera but I’m a huge film fan” or “I’ve already made two short films and I edit on Premiere Pro”",
    },

    description: `La Branche Cinéma du BDA est un laboratoire créatif dédié au 7e art. Écriture de scénario, tournage, montage vidéo, direction d'acteurs — on couvre toute la chaîne de création cinématographique. Que tu veuilles réaliser ton premier court-métrage ou simplement partager ta passion du cinéma, la branche est faite pour toi.\n\nOn organise des ciné-clubs réguliers, des ateliers techniques et un festival de courts-métrages en fin d'année où les productions des membres sont projetées devant toute la communauté IESEG.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`, label: 'Tournage de courts-métrages' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`, label: 'Montage & post-production' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`, label: 'Ciné-clubs & projections' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`, label: 'Ateliers scénario & écriture' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`
  },

  {
    id: 'rap',
    name: 'Branche Rap',
    tagline: 'Pose ton flow.',
    desc: 'Écriture, freestyle, enregistrement et scène. Pour tous les passionnés de rap et de culture hip-hop.',
    color: '#a39171',
    collab: null,
    photo: 'card-rap.jpg',
    photoPos: 'center center',
    heroFit: 'contain',      // bandeau de la page branche : image entière, sans recadrage
    heroPos: 'center 12%',

    profileExample: "Ex. : « Je n'ai jamais rappé mais j'écris des textes pour moi » ou « Je fais du freestyle et j'ai déjà sorti quelques sons »",
    en: {
      name: "Rap Branch",
      short: "Rap",
      tagline: "Drop your flow.",
      desc: "Writing, freestyle, recording and live shows. For everyone who loves rap and hip-hop culture.",
      description: `The Rap Branch is the BDA's newest branch, dedicated to rap and hip-hop culture. Whether you've been writing lyrics for years, love to freestyle or just want to give it a try, there's a place for you here.\n\nWe run writing workshops, freestyle sessions, track recordings and open mics to get IESEG's rappers on stage at BDA events.`,
      activities: ["Writing workshops", "Freestyle sessions", "Recording tracks", "Open mics & BDA stages"],
      profileExample: "e.g. “I’ve never rapped but I write lyrics for myself” or “I freestyle and I’ve already released a few tracks”",
    },

    description: `La Branche Rap est la nouvelle branche du BDA, dédiée au rap et à la culture hip-hop. Que tu écrives tes textes depuis des années, que tu kiffes le freestyle ou que tu veuilles juste découvrir, tu as ta place ici.\n\nOn organise des ateliers d'écriture, des sessions freestyle, des enregistrements de sons et des open mics pour faire monter les rappeurs de l'IESEG sur scène lors des événements BDA.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`, label: 'Ateliers d\'écriture' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`, label: 'Sessions freestyle' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, label: 'Enregistrement de sons' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`, label: 'Open mics & scènes BDA' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>`
  }
];
