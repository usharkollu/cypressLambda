import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../pages/loginPage.js');

   //var loginPage = new LoginPage();
    Given("I open the sauce labs", () => {
        cy.visit("/");
    })

    When(/^I enter username (.*?)$/, (user_name)=>{
        loginPage.getUserName().type(user_name);
    })
    
    When(/^I enter password (.*?)$/, (pass_word)=>{
        loginPage.getUserPassword().type(pass_word);
    })

    When("I submit", ()=>{
        loginPage.getSubmitButton().click();
    })

    Then("I will be logged in", ()=>{
       cy.log("hello");
    })
    