import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import api from "../api";

export default function EditarTarefaScreen({ route, navigation }) {
  // Dados recebidos da HomeScreen
  const { id, descricaoInicial, statusInicial } = route.params;

  // Estados para edição
  const [descricao, setDescricao] = useState(descricaoInicial);
  const [status, setStatus] = useState(statusInicial);

  const atualizarTarefa = () => {
    if (!descricao) {
      Alert.alert("Erro", "A descrição não pode estar vazia.");
      return;
    }

    api
      .put(`/tarefas/${id}`, { descricao, status })
      .then(() => {
        Alert.alert("Sucesso", "Tarefa atualizada com sucesso.");
        navigation.goBack(); // Voltar para a tela anterior
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível atualizar a tarefa.");
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
      <Button title="Atualizar Tarefa" onPress={atualizarTarefa} />
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
