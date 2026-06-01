import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hub.purposeconcepts.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => true
    })
  ]
});
