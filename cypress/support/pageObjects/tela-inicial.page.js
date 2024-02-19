const elem = require('../elements/tela-inicial.elements').ELEMENTS

class telaInicial{
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }
}

export default new telaInicial();
