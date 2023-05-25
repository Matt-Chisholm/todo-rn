import React from "react";
import { Container, Button, Text } from "native-base";
import { StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("Todos");
  };

  return (
    <View style={styles.container}>
      <Container style={styles.contentContainer}>
        <Text style={styles.text}>Welcome to Todos App</Text>
        <Text style={styles.text}>Start managing your tasks effortlessly!</Text>
        <Button block onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </Button>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333", // Dark Grey Background Color
  },
  contentContainer: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#333333", // Dark Grey Background Color
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  buttonText: {
    color: "white",
  },
});

export default Home;
