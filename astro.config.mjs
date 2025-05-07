// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    // Añadir base para GitHub Pages - se asume que el repositorio es "en-mancha-landing"
    base: '/en-mancha-landing/',
    // Configuración para optimización de imágenes
    image: {
        // Habilitar el servicio de optimización de imágenes
        service: { 
            entrypoint: 'astro/assets/services/sharp' 
        },
    },
});
