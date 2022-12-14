context('test 3 with a longer context', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should pass this, but it will fail', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });
});
