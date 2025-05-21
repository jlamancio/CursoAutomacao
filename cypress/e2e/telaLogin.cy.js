/// <reference types="cypress"/>

describe('Testar tela de login', () => {
  beforeEach(() => {
  /* Este exércício é o resultado da aula: 04; os próximos passos agora é refatorar e otimizar este código. */
    cy.visit('http://127.0.0.1:5500/login.html')
  })
  it('Login - ok', () => {

    /* Validação do rótulo da página "Faça o Login"               */
    cy.get('span[class="login-form-tittle"]')
    cy.get('.login-form-tittle')
    cy.contains('span', 'Faça o Login').should('be.visible')


    /* Diversas formas de localizar e validar 0 elemento : Login  */
    cy.get('input[class="input-form"] ').eq(0)

    cy.get('input[id="login"]')
      .should('be.visible')
      .click()
      .type('Jose Luis')

    cy.get('input[id="login"]')
      .should('have.value', 'Jose Luis')

    /* Diversas formas de localizar e validar o elemento : Senha  */
    cy.get('input[class="input-form"]').eq(1)

    cy.get('input[id="senha"]')
      .should('be.visible')
      .click()
      .type('123456789')

    cy.get('input[id="senha"]')
      .should('have.value', '123456789')

    /* Localizar e validar o elemento image                      */
    cy.get('img[src="./images/login.png"').should('be.visible')
    cy.get('img[class="margin-left-50"]').should('be.visible')

    /* Localizar e validar o elemento button : Login             */
    cy.get('button[class="login-form-btn"]').contains('Login')
      .should('be.visible')
      .click()

  })
})