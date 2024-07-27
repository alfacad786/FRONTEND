import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
// export default defineConfig({



//   build: {
//     outDir: 'dist',
//   },

//   server:{
//     proxy:{
//       'api':'http://localhost:3000',
//     }
//   },
//   plugins: [react()],
//   // assetsInclude: ['**/*.jsx', '**/*.tsx'],
// })

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
})
