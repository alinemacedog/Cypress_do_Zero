import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Validar filtros na minha lista ToDo, após adição de itens', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Melancia"]
        todoItens.forEach(function(item, indice,array){
            telaInicial.inputText(item)
        })
            telaInicial.concluirItem()
    })

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")

    })

  

})