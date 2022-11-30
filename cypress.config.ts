import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  viewportWidth: 1024,
  viewportHeight: 900,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: "cypress/e2e/**/*.spec.ts"
  },
});
