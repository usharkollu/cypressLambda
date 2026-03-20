class LoginPage {
    getUserName = () => cy.get('#user-name');
    getUserPassword = () => cy.get('#password');
    getSubmitButton = () => cy.get('#login-button');
    // Error message
    getErrorMessage = () => cy.get('.error-button');
    
    }
    module.exports = new LoginPage();