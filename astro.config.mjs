import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rittenregistratie.app',
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
