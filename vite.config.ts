import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/wt/",
  plugins: [react(),visualizer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
