// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://fasterchat.ai',
  integrations: [
    react(),
    starlight({
      title: 'Faster Chat',
      description: 'Documentation for Faster Chat - Open, Offline-First LLM Interface',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/1337hero/faster-chat' },
      ],
      sidebar: [
        {
          label: 'Documentation',
          autogenerate: { directory: 'docs' },
        },
      ],
      customCss: [
        './src/styles/starlight.css',
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});