/// <reference types="cypress"/>

describe('Testes na tela index do projeto', () => {
    beforeEach(function () {
        cy.visit('/')
    })

    it('Testar botão de texto', () => {
        cy.get('button').contains('Texto').should('be.visible').click()

        cy.get('div[class="all"]').find('h1[class="title"]')
            .should('have.text', 'Curso Automação de Testes Bàsico').as('TítuloPrincipal')

        cy.get('div[class="all"]').find('h2')
        .should('have.text', ' Automação de testes').as('Sub-Título')
    })


    it('Testar botão voltar', () =>{
        cy.get('[href="./login.html"] > button')
            .click()
    })
})