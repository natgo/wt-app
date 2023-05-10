describe("Techtree test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/wt/");
    cy.wait(5000);
    cy.get("#sidebar-menu").click();
    cy.contains("Techtree").click();
  });

  it("Test ground vehicle page features", () => {
    cy.contains("USSR").click();
    cy.contains("Ground Vehicles").click();
    cy.get("#ussr_t_35").click();
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
    cy.get(".visibility .value").contains("195 %");
    cy.go("back");
    cy.get("#ussr_bmp_1").click();
    cy.get(".general_info_neighbors").get(".prev").contains("SU-100P");
    cy.get(".general_info_neighbors").get(".next").contains("Object 906");
    cy.get(".general_info_skins").contains("BMP-1 [Repack]");
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
    "Israel",
  ];

  it("Countries test", () => {
    countries.forEach((element) => {
      cy.contains(element).click();
      cy.contains("Aviation").click();
      cy.contains("Ground Vehicles").click();
      cy.contains("Helicopters").click();
    });
  });
});
