class Cart {
  addProductToCart(product) {
    cy.get('[data-test="add-to-cart-' + product.id + '"]')
      .should("be.visible")
      .click();
  }

  navigateToCartPage() {
    cy.get(".shopping_cart_link").should("be.visible").click();
    cy.url().should("include", "/cart.html");
  }
}

export default new Cart();
