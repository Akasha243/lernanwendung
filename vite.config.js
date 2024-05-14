import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For more detailed information: https://vitejs.dev/config/
export default defineConfig({

  // Base path is necessary for gh-pages to work
  base: '/lernanwendung/', 

  // Use these plugins
  plugins: [react()],

  // Enable the use of markdown assets for the informationText.md
  assetsInclude: ['**/*.md'],
})