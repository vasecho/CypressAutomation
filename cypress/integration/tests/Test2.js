/// <reference types="Cypress" />

import BasePage from '../pageObjects/BasePage'

describe('Validation of basic functionalities', function() 
{

    this.beforeEach(function() {
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    //4.TC - Validate search functionality
    it('4.TC - Validate search functionality', function()
    {
        const basePage = new BasePage()
       
        basePage.visit()
        cy.openSearch()

        cy.log('Enter "Angular" into search input and validate that there are 12 issues as result')
        cy.searchFor('Angular')
        var sum = 0
        cy.get('search-drawer.ng-star-inserted issue-result').each(($el, index, $list) => {
            sum = sum +1
        }).then(function() {
            cy.log('When searching for "Angular" found :', sum , ' issues')
             // There should be 12 issues found when searching for 'Angular'
            expect(sum).to.equal(12)
        })

        cy.log('Clear the search input and validate that there are 5 default results')
        cy.get('.mb-10 > j-input > .input-container > .input').clear()
        var eSum = 0
        cy.get('search-drawer.ng-star-inserted issue-result').each(($el, index, $list) => {
            eSum = eSum +1
        }).then(function() {
            cy.log('For empty search, there are ', eSum , ' issues found')
             // There should be 5 issues found for empty search
            expect(eSum).to.equal(5)
        })
    })


    //5.TC-Validate create issue functionality
    it('5.TC-Validate create issue functionality', function(){
        const basePage1 = new BasePage()
       
        basePage1.visit()
        
        basePage1.clickCreateIssue()
        basePage1.getModalTitle().then(function(element) {
            const sTitle = element.text()
            console.log(sTitle)
            expect(sTitle.includes('Create issue')).to.be.true
        })


    })



})