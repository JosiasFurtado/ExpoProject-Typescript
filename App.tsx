import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        hidden={false}
      />
      <Routes />
    </>
  );
};

export default App;
