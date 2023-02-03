context('test4', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should fail horribly again', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });
});
