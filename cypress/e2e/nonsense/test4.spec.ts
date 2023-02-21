context('test4', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should pass (trivial)', () => {
    cy.get('h2').should('be.visible');
  });
});
