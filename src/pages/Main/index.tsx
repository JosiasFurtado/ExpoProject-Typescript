import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import s from "../../globalstyles";

const Main: React.FC = () => {
  return (
    <SafeAreaView style={[s.backgroundPrimary, s.flex1]}>
      <View style={[s.center, s.flex1]}>
        <Text style={[s.colorSecondary, s.center, s.txtBold]}>Main Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
