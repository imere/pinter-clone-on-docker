describe("Custom", function() {
  it("{ a: 1 } not to be { a: 2 }", function() {
    expect({ a: 1 }).not.toBe({ a: 2 });
  });
});
