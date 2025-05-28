/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

const randomName = faker.name.fullName()
const randomPhone = faker.phone.number()
const randomBirthDate = faker.date.birthdate() 

const inicial = require('../support/elements').ELEMENTS

describe('Testar tela principal', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('Validação dos elementos da tela principal da aplicação', () => {
        it('Valida texto de abertura da tela principal', () => {
            cy.contains('h1', 'Curso Automação de Testes Bàsico').as(TituloPagina).should('be.visible')

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


        it('Validar checkbox "sexo" na tela principal', () => {
            cy.contains('legend', 'Sexo').should('be.visible')

            cy.get('input[id="rdoMasculino"]').should('have.value', 'male').should('be.visible')
            cy.get('input[id="rdoFeminino"]').should('have.value', 'female').should('be.visible')

        })


        it('Validação da tabela exibida na tela principal', () => {
            cy.contains('h2', 'Tabela').should('be.visible')
            
            cy.get('tr').find('th').eq(0).should('have.text', 'Id')
            cy.get('tr').find('th').eq(1).should('have.text', 'Nome')
            cy.get('tr').find('th').eq(2).should('have.text', 'Telefone')
            cy.get('tr').find('th').eq(3).should('have.text', 'Nascimento')
            cy.get('tr').find('th').eq(4).should('have.text', 'Sexo')
            cy.get('tr').find('th').eq(5).should('have.text', 'Ultima Atualização')

        })
    })

    context('Cadastrar usuário', () => {
        it('Cadastrar novo usuário', () => {
            
            cy.CadastraUser()   // Command.js

        })
    })

    context('Validação dos dados cadastrados na tabela', () => {
        it.only('Validar registro', () => {
            cy.get('input[id="txtNome"]').clear().type('José Luis Amancio')
            cy.get('input[id="numero"]').clear().type('+55(11)99503-4612')
            cy.get('input[type="date"]').clear().type('2025-05-23')
            cy.get('input[id="rdoMasculino"]').check().should('be.checked')
            cy.get('input[id="btnCadastrarSalvar"]').click()

            /* A9 */
            
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0)
                .invoke('text')
                .then((PegaId) => {
                    cy.wrap(PegaId).as('Id do registro na tabela')
                    cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0)
                        .should('have.text', PegaId)
                })
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(1)
                .should('have.text', 'José Luis Amancio')
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(2)
                .should('have.text', '+55(11)99503-4612')
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(3)
                .should('have.text', '23/05/2025')
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(4)
                .should('have.text', 'M')

        })
    })
})
