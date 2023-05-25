import React, { useEffect, useState } from "react";
import { Container, Button, Text, Heading } from "native-base";
import { StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("Todos");
  };

  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const currentHour = new Date().getHours();
      setCurrentTime(currentTime);

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    getCurrentTime();
  }, []);

  return (
    <View style={styles.container}>
      <Container style={styles.contentContainer}>
        <Heading style={styles.text}>{currentTime}</Heading>
        <Heading style={styles.text}>{greeting}</Heading>
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
