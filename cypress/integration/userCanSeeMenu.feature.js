describe('user views menus', () => {
  before(function() {
    cy.server();
    cy.route({
      method:'POST',
      url: 'http://localhost:3000/api/products', 
      response: 'fixture:productdata.json'
    }) 
    cy.visit("http://localhost:3001")   
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