import {shouldFail, shouldPass} from '../helpers/helper';

context('test1', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should show next when button clicked', () => {
    cy.get('button#show').click();
    cy.get('#next-title').should('be.visible');
  });

  it('should have the correct title', () => {
    cy.get('h1').should('contain.text', 'Dummy UI');
    // shouldFail();
  })


  //
  // it('this will fail inside a helper', () => {
  //   shouldFail();
  // });

  // it('flakey test', () => {
  //   cy.intercept('**/api/stuff', (req) => {
  //     if (Cypress.currentRetry || Cypress.browser.name === 'electron') {
  //       req.reply({num: 11});
  //     } else {
  //       // just fail on Firefox
  //       req.reply({num: 10});
  //     }
  //   }).as('fetch');
  //   cy.get('#fetch-button').click();
  //   cy.wait('@fetch');
  //   cy.get('h4').should('contain.text', 11);
  //
  // });

  // it('this will also fail', () => {
  //   cy.get('h2').should('contain.text', 'xxx');
  // });
  //
  // it('this will fail as well', () => {
  //   cy.get('h2').should('contain.text', 'xxx');
  // });

  it.skip('this will be skipped', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });

});
