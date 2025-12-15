import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default defineConfig({
    base: '/wbs-project_7/', // set github reponame for deploy
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        cssCodeSplit: false,
        cssMinify: true,
        minify: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@data': path.resolve(__dirname, './src/data'),
            '@context': path.resolve(__dirname, './src/context'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@elements': path.resolve(__dirname, './src/elements'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    server: {
        fs: {
            strict: false,
        },
    },
    plugins: [react(), tailwindcss()],
});
