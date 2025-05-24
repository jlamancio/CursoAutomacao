/// <reference types="cypress"/>

describe('Testar tela da imagem', () =>{
     beforeEach(function () {
        cy.visit('/')
    })
    it('Testar o botão da imagem', () =>{
        cy.get('a[href="imagem.html"]').as('btnImagem').should('be.visible').click()
        cy.get('img[src="images/curso.png"]').as('imgCurso').should('be.visible')
        cy.contains('button', 'Voltar Ao ìnicio').as('btnVoltarAoInicio').should('be.visible').click()
    })
})