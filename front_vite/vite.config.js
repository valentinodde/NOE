import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  // En local, VITE_API_URL=/api : le front et l'API partagent l'origine du
  // serveur Vite, ce qui permet au cookie de session de circuler.
  server: {
    proxy: {
      '/api': {
        target: process.env.API_LOCALE || 'http://127.0.0.1:5000',
        rewrite: chemin => chemin.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    allowedHosts: [
      'noe.hydros-consulting.com',     // Domaine personnalisé
      'noe-front.osc-fr1.scalingo.io', // Ton domaine Scalingo
      '.scalingo.io'                  // Autorise aussi tous les sous-domaines scalingo
    ],
    host: '0.0.0.0',                  // Obligatoire pour Scalingo
    port: process.env.PORT || 4173,   // Utilise le port de Scalingo
    // En-têtes de sécurité du site servi en production (HTTPS imposé, pas
    // d'affichage dans un cadre, pas de devinette du type des fichiers)
    headers: {
      'Strict-Transport-Security': 'max-age=31536000',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  }
})
