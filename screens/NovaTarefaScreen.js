import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import api from "../api";

export default function NovaTarefaScreen({ navigation }) {
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("pendente");

  const adicionarTarefa = () => {
    if (!descricao) {
      Alert.alert("Erro", "A descrição não pode estar vazia.");
      return;
    }

    const novaTarefa = { id: Date.now(), descricao, status };

    api
      .post("/tarefas", novaTarefa)
      .then(() => {
        Alert.alert("Sucesso", "Tarefa adicionada com sucesso!");
        // Volta para a HomeScreen e força o recarregamento da lista
        navigation.goBack(); // Volta para a tela anterior, que é a HomeScreen
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível adicionar a tarefa.");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descrição da Tarefa"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Status (pendente/completa)"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});
