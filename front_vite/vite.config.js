import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  preview: {
    allowedHosts: [
      'noe.hydros-consulting.com',     // Domaine personnalisé
      'noe-front.osc-fr1.scalingo.io', // Ton domaine Scalingo
      '.scalingo.io'                  // Autorise aussi tous les sous-domaines scalingo
    ],
    host: '0.0.0.0',                  // Obligatoire pour Scalingo
    port: process.env.PORT || 4173    // Utilise le port de Scalingo
  }
})
