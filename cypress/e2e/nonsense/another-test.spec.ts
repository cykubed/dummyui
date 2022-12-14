context('another test context', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('this test will pass - jolly good', () => {
    cy.get('h2').should('not.contain.text', 'xxx');
  });
});
