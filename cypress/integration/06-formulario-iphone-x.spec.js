describe("Formulários devem funcionar", function () {
  it("Site deve estar acessível", function () {
    cy.viewport("iphone-x");
    cy.visit(
      "https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html"
    );
    cy.contains("Meu Formulário");
  });

  it("Deve preencher os dados corretamente", function () {
    cy.viewport("iphone-x");
    cy.get("#nome").type("Humberto Gessinger");
    cy.get("#idade").type("53");
  });

  it("Deve submeter corretamente", function () {
    cy.viewport("iphone-x");
    cy.get("button").contains("Enviar").click();
    cy.get("h2").contains("Sucesso, meu patrão");
  });
});

describe("Formulários devem apontar erro", function () {
  it("Site deve estar acessível", function () {
    cy.viewport("iphone-x");
    cy.visit(
      "https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html"
    );
    cy.contains("Meu Formulário");
  });

  it("Deve submeter corretamente", function () {
    cy.viewport("iphone-x");
    cy.get("button").contains("Enviar").click();
    cy.get("h2").contains(
      "Pô, meu patrão, lembre que todos os campos são obrigatórios..."
    );
  });
});
