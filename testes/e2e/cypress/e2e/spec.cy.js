describe('Teste de cadastro de resposta', () => {
  it('Cadastra uma resposta e verifica se ela é listada', () => {
    cy.visit('http://localhost:3000');

    cy.get('#btn-perguntas').click();

    cy.get('#tabela-perguntas').contains('3+3').find('.btn-responder').click();

    // Preenche o formulário de resposta com o texto desejado
    cy.get('#textarea-resposta').type('A resposta é 6');

    cy.get('#btn-enviar-resposta').click();

    // Verificar se a resposta foi cadastrada com sucesso
    cy.get('#tabela-respostas').contains('A resposta é 6');
  });
});




