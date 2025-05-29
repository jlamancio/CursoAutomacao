/// /// <reference types="cypress"/>
describe('Testando o comando intercept', () => {
    it('teste comando intercept', () => {
        cy.visit('https://www.google.com')
        cy.intercept(
            'POST',
            'log?format=json&hasfast=true&authuser=0'
        ).as('IconeCamera')

        cy.get('svg[class="Gdd5U"').click().wait('@IconeCamera')



    })
})