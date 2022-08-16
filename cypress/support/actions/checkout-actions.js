class Checkout {
  navigateToCheckout() {
    cy.get('[data-test="checkout"]').should("be.visible").click();
    cy.url().should("include", "/checkout-step-one.html");
  }

  fillAddressInfo(address) {
    cy.get('[data-test="firstName"]').clear().type(address.firstName);
    cy.get('[data-test="lastName"]').clear().type(address.lastName);
    cy.get('[data-test="postalCode"]').clear().type(address.postalCode);
  }

  continueToOverview() {
    cy.get('[data-test="continue"]').should("be.visible").click();
    cy.url().should("include", "/checkout-step-two.html");
  }

  verifyOverviewInfo(product) {
    cy.get(".cart_item")
      .should("be.visible")
      .and("contain", product.name)
      .and("contain", product.price);
  }

  finishOrder() {
    cy.get('[data-test="finish"]').should("be.visible").click();
    cy.url().should("include", "/checkout-complete.html");
  }

  verifyCompletedCheckout() {
    cy.get("#checkout_complete_container").should("be.visible");
    cy.get(".complete-header").should("be.visible").and("not.be.empty");
  }
}
export default new Checkout();
