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
    cy.get("#product-2").within(() => {
      cy.get("button").contains("Add to order").click();
    });
    cy.get("#product-3").within(() => {
      cy.get("button").contains("Add to order").click();
    });
    cy.get("button").contains("View order").click();
  });

  it("user can pay for his order", () => {
    cy.get("button").contains("Confirm!").click();
    cy.get("#payment-form").should("exist");
    cy.wait(1000);
    cy.get('iframe[name^="__privateStripeFrame5"]').then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="cardnumber"]')
        .type("4242424242424242", { delay: 50 });
    });
  });
});
