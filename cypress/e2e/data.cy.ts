describe("WT data project test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:5173/wt/");
    cy.wait(500);
    cy.get("#sidebar-menu").click();
    cy.contains("WT Data Project (External)").click();
  });
  it("Find iframe", () => {
    cy.get("iframe").should("have.attr", "src", "https://wt.controlnet.space/");
  });
});
