import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Adicionar itens na minha lista ToDo', () => {
    
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
    })

    it('Adicionar mais de um item na lista', () => {
        var todoItens = ["Maça", "Banana", "Melancia"]
        todoItens.forEach(function(item, indice,array){
            telaInicial.inputText(item)
        }) 
    })
  

})