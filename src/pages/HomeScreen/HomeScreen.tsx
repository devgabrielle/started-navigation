import React from "react";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Button } from "react-native-paper";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>

      <Button onPress={() => navigation.navigate("Profile")}>
        Ir para Configurações
      </Button>
      <Text>
        by <Text style={styles.coffText}>Oliver Gael</Text>
      </Text>
    </View>
  );
}