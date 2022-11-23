describe("Menus devem estar acessíveis", function () {
  it("A home deve estar acessível", function () {
    cy.visit("https://github.com/");
    cy.contains("Let’s build from here");
  });

  it("Menu pricing deve funcionar", function () {
    cy.contains("Pricing").click();
    cy.contains("Get the complete developer platform", { timeout: 20000 });
  });
});
