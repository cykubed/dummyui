context('test2 blah blah', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should fail (trivial)', () => {
    cy.get('h6').should('be.visible');
  });
});
