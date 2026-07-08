// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
                            site: 'https://rigrescue.net',
                            integrations: [sitemap()],
                            vite: {
                              plugins: [tailwindcss()]
                            }
});
