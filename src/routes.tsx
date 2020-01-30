import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main
    },
    {
      defaultNavigationOptions: {
        headerShown: true,
        headerTitle: () => null,
        headerTintColor: "#eee",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerTransparent: true
      }
    }
  )
);

export default Routes;
