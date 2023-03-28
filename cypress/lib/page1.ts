export function getHeaderFail() {
  return cy.get('h2').should('contain.text', 'xxx');
}
