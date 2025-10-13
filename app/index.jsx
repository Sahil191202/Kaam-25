import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "../i18n";
import JobsScreen from "../screens/JobsScreen";
import LanguageScreen from "../screens/LanguageScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Jobs" component={JobsScreen} />
      </Stack.Navigator>
    </>
  );
}
