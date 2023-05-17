export function shouldPass() {
  cy.get('h1').should('contain.text', 'Dummy UI');
}

export function shouldFail() {
  cy.get('h1').should('contain.text', 'Fish');
}
