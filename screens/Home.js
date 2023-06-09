import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Text,
  Heading,
  Box,
  Image,
  Divider,
} from "native-base";
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
        <Divider style={{ backgroundColor: "white", marginBottom: -60 }} />
        <Image
          source={require("../assets/drone.gif")}
          alt='Drone'
          width={400}
          height={400}
          resizeMode='contain'
          style={{ marginBottom: 20 }}
        />
        <Divider
          style={{ backgroundColor: "white", marginBottom: 20, marginTop: -80 }}
        />
      </Container>
      <View style={styles.bottomContainer}>
        <Heading style={styles.text}>{currentTime}</Heading>
        <Heading style={styles.header}>{greeting}!</Heading>
        <Text style={styles.subheader}>Manage your tasks</Text>
        <Button
          size='lg'
          onPress={handleStart}
          colorScheme='primary'
          _text={{ color: "white", fontWeight: "bold" }}>
          <Text fontSize='xl'>Get Started</Text>
        </Button>
      </View>
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
    marginBottom: 240,
    backgroundColor: "#333333", // Dark Grey Background Color
  },
  bottomContainer: {
    width: "100%",
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 40,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "whitesmoke", // Dark Grey Background Color
  },
  text: {
    marginBottom: 0,
    textAlign: "center",
    color: "black",
  },
  header: {
    paddingTop: 20,
    fontFamily: "Roboto-Black",
    textAlign: "left",
    color: "lightblue",
    fontSize: 60,
    lineHeight: 40,
  },
  subheader: {
    paddingTop: 20,
    paddingBottom: 20,
    textTransform: "uppercase",
    color: "black",
    fontSize: 30,
    fontFamily: "Roboto-Light",
    lineHeight: 30,
  },
  buttonText: {
    color: "white",
  },
});

export default Home;
