const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tarefas = []; // Array para armazenar tarefas

app.post("/tarefas", (req, res) => {
  const { id, descricao, status } = req.body;
  tarefas.push({ id, descricao, status });
  console.log("Tarefa recebida:", { id, descricao, status }); // Verifique os dados recebidos
  res.status(201).send("Tarefa adicionada.");
});

// Rota para listar todas as tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// Rota para atualizar uma tarefa existente
app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;
  const tarefa = tarefas.find((t) => t.id === parseInt(id));
  if (tarefa) {
    tarefa.descricao = descricao;
    tarefa.status = status;
    res.send("Tarefa atualizada.");
  } else {
    res.status(404).send("Tarefa não encontrada.");
  }
});

// Rota para deletar uma tarefa
app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  tarefas = tarefas.filter((t) => t.id !== parseInt(id));
  res.send("Tarefa removida.");
});

// Inicializa o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
