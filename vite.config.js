import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
    server: {
        // respond to all network requests (same as '0.0.0.0')
        host: true,
        // we need a strict port to match on PHP side
        strictPort: true,
        port: 5173,
        hmr: {
            // TODO: Is this the best way to achieve that? 🤔
            // Force the Vite client to connect via SSL
            // This will also force a "https://" URL in the hot file
            protocol: 'wss',
            // The host where the Vite dev server can be accessed
            // This will also force this host to be written to the hot file
            host: `${process.env.DDEV_HOSTNAME}`,
        }
    },
    plugins: [
        nodeResolve({
                extensions: ['.js','.vue', '.css', '.pcss', '.scss']
            }
        ),
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    optimizeDeps: {
        include: [
            '@inertiajs/inertia',
            '@inertiajs/inertia-vue3',
        ]
    }
});
