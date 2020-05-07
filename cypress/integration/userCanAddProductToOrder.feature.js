describe("User can add a product to their order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/products",
      response: "fixture:product_data.json",
    });

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/orders",
      response: { message: "A product has been added to your order" },
    });

    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/orders/1",
      response: {
        message: "The product has been added to your order",
        order_id: 1,
      },
    });
    cy.visit("http://localhost:3001");
  });

  it("user gets a confimation message when adding a product to order", () => {
    cy.get("button").contains("View order").should("not.exist");
    cy.get("#product-2").within(() => {
      cy.get("button").contains("Add to order").click();
      cy.get(".message").should(
        "contain",
        "A product has been added to your order"
      );
    });

    cy.get("#product-3").within(() => {
      cy.get("button").contains("View order").should("exist");
      cy.get("button").contains("Add to order").click();
      cy.get(".message").should(
        "contain",
        "A product has been added to your order"
      );
    });
  });
});
