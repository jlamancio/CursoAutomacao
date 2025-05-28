
import { faker } from '@faker-js/faker';
const randomName = faker.name.findName()
const randomNumber = faker.phone.number('########')


const inicial = require('../support/elements').ELEMENTS

 Cypress.Commands.add('ValidarH1', () => {
        cy.contains('h1', 'Curso Automação de Testes Bàsico').as('TituloPagina').should('be.visible')

    })


Cypress.Commands.add('CadastrarUser', () => {


    cy.get(inicial.CampoNome)
        .type(randomName)

    cy.get(inicial.CampoTelefone)
        .type(randomNumber)

    cy.get('input[type="date"]')
        .click().type('2023-04-26')

    cy.get('input[id="rdoMasculino"]')
        .check()

    cy.get('input[id="btnCadastrarSalvar"]')
        .click()

    cy.get(inicial.BtnExcluir)
        .should('be.visible')

    cy.get('button')
        .contains('Alterar').should('be.visible')

    cy.get('button')
        .contains('Excluir').click()

   
    Cypress.Commands.add('authority', () => {


        cy.request({
            method: "GET",
            url: 'https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=https://login.microsoftonline.com/7893571b-6c2c-4cef-b4da-7d4b266a0626/oauth2/v2.0/authorize',
            failOnStatusCode: false,

        }).then((authority) => {
            cy.log(authority.body.tenant_discovery_endpoint)


        })

    })





})