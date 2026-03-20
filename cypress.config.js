const { defineConfig } = require("cypress");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;




module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/reports/mochareports/assets",


    async setupNodeEvents(on, config) {
      const environmentName = config.environmentName || 'prod'
      const environmentFilename = `./${environmentName}.env.json`
      console.log(`Loading environment variables from ${environmentFilename}`);
      const settings = require(environmentFilename);
      if (settings.base_url) {
        config.baseUrl = settings.base_url;
        //get all env variables and add them to config.env

      }

      //get all env variables and add them to config.env
      config.env = {
        ...config.env,
        ...settings,
      };

      // Values coming from pipelines
      if (process.env.CYPRESS_APP_USERNAME) {
        config.env.app_username = process.env.CYPRESS_APP_USERNAME;
      }
      if (process.env.CYPRESS_APP_PASSWORD) {
        config.env.app_password = process.env.CYPRESS_APP_PASSWORD;
      }
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      // allureWriter(on, config);
      return config;
    }

  },
});
