import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import Colors from "../styles/Colors";

const MaterialIconsHeader = (props: HeaderButtonProps) => {
  return (
    <HeaderButton
      IconComponent={MaterialIcons}
      iconSize={23}
      color={Colors.white}
      {...props}
    />
  );
};

export default MaterialIconsHeader;

const styles = StyleSheet.create({});
