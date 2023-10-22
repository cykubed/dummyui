import {shouldFail, shouldPass} from '../helpers/helper';

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
    shouldPass();
  })

  it('this will fail inside a helper', () => {
    shouldFail();
  });

  it('this will also fail', () => {
    cy.get('h2').should('contain.text', 'xxx');
  });
  //
  // it('this will fail as well', () => {
  //   cy.get('h2').should('contain.text', 'xxx');
  // });

});
