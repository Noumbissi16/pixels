import "react-native-gesture-handler";
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";
import { useCallback } from "react";
import { StatusBar, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./routes/DrawerNav";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <DrawerNav />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </View>
  );
  // }
}
