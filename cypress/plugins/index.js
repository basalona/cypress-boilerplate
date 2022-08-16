/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// Environments config
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    ".",
    "cypress/config/env",
    `${file}.json`
  );
  return fs.readJson(pathToConfigFile);
}

// plugins file

module.exports = (on, config) => {
  const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

  if (config.reporter === 'cypress-mochawesome-reporter') {
    on('before:run', async (details) => {
      console.log('override before:run');
      await beforeRunHook(details);
    });

    on('after:run', async () => {
      console.log('override after:run');
      await afterRunHook();
    });
  }
  // accept a configFile value or use qa by default
  const file = config.env.configFile || "qa";
  return getConfigurationByFile(file);
};
