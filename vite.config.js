import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/*export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.HF_API_TOKEN': JSON.stringify(env.HF_API_TOKEN)
    },
    plugins: [react()],
  }
})*/

export default defineConfig(
    {
      plugins: [react()],
      envPrefix: 'VITE_',
    }
)

