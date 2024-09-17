import React from "react";
import { AuthProvider } from "./src/contexts/Auth";
import { Router } from "./src/routes/Routes";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import persistStore from "redux-persist/es/persistStore";


import { MD3LightTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import { darkTheme } from "./src/theme/darkTheme";
import { lightTheme } from "./src/theme/lightTheme";
import { useColorScheme } from "react-native";


let persistor = persistStore(store);

const App = () => {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: darkTheme.colors }
      : { ...MD3LightTheme, colors: lightTheme.colors };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
