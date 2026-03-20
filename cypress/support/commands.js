
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const loginPage = require('../e2e/pages/loginPage.js');
Cypress.Commands.add('loginSession', (username, password) => {
  // cy.session caches the cookies/localStorage/sessionStorage
  cy.session([username, password], () => {
    cy.visit('/');
    
    // Perform login steps
    loginPage.getUserName().clear().type(username);
    loginPage.getUserPassword().clear().type(password);
    loginPage.getSubmitButton().click();
    
    // Validate we are actually logged in before caching
    cy.url().should('include', '/inventory.html');

  }, {
    cacheAcrossSpecs: true // Keeps you logged in even if you change feature files
  });
});