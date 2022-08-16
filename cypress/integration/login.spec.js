import loginActions from "../support/actions/login-actions";

describe("Login", () => {
  const env = Cypress.env("dataEnv");

  beforeEach(function () {
    // Load appropriate test data to be used in the tests
    cy.fixture(env + "/users").as("users");
    cy.fixture(env + "/errors").as("errors");

    // Visit the page
    cy.visit("");
  });

  it("Standard user can successfully login with valid credentials", function () {
    const credentials = this.users.standard;

    cy.login(credentials);
    loginActions.verifySuccessfulLogin();
  });

  it("Locked-out user cannot login with valid credentials", function () {
    const credentials = this.users.locked;
    const error = this.errors.login.locked;

    cy.login(credentials);
    loginActions.verifyErrorMessage(error);
  });

  it("Error message is displayed when logging in with invalid credentials", function () {
    const credentials = {
      username: "invalidUser",
      password: "invalidPass",
    };
    const error = this.errors.login.invalid;

    cy.login(credentials);
    loginActions.verifyErrorMessage(error);
  });
});
