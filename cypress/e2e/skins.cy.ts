describe("Skins test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:5173/wt/");
    cy.wait(500);
    cy.get("#sidebar-menu").click();
    cy.contains("Skins").click();
  });
  it("Test special properites", () => {
    cy.contains("USSR").click();
    cy.contains("Fictional").click();
    cy.contains("Object 120").trigger("mouseover");
    cy.contains("Desert").should("be.visible");
    cy.contains("Historical").click();
    cy.contains("ZSU-23-4")
      .children("span")
      .should("have.css", "background-color", "rgb(255, 192, 203)");
    cy.contains("Other").click();
    cy.contains("modern");
  });
  const countries = [
    "USA",
    "Germany",
    "USSR",
    "Great Britain",
    "Japan",
    "Italy",
    "France",
    "Sweden",
  ];
  countries.forEach((element) => {
    const regex = new RegExp(element + ".*skins", "g");
    it(`Go to ${element}`, () => {
      cy.contains(element).click();
      cy.contains(regex);
      switch (element) {
        case "USA":
          cy.contains("Historical").click();
          cy.contains("H-75A-1").trigger("mouseover");
          cy.contains("Rasmussen's P-36A").should("be.visible");
          break;
        case "Germany":
          cy.contains("Bf 109B").trigger("mouseover");
          cy.contains("Flegel's Bf 109 A").should("be.visible");
          break;
        case "USSR":
          cy.contains("T-III").trigger("mouseover");
          cy.contains("T-III (USSR)").should("be.visible");
          break;
        case "Great Britain":
          cy.contains("Centurion Mk 3").trigger("mouseover");
          cy.contains("Strv 81").should("be.visible");
          break;
        case "Japan":
          cy.contains("Historical").should("be.disabled");
          cy.contains("Ki 10 II").trigger("mouseover");
          cy.contains("Ki-10-II").should("be.visible");
          break;
        case "Italy":
          cy.contains("Historical").click();
          cy.contains("G.50AS").trigger("mouseover");
          cy.contains("G.50 AS serie 7").should("be.visible");
          break;
        case "France":
          cy.contains("C.R.714 CA-556").trigger("mouseover");
          cy.contains("C.R.714").should("be.visible");
          break;
        case "Sweden":
          cy.contains("Strv M/41").trigger("mouseover");
          cy.contains("Strv m/41 S-II").should("be.visible");
          break;
      }
    });
  });
});
