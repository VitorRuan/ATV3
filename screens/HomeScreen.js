import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native"; // Usar para recarregar quando voltar à tela
import api from "../api";

export default function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  // Função para carregar as tarefas
  const carregarTarefas = () => {
    api
      .get("/tarefas")
      .then((response) => setTarefas(response.data))
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível carregar as tarefas.");
      });
  };

  // Carregar tarefas ao acessar a tela
  useEffect(() => {
    carregarTarefas();
  }, []);

  // Recarregar tarefas ao voltar para a HomeScreen
  useFocusEffect(
    React.useCallback(() => {
      carregarTarefas(); // Recarregar as tarefas
    }, [])
  );

  // Função para deletar tarefa
  const deletarTarefa = (id) => {
    api
      .delete(`/tarefas/${id}`)
      .then(() => {
        Alert.alert("Sucesso", "Tarefa removida!");
        carregarTarefas(); // Recarregar a lista após remoção
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível remover a tarefa.");
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.descricao} - {item.status}
            </Text>
            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate("Editar Tarefa", {
                  id: item.id,
                  descricaoInicial: item.descricao,
                  statusInicial: item.status,
                })
              }
            />
            <Button title="Deletar" onPress={() => deletarTarefa(item.id)} />
          </View>
        )}
      />
      <Button
        title="Adicionar Tarefa"
        onPress={() => navigation.navigate("Nova Tarefa")}
      />
      {/* Botão de Recarregar Tarefas */}
      <Button title="Recarregar Tarefas" onPress={carregarTarefas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
  },
});
