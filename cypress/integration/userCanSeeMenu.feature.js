/// <reference types="Cypress" />

describe('user views menus', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method:'POST', url: 'http://localhost:3000/api/products', response: 'fixture: ProductData.json'
    });
    cy.visit("/");
  })
  it('successfully', () => {
    cy.get('#index').within(() => {
      cy.contains('Spaghetti and Meatballs')
      cy.contains('Salad')
      cy.contains('Ice Cream')
    })
  })

  it('unsuccessfully', () => {
      cy.get('#index').should('not.exist')
  })

})