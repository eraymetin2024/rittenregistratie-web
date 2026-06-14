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
  // Vul deze in zodra de stores live zijn:
  playUrl: '#',
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

export const PRIJZEN = {
  maand: '€3,99',
  jaar: '€29,99',
  beacon: '€17,95',
};
