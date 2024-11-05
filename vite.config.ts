import { defineConfig } from 'vite'

export default defineConfig({
    // Overriding build options
    // https://vitejs.dev/config/build-options.html
    build: {
        // Override rollup build options
        // https://rollupjs.org/configuration-options/
        rollupOptions: {
            input: {
                // https://rollupjs.org/guide/en/#input
                main: 'index.js',
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
})