describe("Listagem de livros deve funcionar", function () {
  it("O site deve estar acessível", function () {
    cy.visit("http://books.toscrape.com/");
    cy.contains("We love being scraped!");
  });

  it("Deve filtrar por categoria", function () {
    cy.contains("Erotica").click();
    cy.contains("Dark Notes");
  });

  it("Deve abrir o livro", function () {
    cy.contains("Dark Notes").click();
    cy.contains("They call me a slut. Maybe I am.");
  });
});
