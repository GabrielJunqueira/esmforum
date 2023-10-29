describe('Teste de cadastro de resposta', () => {
  it('Cadastra uma resposta e verifica se ela é listada', () => {
    cy.visit('http://localhost:3000');

    //visualizar as perguntas existentes
    cy.get('#btn-perguntas').click();

    cy.get('#tabela-perguntas').contains('3+3').find('.btn-responder').click();

    cy.get('#textarea-resposta').type('A resposta é 6');

    //"Enviar resposta"
    cy.get('#btn-enviar-resposta').click();

    // Verifica se a resposta foi cadastrada com sucesso
    cy.get('#tabela-respostas').contains('A resposta é 6');
  });
});
