import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Regressivo ToDo', () => {

    context('Validar tela de inicial', () => {
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        })
    })

  
    context('Validar adição de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Adicionar mais de um item na lista', () => {
            var todoItens = ["Maça", "Banana", "Melancia"]
            todoItens.forEach(function(item, indice,array){
                telaInicial.inputText(item)
            }) 
                telaInicial.validarContador(3)
        })
    })  


    context('Validar conclusão de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Melancia"]
            todoItens.forEach(function(item, indice,array){
                telaInicial.inputText(item)
            })
        })

        it('Concluir um item na lista', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
        })
    })


    context('Validar filtro da aplicação', () => {
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Melancia"]
            todoItens.forEach(function(item, indice,array){
                telaInicial.inputText(item)
            })
                telaInicial.concluirItem()
        })
    
        it('Validar itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSize(2)
        })

        it('Validar itens concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSize(1)
        })
    })


    context('Validar remoção de itens', () => {
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Melancia"]
            todoItens.forEach(function(item, indice,array){
                telaInicial.inputText(item)
            })
        })
    
        it('Deletar 1 item da lista', () => {
            telaInicial.deletarItem()
            telaInicial.validarSize(2)
        })
    })


})