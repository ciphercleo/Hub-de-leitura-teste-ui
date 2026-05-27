/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro no hub de leitura', () => {

        beforeEach(() => {
            cy.visit("register.html")
        });
    it('Deve fazer cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Cléo Menegasso')
        cy.get('#email').type(email)
        cy.get('#phone').type('11956789485')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });
});