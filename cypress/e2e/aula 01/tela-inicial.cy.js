import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Acessar a pagina do todo MVC', () => {

  it('Abrir a url', () => {
    cy.visit('https://todomvc.com/examples/backbone_marionette/')
    telaInicial.inputText()
  
  })
  
})