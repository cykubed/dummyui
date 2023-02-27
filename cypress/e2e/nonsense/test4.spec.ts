context('test4', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should pass (trivial)', () => {
    cy.get('h3').should('be.visible');
  });
});

