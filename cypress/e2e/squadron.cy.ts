describe("Squadron test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:4173/wt/");
    cy.get("#sidebar-menu").click();
    cy.contains("Squadron vehicles").click();
    cy.get("#us_m901_itv").parent().parent().contains("60 Days to research");
    cy.contains(/Squadron points in \d.*(days|day|hours|hour)/g);
  });
});
