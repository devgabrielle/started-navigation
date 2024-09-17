import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../pages/SignInScreen/SignInScreen";
import { useTheme } from "react-native-paper";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.surfaceVariant,
        headerStyle: {
          backgroundColor: theme.colors.onSurfaceVariant,
        },
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}