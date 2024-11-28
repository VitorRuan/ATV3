1. Estrutura da API
A API foi desenvolvida utilizando o Express.js no Node.js e possui as seguintes rotas principais para interação com os dados de tarefas:

POST /tarefas:

Responsável por criar uma nova tarefa. A tarefa é recebida como um objeto no corpo da requisição, contendo id, descricao e status. A tarefa é adicionada ao array tarefas no backend.
Resposta: Confirmação de que a tarefa foi adicionada com sucesso.
GET /tarefas:

Retorna todas as tarefas armazenadas no array tarefas em formato JSON.
Resposta: A lista de tarefas.
PUT /tarefas/:id:

Permite a atualização de uma tarefa existente com base no id. O corpo da requisição contém a nova descrição e status da tarefa.
Resposta: Confirmação da atualização ou erro se a tarefa não for encontrada.
DELETE /tarefas/:id:

Exclui uma tarefa com base no id. A tarefa é removida do array tarefas.
Resposta: Confirmação de que a tarefa foi removida.
A API é simples e se comunica com o frontend via HTTP, utilizando o formato JSON para troca de dados.

2. Telas do Frontend
O frontend foi desenvolvido utilizando React Native e possui as seguintes telas principais:

HomeScreen:

Exibe a lista de tarefas recuperadas da API através de uma requisição GET para /tarefas.
Cada tarefa é apresentada com sua descrição e status, e há botões para editar ou excluir a tarefa.
Possui um botão para adicionar uma nova tarefa, que leva à tela de NovaTarefaScreen.
Ao excluir uma tarefa, a lista é recarregada para refletir a remoção.
NovaTarefaScreen:

Tela para adicionar uma nova tarefa.
Possui campos para inserir a descrição e o status da tarefa. Ao pressionar o botão "Adicionar Tarefa", é feita uma requisição POST para /tarefas com os dados da nova tarefa.
Após o sucesso da criação, a tela retorna à HomeScreen.
EditarTarefaScreen:

Tela para editar uma tarefa existente.
Recebe a tarefa a ser editada (ID, descrição e status) da HomeScreen por meio de parâmetros de navegação.
Permite alterar a descrição e o status da tarefa e, ao pressionar "Atualizar Tarefa", é feita uma requisição PUT para /tarefas/:id com os novos dados.
Caso a atualização seja bem-sucedida, a tela retorna à HomeScreen.
3. Funcionalidades de Interação com o Backend
As funcionalidades de interação entre o frontend e o backend incluem:

Adicionar Tarefa:

A partir da NovaTarefaScreen, ao inserir a descrição e o status, uma requisição POST é feita para o backend para criar a nova tarefa. A tarefa é então exibida na HomeScreen.
Editar Tarefa:

Na HomeScreen, ao clicar em "Editar", o usuário é direcionado para a EditarTarefaScreen, onde pode modificar a descrição e o status da tarefa. Após a modificação, uma requisição PUT é feita para atualizar a tarefa no backend.
Deletar Tarefa:

Na HomeScreen, ao clicar em "Deletar", uma requisição DELETE é feita para remover a tarefa selecionada do backend.
Carregar Tarefas:

Na HomeScreen, ao carregar a página ou ao voltar da edição ou exclusão de uma tarefa, é feita uma requisição GET para obter todas as tarefas armazenadas no backend. A lista é então exibida no aplicativo.
