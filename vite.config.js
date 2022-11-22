import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";

export default defineConfig({
    root:"src/client",
    "publicDir": "public",
    plugins: [vitePugPlugin()]
})