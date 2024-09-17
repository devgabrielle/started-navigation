import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useAuth } from "../../contexts/Auth";
import { styles } from "./styles";
import { Button } from "react-native-paper";

export function ProfileScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity style={{ backgroundColor: "red" }} onPress={signOut}>
        <Text>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}
