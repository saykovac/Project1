/// <reference types="cypress" />
// kazemo programu da radi auto complete

it('google test', function(){
    
    cy.visit('https://google.com')

    cy.get('.gLFyf'/*,{timeout: 6000}*/).type('Bujaka Bujaka{enter}')
    // kopriali selektor
    // cy.get('[href="https://genius.com/The-jam-going-underground-lyrics"] > .LC20lb').click()
    cy.wait(4000)
    cy.contains('Видео').click()
    // Chrome otvara Google na srpskom te je zato Видео

})
