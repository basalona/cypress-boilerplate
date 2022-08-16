import checkoutActions from "../support/actions/checkout-actions";
import cartActions from "../support/actions/cart-actions";

describe("Checkout", () => {
  const env = Cypress.env("dataEnv");

  beforeEach(function () {
    // Load appropriate test data to be used in the tests
    cy.fixture(env + "/users").as("users");
    cy.fixture(env + "/products").as("products");
    cy.fixture(env + "/addresses").as("addresses");

    // Visit the page
    cy.visit("/");
  });

  it("Standard user can complete the checkout", function () {
    const credentials = this.users.standard;
    const product = this.products.product01;
    const address = this.addresses.address01;

    cy.login(credentials);

    cartActions.addProductToCart(product);
    cartActions.navigateToCartPage();
    checkoutActions.navigateToCheckout();
    checkoutActions.fillAddressInfo(address);
    checkoutActions.continueToOverview();
    checkoutActions.verifyOverviewInfo(product);
    checkoutActions.finishOrder();
    checkoutActions.verifyCompletedCheckout();
  });
});
