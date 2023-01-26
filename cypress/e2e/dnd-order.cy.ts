describe("DnD and make order", () => {
  const modal = '[class^="modal_container"]'
  beforeEach(() => {
    cy.viewport(1450, 1100);
    cy.visit("baseUrl");
    cy.contains("Соберите бургер");
  });

  it("DnD", () => {
    const dnd = new DataTransfer();
    cy.get("p")
      .contains("Краторная булка N-200i")
      .trigger("dragstart", { dnd });
    cy.get("p").contains("Выберите булочку").trigger("drop", { dnd });
    cy.get("p").contains("Соус Spicy-X").trigger("dragstart", { dnd });
    cy.get("p").contains("Выберите начинку и соус").trigger("drop", { dnd });

    cy.contains("Оформить заказ").should("be.enabled").click();
    cy.location("pathname").then(($pathname) => {
      if ($pathname == "/login") {
        cy.contains("Войти");
        cy.get("input[type=email]").type("aatvel@mail.ru");
        cy.wait(1000);
        cy.contains("Пароль").type("123456{enter}");
        cy.wait(3000);
        cy.get("button").contains("Оформить заказ").click();
        cy.wait(17000);
        cy.get(modal).should("exist");
        cy.get("body").contains("Ваш заказ начали готовить").should("exist");
        cy.wait(3000);
        cy.get("body").type("{esc}");
        cy.get(modal).should("not.exist");

      } else {
        cy.get(modal).should("exist");
        cy.contains("Ваш заказ начали готовить");
        cy.wait(3000);
        cy.get("body").type("{esc}");
        cy.get(modal).should("not.exist");0
      }
    });
  });
});
