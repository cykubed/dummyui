context('simple autocomplete to illustrate flaky tests', () => {

  it('should list items', () => {
    cy.intercept('items', ['one', 'two', 'three']).as('initialQuery');
    cy.intercept({pathname: 'items', query: {q: 'm'}}, (req) => {
      req.reply({
        body: ['mammal'],
        delay: 55});
    }).as('searchQuery');

    cy.visit('/');

    cy.get('input').type('m');

    // cy.wait('@searchQuery');

    cy.get('ul li').should('be.visible')
      .find('.inner').eq(0).contains( 'mammal');
  });
});
