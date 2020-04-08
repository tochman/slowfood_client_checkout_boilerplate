describe("User can add a product to his/her order", () => {
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
        response: "fixture:post_response.json",
      });
      cy.route({
        method: "PUT",
        url: "http://localhost:3000/api/orders/1",
        response: "fixture:put_response.json",
      });
      cy.visit("http://localhost:3001");
    });

  it("user get a confirmation message when adding product to order", () => {
    cy.get("#product-2").within(() => {
      cy.get("button").contains("Add to order").click();
      cy.get(".message").should(
        "contain",
        "The product has been added to your order"
      );
    });
    cy.get("#product-3").within(() => {
      cy.get("button").contains("Add to order").click();
      cy.get(".message").should(
        "contain",
        "The product has been added to your order"
      );
    });
  });

  it("user can add multiple products to order and view its content", () => {
    cy.get("button").contains("View order").should("not.exist"); // Add this line
    cy.get("#product-2").within(() => {
      cy.get("button").contains("Add to order").click();
      cy.get(".message").should(
        "contain",
        "The product has been added to your order"
      );
    });

    cy.get("button").contains("View order").should("exist"); // Add this line
    cy.get("#product-3").within(() => {
      cy.get("button").contains("Add to order").click();
      cy.get(".message").should(
        "contain",
        "The product has been added to your order"
      );
    });

    cy.get("button").contains("View order").click();
    cy.get("#order-details").within(() => {
      cy.get("li").should("have.length", 2);
    });
    cy.get("button").contains("View order").click();
    cy.get("#order-details").should("not.exist");
  });
});
