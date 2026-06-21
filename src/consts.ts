// Centrale site-configuratie (merk, navigatie, prijzen, SEO-defaults).

export const SITE = {
  naam: 'Rittenregistratie.app',
  domein: 'https://rittenregistratie.app',
  slogan: 'Automatische rittenregistratie, Belastingdienst-proof',
  beschrijving:
    'Leg je zakelijke kilometers automatisch vast — Belastingdienst-proof, ' +
    'batterijvriendelijk en met PDF/Excel-export. Gratis beginnen, Premium voor automatisering.',
  email: 'hello@raysel.nl',
  bedrijf: 'Raysel Digital Solutions',
  kvk: '42063011',
  btw: 'NL005467477B07',
  adres: 'Sloestraat 15, 4456 AN Lewedorp',
  // Google Play is live; App Store volgt zodra de EU-uitrol (DSA) rond is.
  playUrl: 'https://play.google.com/store/apps/details?id=app.rittenregistratie',
  appStoreUrl: '#',
};

export const NAV = [
  { label: 'Functies', href: '/functies' },
  { label: 'Hoe het werkt', href: '/hoe-het-werkt' },
  { label: 'Voor ZZP', href: '/voor-zzp' },
  { label: 'Beacon', href: '/beacon' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'FAQ', href: '/faq' },
];

// SEO-pillarpagina's (voor interne links in footer + home).
export const TOPICS = [
  { label: 'Gratis rittenregistratie app', href: '/gratis-rittenregistratie-app' },
  { label: 'Kilometerregistratie app', href: '/kilometerregistratie-app' },
  { label: 'Rittenregistratie Belastingdienst', href: '/rittenregistratie-belastingdienst' },
  { label: 'Automatische rittenregistratie', href: '/automatische-rittenregistratie' },
  { label: 'Rittenregistratie software', href: '/rittenregistratie-software' },
  { label: 'Rittenregistratie Excel', href: '/rittenregistratie-excel' },
  { label: 'Rittenregistratie kastje', href: '/rittenregistratie-kastje' },
  { label: 'Kilometers bijhouden', href: '/kilometers-bijhouden' },
  { label: 'Kilometervergoeding 2026', href: '/kilometervergoeding' },
  { label: 'Beste rittenregistratie app', href: '/beste-rittenregistratie-app' },
];

export const PRIJZEN = {
  maand: '€3,99',
  jaar: '€29,99',
  beacon: '€17,95',
};
