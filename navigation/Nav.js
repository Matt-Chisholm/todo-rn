import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Todos from "../screens/Todos";
import Stats from "../screens/Stats";

const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Todos' component={Todos} />
        <Stack.Screen name='Stats' component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
