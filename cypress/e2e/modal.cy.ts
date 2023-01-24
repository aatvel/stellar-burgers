describe("service is available", function () {
  beforeEach(() => {
    cy.viewport(1450, 1100);
    cy.visit("http://localhost:3000");
    cy.contains("Соберите бургер");
  });

  it("modal test", () => {
    cy.wait(1000);
    cy.get("p").contains("Краторная булка N-200i").click();
    cy.get('[class^="modal_container"]').should("exist");
    cy.get("p").contains("Краторная булка N-200i").should("exist");
    cy.get("body").type("{esc}");
    cy.get('[class^="modal_container"]').should("not.exist");
  });
});
