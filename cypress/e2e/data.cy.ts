describe("WT data project test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:4173/wt/");
    cy.get("#sidebar-menu").click();
    cy.contains("WT Data Project (External)").click();
    cy.get("iframe").should("have.attr", "src", "https://wt.controlnet.space/");
  });
});
