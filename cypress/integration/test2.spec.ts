context('this is test2', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('this should stil the correct title', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
  })

  it('this will also fail', () => {
    cy.get('h2').should('contain.text', 'yyyy');
  });
});
