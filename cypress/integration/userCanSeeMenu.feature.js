/// <reference types="Cypress" />

describe('user views menus', () => {
  beforeEach(() => {
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