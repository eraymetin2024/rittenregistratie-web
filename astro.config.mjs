import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rittenregistratie.app',
  trailingSlash: 'ignore',
  integrations: [
    tailwind(),
    // /admin is het interne beheerpaneel: noindex én niet in de sitemap.
    sitemap({ filter: (page) => !page.includes('/admin') }),
  ],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
