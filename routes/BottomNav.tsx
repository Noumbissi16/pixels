import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNav from "./HomeStackNav";
import Selected from "../screens/Selected";
import { RootStackParamList } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import { Platform } from "react-native";
import { Text, BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import SelectedStackNav from "./SelectedStackNav";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.clicked,
      })}
      tabBar={({ navigation, state, descriptors, insets }) =>
        Platform.OS === "android" && (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              return options.tabBarLabel as string;
            }}
            activeColor={Colors.clicked}
          />
        )
      }
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNav}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Selected"
        component={SelectedStackNav}
        options={{
          tabBarLabel: "J'aime",
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="thumb-up" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
