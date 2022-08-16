class Login {
  verifySuccessfulLogin() {
    cy.get("#inventory_container").should("be.visible");
  }

  verifyErrorMessage(errorText) {
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", errorText);
  }
}

export default new Login();
