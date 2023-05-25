import { NativeBaseProvider, extendTheme } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./navigation/Nav";

export default function App() {
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: "Roboto-Thin",
        },
        200: {
          normal: "Roboto-Light",
        },
        300: {
          normal: "Roboto-Light",
        },
        400: {
          normal: "Roboto-Regular",
        },
        500: {
          normal: "Roboto-Medium",
        },
        600: {
          normal: "Roboto-Medium",
        },
        700: {
          normal: "Roboto-Bold",
        },
        800: {
          normal: "Roboto-BoldItalic",
        },
      },
    },
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    },
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
