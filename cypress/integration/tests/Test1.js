/// <reference types="Cypress" />

import BasePage from '../pageObjects/BasePage'

describe('Scenario 1 - Basic UI validation', function() 
{

    //1.TC - Validate UI - Left side navigation
    it('1.TC - Validate UI - Left side navigation navbarLeft and appSideBar', function()
    {
       const basePage = new BasePage()
       
       basePage.visit()
       
       //navBarLeft and its content
       cy.log('Validating navBarLeft to be present')
       basePage.getNavBarLeft().should('be.visible')
       
       cy.log('Validating navBarLeft has "Search" link')
       basePage.getSearch().should('be.visible')

       cy.log('Validating navBarLeft has "Create Issue" link')
       basePage.getCreateIssue().should('be.visible')
       
       cy.log('Validating navBarLeft has user Avatar icon')
       basePage.getSideAvatar().should('be.visible')

       cy.log('Validating navBarLeft has About link')
       basePage.getAbout().should('be.visible')

       //sideBar and its content
       cy.log('Validating sideBar to be present')
       basePage.getSideBar().should('be.visible')

       cy.log('Validating sideBar has Angular Jira Icon')
       basePage.getAngularIcon().should('be.visible')

       cy.log('Validating sideBar has Angular Jira title')
       basePage.getAngularTitle().should('be.visible')

       cy.log('Validating sideBar has Kanban Board link')
       basePage.getKanbanBoard().should('be.visible')

       cy.log('Validating sideBar has Projcet Settings link')
       basePage.getProjectSettings().should('be.visible')

       cy.log('Validating sideBar has Releases link')
       basePage.getReleases().should('be.visible')

       cy.log('Validating sideBar has Issues and filters link')
       basePage.getIssuesAndFilters().should('be.visible')

       cy.log('Validating sideBar has Reports link')
       basePage.getReports().should('be.visible')

       cy.log('Validating sideBar has Componenets link')
       basePage.getComponents().should('be.visible')

    })

        //2.TC - Validate UI - Header & filters validation
        it('2.TC - Validate UI - Header and filters validation', function()
        {
           const basePage1 = new BasePage()
           
           basePage1.visit()
        
           //BreadCrumbs
           cy.log('First breadcrumb validation')
           basePage1.getFirstBreadCrumb().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Projects")).to.be.true
           })

           cy.log('Second BreadCrumb validation')
           basePage1.getSecondBreadCrumb().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Angular Jira Clone")).to.be.true
           })

           cy.log('Third BreadCumb validation')
           basePage1.getThirdBreadCrumb().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Kanban Board")).to.be.true
           })

           //Header
           cy.log('Header title validation')
            basePage1.getBoardTitle().then(function(el){
            const actualText = el.text()
            console.log(actualText)
            expect(actualText.includes("Kanban board")).to.be.true
           })


           //Social links
           cy.log('Support link validation')
           basePage1.getSocial1().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Support")).to.be.true
           })

           cy.log('Spootify link validation')
           basePage1.getSocial2().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Spotify")).to.be.true
           })

           cy.log('Tetris link validation')
           basePage1.getSocial3().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Tetris")).to.be.true
           })

           cy.log('Stroybook link validation')
           basePage1.getSocial4().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Storybook")).to.be.true
           })

           cy.log('Tweet link validation')
           basePage1.getSocial5().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Tweet")).to.be.true
           })

           cy.log('Soruce Code link validation')
           basePage1.getSocial6().then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Source Code")).to.be.true
           })


           //Board filters
           cy.log('Search input should be present')
           basePage1.getSearchInput().should('be.visible')

           cy.log('User avatar icons should be present')
           basePage1.getAvatars().should('be.visible')

           cy.log('Only My Issues button link should be present')
           basePage1.getOnlyMyIssuesBtn().should('be.visible')

           cy.log('Ignore Resolved button link should be present')
           basePage1.getIgnoreResolvedBtn().should('be.visible')
           
           cy.log('Ignore Resolved button link should be present')
           basePage1.getClearAllBtn().should('not.exist')
    
        })

        //3.TC - Validate UI - Board columns
        it('3.TC - Validate UI - Board columns' , function() {
         const basePage2 = new BasePage()
           
         
           basePage2.visit()

           cy.log('Validating that there are 4 columns')
           var columns = 0
           basePage2.getBoardColumn().each(($el, index, $list) => {
            columns = columns + 1
           }).then(function() {
            cy.log('There are ' , columns , ' columns')
           }).then(function() {
            expect(columns).to.equal(4)
           })

           cy.log('Validating first column name')
           basePage2.getBoardColumn().find('.px-3').eq(0).then(function(element){
            const wholeText = element.text()
            console.log(wholeText)
            var res = wholeText.split(" ")
            const cName= res[1].trim()
            cy.log('First column name is ', cName)
            expect(cName).to.equal('Backlog')
           })

           cy.log('Validating second column name')
           basePage2.getBoardColumn().find('.px-3').eq(1).then(function(element){
            const wholeText = element.text()
            cy.log('Second column name is ', wholeText)
            expect(wholeText.includes('Selected for Development'))
           })

           cy.log('Validating third column name')
           basePage2.getBoardColumn().find('.px-3').eq(2).then(function(element){
            const wholeText = element.text()
            cy.log('Second column name is ', wholeText)
            expect(wholeText.includes('In Progress'))
           })

           cy.log('Validating fourth column name')
           basePage2.getBoardColumn().find('.px-3').eq(3).then(function(element){
            const wholeText = element.text()
            var res = wholeText.split(" ")
            const cName= res[1].trim()
            cy.log('Second column name is ', cName)
            expect(cName).to.equal('Done')
           })

           //compare number of issues within column with sum number in column name
           cy.log('Validate that number of issues in each column correspnds with the number displayed in column name')
           
           var c1 = 0 //sum of issues in column 1
           cy.get('#Backlog issue-card').each(($el, index, $list) => {
            c1 = c1 + 1
           }).then(function() {
            cy.log(c1)
           })
           basePage2.getBoardColumn().find('.px-3 span').eq(0).then(function(element){
            const cNum= element.text()
            cy.log('First column number is ', cNum)
            expect(Number(cNum)).to.equal(Number(c1))
           })

           var c2 = 0 //sum of issues in column 2
           cy.get('#Selected issue-card').each(($el, index, $list) => {
            c2 = c2 + 1
           }).then(function() {
            cy.log(c2)
           })
           basePage2.getBoardColumn().find('.px-3 span').eq(1).then(function(element){
            const cNum= element.text()
            cy.log('Second column number is ', cNum)
            expect(Number(cNum)).to.equal(Number(c2))
           })

           var c3 = 0 //sum of issues in column 3
           cy.get('#InProgress issue-card').each(($el, index, $list) => {
            c3 = c3 + 1
           }).then(function() {
            cy.log(c3)
           })
           basePage2.getBoardColumn().find('.px-3 span').eq(2).then(function(element){
            const cNum= element.text()
            cy.log('Second column number is ', cNum)
            expect(Number(cNum)).to.equal(Number(c3))
           })

           var c4 = 0 //sum of issues in column 4
           cy.get('#Done issue-card').each(($el, index, $list) => {
            c4 = c4 + 1
           }).then(function() {
            cy.log(c4)
           })
           basePage2.getBoardColumn().find('.px-3 span').eq(3).then(function(element){
            const cNum= element.text()
            cy.log('Second column number is ', cNum)
            expect(Number(cNum)).to.equal(Number(c4))
           })





        })     

})