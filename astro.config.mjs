// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain for The MixHer nonprofit.
export default defineConfig({
  site: 'https://www.themixher.org',
  integrations: [sitemap()],
  redirects: {
    '/home': '/',
    '/community': '/female-dj-network',
    '/sponsors': '/sponsor-mixher',
    '/first-spin': '/first-spin-dj-bootcamp',
    '/ply': '/ply-party-series',
    '/the-set': '/the-set-networking-series',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
