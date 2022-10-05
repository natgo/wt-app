const arr = ["Arcade", "Realistic", "Simulator"];
describe("Calculator test", () => {
  arr.forEach((element) => {
    describe("Normal test", () => {
      it("Visits the Kitchen Sink", () => {
        cy.visit("http://localhost:5173/wt/");
        cy.wait(500);
        cy.get("#calculator").click();
      });
      it("Set mode", () => {
        cy.contains(element).click();
      });
      it("Testing picture uploading", () => {
        cy.get(".dropzone").selectFile("cypress/fixtures/ss.png", {
          action: "drag-drop",
        });
        cy.intercept("POST", "https://api.ocr.space/parse/image").as("ocr");
        cy.wait("@ocr").should((xhr) => {
          expect(xhr.response).to.have.property("statusCode", 200);
        });
      });
      it("Input BR", () => {
        cy.get("#name").type("3.3").should("have.value", "3.3");
        cy.contains("Ok").click();
        cy.contains("Your br: 3.3");
      });
    });

    describe("Ingame test", () => {
      it("Visits the Kitchen Sink", () => {
        cy.visit("http://localhost:5173/wt/");
        if (Cypress.browser.name === "firefox") {
          cy.wait(500);
        } else {
          cy.intercept("GET", "http://localhost:5173/wt/final.json").as("final");
          cy.wait("@final");
        }
        cy.get("#calculator").click();
      });
      it("Set mode", () => {
        cy.contains(element).click();
      });
      it("Testing picture uploading", () => {
        cy.get(".dropzone").selectFile("cypress/fixtures/ss.png", {
          action: "drag-drop",
        });
        cy.intercept("POST", "https://api.ocr.space/parse/image").as("ocr");
        cy.intercept("GET", "http://localhost:8111/indicators", {
          body: {
            valid: true,
            type: "p_108b_serie1",
          },
        });
        cy.wait("@ocr").should((xhr) => {
          expect(xhr.response).to.have.property("statusCode", 200);
        });
      });
      it("Test that the localhost api worked", () => {
        cy.contains("Input BR:").should("not.exist");
      });
    });
  });
});
