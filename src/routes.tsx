import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import About from "./pages/About";

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
