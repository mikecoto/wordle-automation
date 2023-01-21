const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1800,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
  },
});
