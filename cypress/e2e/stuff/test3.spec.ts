context('test 3 with a longer context', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should now pass this', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
  });

  //
  // it('as will this', () => {
  //   cy.get('h2').should('contain.text', 'xxx');
  // });
});
