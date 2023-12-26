import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PhotoScreenProps } from "../types";

const Photo: React.FC<PhotoScreenProps> = ({ navigation, route }) => {
  const { url, photodesc, title } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: url }} style={styles.img} />
      <View style={styles.photoDescSect}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{photodesc}</Text>
      </View>
    </ScrollView>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 250,
  },
  photoDescSect: {
    padding: 15,
  },
  title: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  desc: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 18,
  },
});
