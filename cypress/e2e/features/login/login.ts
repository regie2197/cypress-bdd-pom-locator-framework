import { Given, When, Then, Before, BeforeAll } from "@badeball/cypress-cucumber-preprocessor";


BeforeAll(() => {
    cy.visit("https://parabank.parasoft.com/parabank/admin.htm");
    cy.get(':nth-child(1) > .button').click();
    });

Given('I visit parabank.parasoft.com', () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
});

Then('I should see a username input field', () => {
  cy.get('input[name="username"]').should('be.visible');
});

Then('I should see a password input field', () => {
  cy.get('input[name="password"]').should('be.visible');
});

When('I enter {string} into the username field', (username: string) => {
  cy.get('input[name="username"]').type(username);
});

When('I enter {string} into the password field', (password: string) => {
  cy.get('input[name="password"]').type(password);
});

When('I click on the {string} button', (buttonText: string) => {
  cy.contains('input[type="submit"], button', buttonText).click();
});

Then('I should be redirected to the account overview page', () => {
  cy.url().should('include', '/overview.htm');
  cy.contains('Accounts Overview').should('be.visible');
});

Then('I should see an error message saying {string}', (expectedMessage: string) => {
  cy.contains('The username and password could not be verified.')
    .should('be.visible')
    .and('contain.text', expectedMessage);
});

When('I click on the {string} link', (linkText: string) => {
  cy.contains('a', linkText).click();
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', '/index.htm');
  cy.get('input[name="username"]').should('be.visible');
  cy.get('input[name="password"]').should('be.visible');
});