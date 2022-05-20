import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import type { UserConfig } from 'vite'

export default {
  plugins: [react(), ssr()],
  build: { outDir: `${__dirname}/dist` }
} as UserConfig
