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

Cypress.Commands.add("login", (credentials) => {
  cy.get('[data-test="username"]').clear().type(credentials.username);
  cy.get('[data-test="password"]').clear().type(credentials.password);
  cy.get('[data-test="login-button"]').should("be.visible").click();
});
