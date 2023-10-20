// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "src/pages/Blog/index.html"),
        juegos: resolve(__dirname, "src/pages/Juegos/index.html"),
        miembros: resolve(__dirname, "src/pages/Miembros/index.html"),
        quienes: resolve(__dirname, "src/pages/Quienes/index.html"),
      },
    },
  },
});
