const ocrResult = {
  ParsedResults: [
    {
      TextOverlay: { Lines: [], HasOverlay: false, Message: "No overlay requested." },
      TextOrientation: "0",
      FileParseExitCode: 1,
      ParsedText:
        "A-20G-25\nSM.91\nP-61C-1\nP-51C-10\nZ.1007 bis ser..\nP-39N-0\nP-51\nC. 205 serie 1\nB18B\nP.108B serie 1\nB-25J-1\nBf 109 F-4",
      ErrorMessage: "",
      ErrorDetails: "",
    },
  ],
  OCRExitCode: 1,
  IsErroredOnProcessing: false,
  ProcessingTimeInMilliseconds: "328",
  SearchablePDFURL: "Searchable PDF not generated as it was not requested.",
};

describe("Calculator test", () => {
  it("Normal test", () => {
    cy.visit("http://localhost:4173/wt/");
    cy.wait(10000);
    cy.get("#sidebar-menu").click();
    cy.contains("BR Calculator").click();

    cy.contains("Realistic").click();

    cy.get("#dropzone").selectFile("cypress/fixtures/ss.png", {
      action: "drag-drop",
    });
    cy.intercept("POST", "https://api.ocr.space/parse/image", ocrResult);

    cy.intercept("http://localhost:8111/indicators", { times: 1 }, { forceNetworkError: true });

    cy.get("#name").type("3.3").should("have.value", "3.3");
    cy.contains("Ok").click();
    cy.contains("Your br: 3.3");
  });

  it("Ingame test", () => {
    cy.visit("http://localhost:4173/wt/");
    cy.wait(5000);
    cy.get("#sidebar-menu").click();
    cy.contains("BR Calculator").click();

    cy.contains("Realistic").click();

    cy.get("#dropzone").selectFile("cypress/fixtures/ss.png", {
      action: "drag-drop",
    });
    cy.intercept("POST", "https://api.ocr.space/parse/image", ocrResult);
    cy.intercept("GET", "http://localhost:8111/indicators", {
      body: {
        valid: true,
        type: "p_108b_serie1",
      },
    });

    cy.contains("Input BR:").should("not.exist");
  });
});
