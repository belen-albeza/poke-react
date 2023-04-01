import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    excludeSpecPattern: "**/*.cy-helper.ts",
  },
});
