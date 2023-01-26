
/* eslint-disable no-undef, testing-library/await-async-utils */
describe('service is available', function() {
    it('should be available on localhost:3000', function() {
      cy.visit("baseUrl");
    });
  }); 