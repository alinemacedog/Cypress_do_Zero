import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Deletar itens da lista ToDo', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Melancia"]
        todoItens.forEach(function(item, indice,array){
            telaInicial.inputText(item)
        })
    })

    it('Deletar 1 item da lista', () => {
        telaInicial.deletarItem()
    })

  

})