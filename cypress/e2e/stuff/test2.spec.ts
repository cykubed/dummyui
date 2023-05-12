context('this is test2', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it.skip('skipped test', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
  });

  it('non-skipped test that passes', () => {
    cy.intercept({pathname: '/api/fish'}, {}).as('mock1')
    cy.get('h1').should('contain.text', 'Dummy UI');
  })
  //
  // it('sleep 10', ()=> {
  //   cy.wait(1000);
  // });
  //
  // it('sleep 65', ()=> {
  //   cy.wait(65000);
  // });

  // it('another test that passes but with a delay', () => {
  //   cy.intercept({pathname: '/api/fish'}, {}).as('mock2')
  //   cy.get('h1').should('contain.text', 'Dummy UI');
  //   cy.wait(10000);
  //   cy.get('h1').should('contain.text', 'Dummy UI');
  // })

});
