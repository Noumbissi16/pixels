import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Photo from "../screens/Photo";
import Portfolio from "../screens/Portfolio";
import Colors from "../styles/Colors";
import { RootStackParamList } from "../types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightBrown,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Accueil",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
              <Item
                title="Menu"
                iconName="menu"
                iconSize={30}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={({ route }) => ({
          title: `Profile de ${route.params.name}`,
          headerStyle: {
            backgroundColor: route.params.favColor,
          },
        })}
      />
      <Stack.Screen
        name="Photo"
        component={Photo}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
