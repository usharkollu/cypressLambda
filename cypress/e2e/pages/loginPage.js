class LoginPage {
    getUserName = () => cy.get('#user-name');
    getUserPassword = () => cy.get('#password');
    getSubmitButton = () => cy.get('#login-button');
    
    }
    module.exports = new LoginPage();