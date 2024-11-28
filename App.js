import "react-native-gesture-handler"; // Deve ser o primeiro import
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import NovaTarefaScreen from "./screens/NovaTarefaScreen";
import EditarTarefaScreen from "./screens/EditarTarefaScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nova Tarefa" component={NovaTarefaScreen} />
        <Stack.Screen name="Editar Tarefa" component={EditarTarefaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
