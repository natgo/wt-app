import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 960,
  viewportWidth: 1536,
  defaultCommandTimeout: 7000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
});
