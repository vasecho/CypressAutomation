

class BasePage {


visit() {
    cy.log('Navigating to base url')
    cy.visit('/')
}


//NavBar
getNavBarLeft() {
    return cy.get('div.navbarLeft-content')
}

getSearch() {
    return cy.get(':nth-child(2) > .itemIcon > .anticon > svg')
}

getCreateIssue() {
    return cy.get(':nth-child(3) > .itemIcon > .anticon > svg')
}

getSideAvatar() {
    return cy.get('.itemIcon > .flex > .avatar-container')
}

getAbout() {
    return cy.get('a > .itemIcon > .anticon > svg > path')
}


//SideBar
getSideBar() {
    return cy.get('div.sidebar-content')
}

getAngularIcon() {
    return this.getSideBar().find('j-avatar')
}

getAngularTitle() {
    return this.getSideBar().find('.pl-2')
}

getKanbanBoard() {
    return this.getSideBar().find('a[href="/project/board"]')
}

getProjectSettings() {
    return this.getSideBar().find('a[href="/project/settings"]')
}

getReleases() {
    return this.getSideBar().find(':nth-child(4) > .link')
}

getIssuesAndFilters() {
    return this.getSideBar().find(':nth-child(5) > .link')
}

getPages() {
    return this.getSideBar().find(':nth-child(6) > .link')
}

getReports() {
    return this.getSideBar().find(':nth-child(7) > .link')
}

getComponents() {
    return this.getSideBar().find(':nth-child(8) > .link')
}


// main content

getFirstBreadCrumb() {
    return cy.get('breadcrumbs > .text-textMedium > :nth-child(1)')
}

getSecondBreadCrumb() {
    return cy.get('breadcrumbs > .text-textMedium > :nth-child(2)')
}

getThirdBreadCrumb() {
    return cy.get('breadcrumbs > .text-textMedium > :nth-child(3)')
}

getBoardTitle() {
    return cy.get('.text-2xl.font-medium')
}


//Social links
getSocialLinks() {
    return cy.get('.social-links')
}

getSocial1() {
    return this.getSocialLinks().find('a:nth-child(1)  j-button button span')
}

getSocial2() {
    return this.getSocialLinks().find('a:nth-child(2)  j-button button span')
}

getSocial3() {
    return this.getSocialLinks().find('a:nth-child(3)  j-button button span')
}

getSocial4() {
    return this.getSocialLinks().find('a:nth-child(4)  j-button button span')
}

getSocial5() {
    return this.getSocialLinks().find('a:nth-child(5)  j-button button span')
}

getSocial6() {
    return this.getSocialLinks().find('a:nth-child(6)  j-button button')
}


//Board filters
getSearchInput() {
    return cy.get('input.input')
}

getAvatars() {
    return cy.get('div.flex.flex-row.mr-3')
}

getOnlyMyIssuesBtn() {
    return cy.get(':nth-child(3) > .btn > span')
}

getIgnoreResolvedBtn() {
    return cy.get(':nth-child(4) > .btn > span')
}

getClearAllBtn() {
    return cy.get('.mt-6 > .items-center > j-button > .btn > span')
}

getBoardColumn() {
    return cy.get('div.board-dnd-list.ng-star-inserted')
}

clickCreateIssue() {
    return cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click()
}

getModal() {
    return cy.get('add-issue-modal', {timeout: 10000})
}

getModalTitle() {
    return this.getModal().get('div.flex div.text-xl')
}

}
export default BasePage