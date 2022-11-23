const APP_URL =
  "https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html";

describe("Formulários devem funcionar", function () {
  let nomeUsuario;
  let idadeUsuario;

  before(function () {
    cy.fixture("meuarquivo").then((usuario) => {
      nomeUsuario = usuario.nome;
      idadeUsuario = usuario.idade;
    });
  });

  it("Site deve estar acessível", function () {
    cy.visit(APP_URL);
    cy.contains("Meu Formulário");
  });

  it("Deve preencher os dados corretamente", function () {
    cy.get("#nome").type(nomeUsuario);
    cy.get("#idade").type(idadeUsuario);
  });

  it("Deve submeter corretamente", function () {
    cy.get("button").contains("Enviar").click();
    cy.get("h2").contains("Sucesso, meu patrão");
  });
});
