///<reference types = "cypress"/>

describe('launch google browser', () =>{
    it('should open google home page', () => {
         // Visit Google home page
         cy.visit("https://www.google.co.in/");
         cy.get("#APjFqb").type("Cypress");
         cy.contains("Google Search").click({force: true});
         
    })
})