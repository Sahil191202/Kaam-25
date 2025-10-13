import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Easing,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function LanguageScreen({ navigation }) {
  const { i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(true);
  const slideAnim = new Animated.Value(500); // start from bottom

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setModalVisible(false);
    navigation.replace("Register");
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <Animated.View
            style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}
          >
            <Text style={styles.title}>Select Your Preferred Language</Text>

            <Pressable
              style={({ hovered }) => [
                styles.button,
                hovered && styles.buttonHover,
              ]}
              onPress={() => changeLanguage("en")}
            >
              <Text style={styles.buttonText}>English</Text>
            </Pressable>

            <Pressable
              style={({ hovered }) => [
                styles.button,
                hovered && styles.buttonHover,
              ]}
              onPress={() => changeLanguage("hi")}
            >
              <Text style={styles.buttonText}>हिन्दी</Text>
            </Pressable>

            <Pressable
              style={({ hovered }) => [
                styles.button,
                hovered && styles.buttonHover,
              ]}
              onPress={() => changeLanguage("mr")}
            >
              <Text style={styles.buttonText}>मराठी</Text>
            </Pressable>

            <Pressable
              style={({ hovered }) => [
                styles.button,
                hovered && styles.buttonHover,
              ]}
              onPress={() => changeLanguage("gu")}
            >
              <Text style={styles.buttonText}>ગુજરાતી</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  button: {
    backgroundColor: "#f00001",
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonHover: {
    backgroundColor: "#6A040F",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
