describe("User can add a product to their order", () => {
  before(() => {
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
  });
  it("user gests a confirmation messsage when adding a a producut to order", () => {
    cy.visit("/");
    cy.get("#product-1").within(() => {
      cy.get("button").contains("Add to order").click();
    });
    cy.contains("A product has been added to your order");
  });
});
