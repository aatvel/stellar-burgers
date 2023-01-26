describe("service is available", function () {
  const modal = '[class^="modal_container"]'
  beforeEach(() => {
    cy.viewport(1450, 1100);
    cy.visit("");
    cy.contains("Соберите бургер");
  });

  it("modal test", () => {
    cy.wait(1000);
    cy.get("p").contains("Краторная булка N-200i").click();
    cy.get(modal).should("exist");
    cy.get("p").contains("Краторная булка N-200i").should("exist");
    cy.get("body").type("{esc}");
    cy.get(modal).should("not.exist");
  });
});
