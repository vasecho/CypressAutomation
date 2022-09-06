/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My first test', function() 
{

    
  

    it('My firs test case', function()
    {
       //test case 1 
       //cy.visit("https://jira.trungk18.com/");
       //cy.viewport(1280, 720)
       cy.visit(Cypress.env('testUrl'))
       cy.get('.input').type('Story')
       //selenium get hit url in browser, cypress get acts like findElement of Selenium
       cy.get('div.issue').should('have.length',1)
       cy.get('.text-2xl').then(function(logoElement)
       {
        cy.log(logoElement.text())
       })

    })

})