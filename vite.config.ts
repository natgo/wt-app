import * as path from "path";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wt/",
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,jpg,gif,webp}", "**/*.{ttf,woff,woff2}"],
        maximumFileSizeToCacheInBytes: 5000000,
      },
    }),
    visualizer({ gzipSize: true, brotliSize: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
