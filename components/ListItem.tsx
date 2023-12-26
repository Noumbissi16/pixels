import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PersonData, RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "../styles/Colors";

const ListItem: React.FC<{
  items: PersonData;
  navigation: StackNavigationProp<RootStackParamList, "Selected">;
}> = ({ items, navigation }) => {
  return (
    <View>
      {items.photos.map((photo) => {
        return (
          <View key={photo.id} style={styles.photoContainer}>
            <Pressable onPress={() => navigation.navigate("Photo", photo)}>
              <View>
                <Image source={{ uri: photo.url }} style={styles.img} />
                <Text style={styles.photoTitleTxt}>{photo.title}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: 350,
    marginBottom: 9,
    // justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "90%",
  },
  photoTitleTxt: {
    fontFamily: "InriaSans_300Light",
    fontSize: 19,
    // color: Colors.white,
  },
});
