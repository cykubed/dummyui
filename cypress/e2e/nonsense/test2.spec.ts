context('test2 blah blah', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should now pass', () => {
    cy.get('h1').should('be.visible');
  });
});
