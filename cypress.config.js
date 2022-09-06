const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3vqw4r",
  env: {
    //baseUrl: 'https://jira.trungk18.com/',
    testUrl: 'https://jira.trungk18.com/project/board',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/tests/*.*js',
    defaultCommandTimeout: 10000,
    baseUrl: 'https://jira.trungk18.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: 'mochawesome',
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 0
    }

  },
});
