import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../pages/loginPage.js');

Given("I open the sauce labs", () => {
    cy.visit('/');
});

When(/^I enter username "?([^"]*)"?$/, (user_name) => {
    loginPage.getUserName().clear().type(user_name);
});

When(/^I enter password "?([^"]*)"?$/, (pass_word) => {
    loginPage.getUserPassword().clear().type(pass_word);
});

When("I submit", () => {
    loginPage.getSubmitButton().click();
});

Then("I should see error as this user has been locked out", () => {
    loginPage.getErrorMessage().should('be.visible');
});

When("I login with environment credentials", () => {
    const user = Cypress.env('app_username');
    const pass = Cypress.env('app_password');

    if (!user || !pass) {
        throw new Error('Missing credentials: set app_username and app_password in your .env file');
    }

    loginPage.getUserName().clear().type(user);
    loginPage.getUserPassword().clear().type(pass);
    loginPage.getSubmitButton().click();
});

Then("I will be logged in", () => {
    cy.url().should('include', '/inventory.html');
});
    