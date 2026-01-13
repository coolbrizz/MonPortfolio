import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInHead from "./vite-plugin-css-in-head";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInHead()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["lucide-react"],
        },
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  publicDir: "public",
});
