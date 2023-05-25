import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./navigation/Nav";

export default function App() {
  return (
    <NativeBaseProvider>
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
