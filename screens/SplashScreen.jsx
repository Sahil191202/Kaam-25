import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Language");
    }, 5000); // 5 seconds
  }, []);
  return (
    <View style={splashStyles.container}>
      <Image
        source={require("../assets/images/kaam25.png")}
        style={splashStyles.logo}
      />
      <Text style={splashStyles.title}>KAAM25</Text>
    </View>
  );
}
// styles omitted for brevity
const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f00001",
  },
  
});
