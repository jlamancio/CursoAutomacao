import { faker } from '@faker-js/faker';
import "cypress-real-events";
const randomName = faker.name.findName()
const randomNumber = faker.phone.number('########')

const inicial = require('../support/elements').ELEMENTS


class ClassTelaInicial {

    ValidarH1() {
        cy.get('h1').contains('Curso Automação de Testes Bàsico').should('have.text', 'Curso Automação de Testes Bàsico')

    }


    ValidaBtn() {
        cy.get('a[href="./login.html"]').as('BtnVoltar')
            .should('be.visible')
        cy.log('Botão Voltar Vísivel')

        cy.get('a[href="texto.html"]').as('BtnTexto')
            .should('be.visible')
        cy.log('Botão Texto Vísivel')

        cy.get('a[href="imagem.html"]').as('BtnImagem')
            .should('be.visible')
        cy.log('Botão Imagem Vísivel')

        cy.get('input[id="btnCadastrarSalvar"]')
            .should('be.visible').should('have.value', 'Cadastrar')

    }

    ValidaCampos() {
        cy.get('input[id="txtNome"]').as('Nome').should('be.visible')
        cy.get('input[id="numero"]').as('Numero_Telefone').should('be.visible')
        cy.get('input[id="dtpDataNascimento"]').as('Data_Nascimento').should('be.visible')

    }

    /* Como utilizar o Real Press (biblioteca)   
    cy.get('input[id="txtNome"]').as('Nome').should('be.visible')
      .click()
      .wait(10000).realPress('Tab').realPress('5')

     */
}


export default new ClassTelaInicial();