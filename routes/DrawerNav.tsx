import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackNav from "./HomeStackNav";
import FAQ from "../screens/FAQ";
import FaqStackNav from "./FaqStackNav";
import Colors from "../styles/Colors";
import BottomNav from "./BottomNav";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeNav"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.clicked,
        drawerInactiveTintColor: Colors.white,
        drawerLabelStyle: { fontSize: 15 },
        drawerStyle: {
          width: 130,
          backgroundColor: "#333",
        },
      }}
    >
      <Drawer.Screen
        name="HomeNav"
        component={BottomNav}
        options={{ drawerLabel: "Accueil", headerShown: false }}
      />
      <Drawer.Screen
        name="Faq"
        component={FaqStackNav}
        options={{ drawerLabel: "FAQ" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
