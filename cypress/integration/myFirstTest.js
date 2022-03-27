/// <reference types="cypress" />
// kazemo programu da radi auto complete

it('google test', function(){
    
    cy.visit('https://google.com')

    cy.get('.gLFyf'/*,{timeout: 6000}*/).type('The Jam - Going underground{enter}')
    // kopirali selektor
    // cy.get('[href="https://genius.com/The-jam-going-underground-lyrics"] > .LC20lb').click()
    cy.wait(4000)
    // 
    cy.contains('Видео').click()
    // pretraga po tekstu
    // Chrome otvara Google na srpskom te je zato Видео a ne Video

})


// sa only se pokrece samo ovaj test case
it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    // orangehrm je dummy sajt
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#menu_admin_UserManagement').trigger('#menu_admin_viewSystemUsers')
    cy.get('#menu_admin_viewSystemUsers').click()
    // nadji nacin da bude hover stanje da bi se pokazao element iznad
    

})
