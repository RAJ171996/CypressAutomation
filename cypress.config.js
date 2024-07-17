const { defineConfig } = require("cypress");

// describe the notification of each failed spec
// you want to notify about
const notificationConfiguration = {
  // if this spec fails, post a message to the channel "e2e-tests"
  'spec-a.cy.js': '#e2e-tests',
  // if this spec fails, post a message and notify Gleb
  //'spec-b.cy.js': '#e2e-tests @gleb',
  // if this spec fails, notify several users
  //'spec-c.cy.js': '#e2e-tests @gleb @john @mary',
}

// describe when to notify. We probably want to notify
// only when running on CI and recording the test runs
// and using certain run tags
const notifyWhen = {
  whenRecordingOnDashboard: true,
  whenRecordingDashboardTag: ['notify'],
}

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      // https://github.com/bahmutov/cypress-slack-notify
      require('cypress-slack-notify')(on, notificationConfiguration, notifyWhen)
    },
  },
});
