describe("Listagem de livros deve funcionar", function () {
  it("O site deve estar acessível", function () {
    cy.visit("http://books.toscrape.com/");
    cy.contains("We love being scraped!");
  });

  it("Os itens da listagem devem ser exibidos", function () {
    cy.get(".product_pod").its("length").should("eq", 20);
  });

  it("Paginação deve funcionar", function () {
    cy.get("a").contains("next").click();
    cy.contains("Page 2 of 50");
  });
});
