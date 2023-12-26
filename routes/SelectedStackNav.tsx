import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Selected from "../screens/Selected";
import { RootStackParamList } from "../types";
import Photo from "../screens/Photo";
import Colors from "../styles/Colors";

const Stack = createStackNavigator<RootStackParamList>();

const SelectedStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.darkGrey,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={{
          title: "Favoris",
        }}
      />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
};

export default SelectedStackNav;
