context('test1', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should have the correct title', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
  });
});
