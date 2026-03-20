import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
const homePage = require('../../pages/homePage.js');
import "../../../support/commands.js"; 

Given("I am logged in successfully", () => {
    cy.loginSession(Cypress.env('app_username'), Cypress.env('app_password'));
    //cy.visit('/inventory.html');
     cy.visit('/inventory.html', { failOnStatusCode: false });
    // cy.url({ timeout: 10000 }).should('include', '/inventory.html');
      // cy.url().should('include', '/inventory.html');
});

Then("I should see home page with Products", () => {
    homePage.getProductHeader().should('include.text', 'Products');
});

Then("I should see 6 products", () => {
     cy.visit('/inventory.html', { failOnStatusCode: false });
    homePage.getProductItems().should('have.length', 6);
});

Then("product names should be visible", () => {
    homePage.getProductNames().each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});

Then("product prices should be visible", () => {
    homePage.getProductPrices().each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});