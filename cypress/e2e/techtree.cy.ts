describe("Techtree test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:5173/wt/");
    cy.wait(500);
    cy.get("#techtree").click();
  });
  it("Test ground vehicle page", () => {
    cy.contains("USSR").click();
    cy.contains("Ground Vehicles").click();
    cy.get("#T-35").click();
    cy.get(".general_info_name").contains("T-35");
    cy.get(".general_info_image img").should("be.visible");
    cy.get(".image img").should("be.visible");
    cy.get(".general_info_nation").contains("USSR");
    cy.get(".general_info_rank").contains("I Rank");
    cy.get(".general_info_class").contains("Heavy tank");
    cy.get(".general_info_price").contains("Purchase:");
    cy.get(".general_info_price").contains("2100");
    cy.get(".general_info_game_button").contains("Show in game");
    cy.get(".crew .value").contains("10 people");
    cy.get(".visibility .value").contains("100 %");
    cy.get("#techtree").click();
  });
  const countries = [
    "USA",
    "Germany",
    "USSR",
    "Great Britain",
    "Japan",
    "China",
    "Italy",
    "France",
    "Sweden",
    "Israel"
  ];
  countries.forEach((element) => {
    it(`Go to ${element}`, () => {
      cy.contains(element).click();
      cy.contains("Aviation").click();
      cy.contains("Ground Vehicles").click();
      cy.contains("Helicopters").click();
    });
  });
});
