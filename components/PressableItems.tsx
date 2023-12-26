import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "../styles/AppStyles";
import { PressableProps } from "../types";
import Colors from "../styles/Colors";

const PressableItems: React.FC<PressableProps> = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Portfolio", item)}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        styles.profileItem,
      ]}
    >
      <Text style={styles.titleText}>{item.name}</Text>
      <Image
        source={{
          uri: item.img,
        }}
        style={styles.profileImg}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{item.country}</Text>
        <Text style={styles.info}>{item.totalImg}</Text>
        <Text></Text>
      </View>
    </Pressable>
  );
};

export default PressableItems;
