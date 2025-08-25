import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        server: {
            port: 3000,
            open: '/index.html',
            proxy: {
                '/movies': {
                    target: env.VITE_API_BASE_URL,
                    changeOrigin: true,
                }
            }
        }
    };
});