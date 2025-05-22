/// <reference types="cypress"/>

describe('Testar tela principal', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Valida texto de abertura da tela principal', () => {
        cy.contains('h1', 'Curso Automação de Testes Bàsico').should('be.visible')

    })

    it('Validar botões na tela principal', () => {
        cy.get('a[href="./login.html"]').as('BtnVoltar').should('be.visible')
        cy.log('Botão "Voltar" visível')

        cy.get('a[href="texto.html"]').as('BtnTexto').should('be.visible')
        cy.log('Botão "Texto" visível')

        cy.get('a[href="imagem.html"]').as('BtnImagem').should('be.visible')
        cy.log('Botão "Imagem" visível')

        cy.get('input[id="btnCadastrarSalvar"]')
            .as('BtnCadastrar')
            .should('be.visible')
            .should('have.value', 'Cadastrar')

    })

    it('Validar Campos de Cadastro na tela principal', () => {
        cy.get('input[id="txtNome"]').as('Nome').should('be.visible')
        cy.get('input[id="numero"]').as('Numero_Telefone').should('be.visible')
        cy.get('input[id="dtpDataNascimento"]').as('Data_Nascimento').should('be.visible')

    })

    
       it('Validar checkbox "sexo" na tela principal', () =>{
        cy.contains('legend', 'Sexo').should('be.visible')
        cy.get('input[id="rdoMasculino"]').should('have.value', 'male').should('be.visible')
        cy.get('input[id="rdoFeminino"]').should('have.value', 'female').should('be.visible')
        
    })
    

})
