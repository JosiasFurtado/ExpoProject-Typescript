import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  TouchableOpacity
} from "react-native";
import s from "../../globalstyles";

interface TestLint {
  undefined;
}

type Props = {
  undefined;
};

const Main: React.FC<Props> = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[s.backgroundPrimary, s.flex1]}>
      <View style={[s.center, s.flex1]}>
        <Text style={[s.colorSecondary, s.center, s.txtBold]}>Main Page</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[s.center, s.buttonDefault, s.backgroundSecondary]}
        >
          <Text style={[s.colorSecondary, s.txtBold]}>Open Modal</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={s.backgroundModal}>
            <View
              style={[
                s.backgroundSecondary,
                s.marginModal,
                s.flex1,
                s.center,
                s.borderRadius
              ]}
            >
              <Text style={[s.colorSecondary, s.txtBold]}>Inside Modal</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[s.center, s.buttonDefault, s.backgroundPrimary]}
              >
                <Text style={[s.colorSecondary, s.txtBold]}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Main;
