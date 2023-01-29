describe("Calculator test", () => {
    it("Normal test", () => {
        cy.visit("http://localhost:5173/wt/");
        cy.wait(10000);
        cy.get("#sidebar-menu").click();
        cy.contains("BR Calculator").click();

        cy.contains("Realistic").click();

        cy.get(".dropzone").selectFile("cypress/fixtures/ss.png", {
          action: "drag-drop",
        });
        cy.intercept("POST", "https://api.ocr.space/parse/image").as("ocr");
        cy.wait("@ocr").should((xhr) => {
          expect(xhr.response).to.have.property("statusCode", 200);
        });

        cy.get("#name").type("3.3").should("have.value", "3.3");
        cy.contains("Ok").click();
        cy.contains("Your br: 3.3");
    });

    it("Ingame test", () => {
        cy.visit("http://localhost:5173/wt/");
        cy.wait(5000);
        cy.get("#sidebar-menu").click();
        cy.contains("BR Calculator").click();

        cy.contains("Realistic").click();

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

        cy.contains("Input BR:").should("not.exist");
    });
});
