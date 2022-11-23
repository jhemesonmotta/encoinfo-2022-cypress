describe("Deve fazer login corretamente", function () {
  it("A home deve estar acessível", function () {
    cy.visit("https://github.com/");
    cy.contains("Let’s build from here");
  });

  it("Menu Sign in deve estar acessível", function () {
    cy.contains("Sign in").click();
    cy.contains("Sign in to GitHub");
  });

  it("Preenchimento do formulário deve funcionar", function () {
    cy.get("#login_field").type("Humberto Gessinger");
    cy.get("#password").type("Humberto Gessinger");
    cy.get('input[type="commit"]').click();
  });
});
