import { resolve } from 'path';
import { defineConfig } from 'vite'
import vitePugPlugin from 'vite-plugin-pug-transformer'
import viteImagemin from 'vite-plugin-imagemin'
export default defineConfig({
    base: "./",
    root: './src/client',
    publicDir: './public',
    build:{
        outDir:"./build",
        sourcemap:true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "./src/client/index.html/"),
                about: resolve(__dirname, "./src/client/about.html/"),
                works: resolve(__dirname, "./src/client/works.html/"),
                progress: resolve(__dirname, "./src/client/skillset.html/"),
                services: resolve(__dirname, "./src/client/services.html/")
            }
        }
    },
    plugins: [
        vitePugPlugin(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        }),
    ],
})
