import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Button, Text } from "native-base";

const Home = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("Todos");
  };

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to Todos App</Text>
        <Text style={styles.description}>
          Start managing your tasks effortlessly!
        </Text>
        <Button block onPress={handleStart} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center",
  },
  heading: {
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    width: "100%",
  },
  buttonText: {
    color: "white",
  },
});

export default Home;
