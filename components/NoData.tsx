import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../styles/Colors";

const NoData: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_640.jpg",
      }}
      style={styles.emptyWrapper}
    >
      <Text style={styles.txt}>{children}</Text>
    </ImageBackground>
  );
};

export default NoData;

const styles = StyleSheet.create({
  emptyWrapper: {
    flex: 1,
    backgroundColor: Colors.lightBrown,
  },
  txt: {
    textAlign: "center",
    marginTop: 50,
    color: Colors.white,
    fontSize: 23,
  },
});
