import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Concluir itens na minha lista ToDo', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Melancia"]
        todoItens.forEach(function(item, indice,array){
            telaInicial.inputText(item)
        })
    })

    it('Concluir um item na lista', () => {
        telaInicial.concluirItem()
    })

  

})