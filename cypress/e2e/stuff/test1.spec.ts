context('test1', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should show next when button clicked', () => {
    cy.get('button').click();
    cy.get('#next-title').should('be.visible');
  });

  it('should have the correct title', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
  })

});
