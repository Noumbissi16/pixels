import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "../styles/Colors";

const CustomSwitch: React.FC<{
  label: string;
  value: boolean;
  handleSwitch: Function;
}> = ({ label, value, handleSwitch }) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={(val) => handleSwitch(val)}
        trackColor={{ false: Colors.lightGrey, true: Colors.clicked }}
        thumbColor={Colors.white}
      />
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  settingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  settingsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "InriaSans_400Regular",
  },
});
