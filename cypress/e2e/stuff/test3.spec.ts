context('test3', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should fail horribly', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
  });

});
