import path from "path";
import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

const __dirname = path.resolve();

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://127.0.0.1:5173",
    setupNodeEvents(on) {
      on(
        "file:preprocessor",
        vitePreprocessor(path.resolve(__dirname, "./vite.config.ts"))
      );
    },
    excludeSpecPattern: "**/*.cy-helper.ts",
  },
});
