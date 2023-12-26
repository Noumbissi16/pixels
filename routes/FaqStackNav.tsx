import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FAQ from "../screens/FAQ";
import { RootStackParamList } from "../types";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Stack = createStackNavigator<RootStackParamList>();

const FaqStackNav = () => {
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
        name="FAQ"
        component={FAQ}
        options={({ navigation }) => ({
          title: "FAQ",
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
    </Stack.Navigator>
  );
};

export default FaqStackNav;
