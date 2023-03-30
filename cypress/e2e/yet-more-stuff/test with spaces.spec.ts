import {getHeaderFail} from '../../lib/page1';

context('test3', () => {

  beforeEach( ()=> {
    cy.visit('/');
  });

  it('should fail horribly', () => {
    getHeaderFail();
    cy.get('h2').should('contain.text', 'xxx');
  });
});
