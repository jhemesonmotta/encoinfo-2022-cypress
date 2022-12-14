describe("Login deve funcionar", function () {
  it("O site deve estar acessível", function () {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.contains("Online Banking");
  });

  it("O menu de login deve estar acessível", function () {
    cy.get("#signin_button").click();
    cy.contains("Log in to ZeroBank");
  });

  it("Deve logar com sucesso", function () {
    cy.meuLogin("username", "password");
  });
});
