import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(( { command, mode } ) => {
  const env = loadEnv(mode, process.cwd(), "d")

  const defineConfig : any = {
    VITE_APP_TITLE: JSON.stringify("The Amazing Title"),
    VITE_RandomNumber: JSON.stringify(Math.random()),
    
  };
  defineConfig["process.env.Config_RandomNumber"] = JSON.stringify(Math.random());

  // Object.assign(defineConfig, env)

  return {
    plugins: [
      vue(),
    ],
    define: defineConfig,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
