/// <reference types="cypress"/>

describe('Testes de utilização dos comandos: Wait e Timeout', () =>{
    it('Utilização do comando Wait', () =>{
        cy.visit('https://google.com.br/')
        cy.get('#APjFqb').should('be.visible').type('Automação de Testes').wait(3000)
        cy.get('.FPdoLc > center > .gNO89b', {timeout:15000})
          .should('be.visible').click( { force: true })

    })
})
