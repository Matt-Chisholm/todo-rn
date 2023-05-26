import { NativeBaseProvider, extendTheme } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import Nav from "./navigation/Nav";
import * as Font from "expo-font";

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
        "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
      });
    };

    loadFonts();
  }, []);

  const theme = extendTheme({
    colors: {
      primary: {
        500: "#00BCD4", // Blue
      },
      success: {
        500: "#4CAF50", // Green
      },
      danger: {
        500: "#FF5722", // Light Red
      },
    },
    config: {
      initialColorMode: "dark",
    },
    components: {
      Container: {
        baseStyle: {
          backgroundColor: "#333333", // Dark Grey
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Nav />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
