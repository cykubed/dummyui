context('test 3 with a longer context', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should pass this, but it will fail', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });

  it('this will also fail horribly', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });

  it('as will this', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });
});
