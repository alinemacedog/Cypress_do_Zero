const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial{
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem).first().click()
    }

    filtrarItem(menu){
        cy.get(filtroItem.filtroToDo).contains(menu).and('be.visible').click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens).first().find('button').invoke('show')
    }


}

export default new telaInicial();
