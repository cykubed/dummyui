context('test4', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should pass (trivial)', () => {
    cy.get('h1').should('be.visible');
  });
});
