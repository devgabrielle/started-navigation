import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../pages/HomeScreen/HomeScreen";
import { ProfileScreen } from "../pages/ProfileScreen/ProfileScreen";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export interface AppParamList {
  Home: undefined;
  Profile: undefined;
}
type TabBarOptions = {
  activeTintColor: string;
  inactiveTintColor: string;
  labelStyle: {
    fontSize: number;
    fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  };
};

const Tab = createBottomTabNavigator();

export function AppStack() {
  const theme = useTheme();

  const tabBarOptions = {
    activeTintColor: theme.colors.primary, // Cor do ícone ativo
    inactiveTintColor: theme.colors.secondary, // Cor do ícone inativo
    labelStyle: {
      fontSize: 10,
      fontWeight: "bold",
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home", // Rótulo da aba
          // Aqui você pode personalizar o ícone da aba se desejar
           tabBarIcon: ({ color, size }) => (
             <Ionicons name="home" color={color} size={size} />
           ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
             <Ionicons name="person" color={color} size={size} />
           ),
        }}
      />
    </Tab.Navigator>
  );
}