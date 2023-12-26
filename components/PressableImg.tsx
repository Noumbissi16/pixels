import {
  GestureResponderEvent,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Photo } from "../types";
import Colors from "../styles/Colors";

const PressableImg: React.FC<{
  photo: Photo;
  onSelectedPhoto: (event: GestureResponderEvent) => void;
}> = ({ photo, onSelectedPhoto }) => {
  return (
    <View style={styles.photoContainer}>
      <Pressable onPress={onSelectedPhoto}>
        <ImageBackground source={{ uri: photo.url }} style={styles.img}>
          <View style={styles.photoTitle}>
            <Text style={styles.photoTitleTxt}>{photo.title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default PressableImg;

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: 350,
    marginBottom: 9,
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  photoTitle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 15,
  },
  photoTitleTxt: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 19,
    color: Colors.white,
  },
});
