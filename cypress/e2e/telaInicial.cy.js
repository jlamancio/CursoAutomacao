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

    it.only('Testar botão voltar', () =>{
        cy.visit('/texto.html');
        cy.get('a[href="./index.html"]').should('be.visible', 'Voltar Ao ìnicio').click()
    })

      it.only('Validar retorno após clicar no botão "Voltar', () =>{
        cy.contains('h1', 'Curso Automação de Testes Bàsico').should('be.visible')
    })

/*
    Esta solução resolveu a questão do teste mas o deixou não elegante com o uso de cy.visit() específio e a necessidade de criar mais um teste para validar se retornou para a página correta.
    Neste caso, o correto seria alinhar com o time DEV para efetuar a correção. 

    **** PRECISO APROFUNDAR ESSE TEMA *** 
*/

})