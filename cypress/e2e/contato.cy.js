/// <reference types="cypress"/>

describe('Funcionalidade: Contato', () => {

beforeEach(() => {
  //roda antes de cada cenário
  cy.visit('index.html')
});

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Cleo Menegasso')
    cy.get('[name="email"]').type('cleo@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Texto livre')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher nome" , () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('cleo@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Texto livre')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher e-mail" , () => {
    cy.get('[name="name"]').type('Cleo Menegasso')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Texto livre')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it("Deve validar mensagem de erro ao enviar sem selecionar assunto" , () => {
    cy.get('[name="name"]').type('Cleo Menegasso')
    cy.get('[name="email"]').type('cleo@teste.com')
    //cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Texto livre')
    cy.get('#btn-submit').click()
    //Resultado esperado
    //metodo contain valida parte da mensagem
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher a mensagem" , () => {
    cy.get('[name="name"]').type('Cleo Menegasso')
    cy.get('[name="email"]').type('cleo@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });
});
