// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain for The MixHer nonprofit.
export default defineConfig({
  site: 'https://www.themixher.org',
  integrations: [sitemap()],
  redirects: {
    '/home': '/',
    '/about': '/#what',
    '/community': '/#djs',
    '/female-dj-network': '/#djs',
    '/events': '/#events',
    '/ply': '/#events',
    '/ply-party-series': '/#events',
    '/the-set': '/#events',
    '/the-set-networking-series': '/#events',
    '/press': '/#contact',
    '/contact': '/#contact',
    '/sponsors': '/sponsor-mixher',
    '/first-spin': '/',
    '/first-spin-dj-bootcamp': '/',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
