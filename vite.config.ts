import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";
import * as path from "path";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wt/",
  plugins: [
    react(),visualizer(),
    VitePWA({
      manifest,
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,json}", "**/*.{svg,jpg,gif,webp}", "**/*.{ttf,woff,woff2}"],
        maximumFileSizeToCacheInBytes:3000000
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
