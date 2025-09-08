import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        server: {
            port: 3000,
            open: '/src/pages/home/home.html',
            proxy: {
                '/movies': {
                    target: env.VITE_API_BACKEND_URL,
                    changeOrigin: true,
                }
            }
        }
    };
});