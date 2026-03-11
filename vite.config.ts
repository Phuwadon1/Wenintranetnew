// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/',
//   server: {
//     host: true,
//     port: 8083,
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:8082',
//         changeOrigin: true,
//       },
//       '/uploads': {
//         target: 'http://127.0.0.1:8082',
//         changeOrigin: true,
//       }
//     }
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        //target: 'http://localhost:5065',
        target: 'http://192.168.42.7/WebintranetAPI/',
        changeOrigin: true,
        secure: false
      },
      '/uploads': {
        //target: 'http://localhost:5065',
        target: 'http://192.168.42.7/WebintranetAPI/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
