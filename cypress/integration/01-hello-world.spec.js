describe("Teste Hello World", function () {
  it("True é True", function () {
    expect(true).to.equal(true);
  });

  it("False é False", function () {
    expect(false).to.equal(false);
  });

  it("True é False", function () {
    expect(true).to.equal(false);
  });
});
