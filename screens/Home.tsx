import { FlatList, Modal, StyleSheet, Switch, Text, View } from "react-native";
import styles from "../styles/AppStyles";
import data from "../assets/data/data";
import PressableItems from "../components/PressableItems";
import { HomeScreenNavigation } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import Colors from "../styles/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Settings from "../components/Settings";

const Home: React.FC<HomeScreenNavigation> = ({ navigation }) => {
  const selectedCategories = useSelector(
    (state: RootState) => state.users.selectedCategories
  );

  const [isModalVisible, setisModalVisible] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
          <Item
            title="Reglages"
            iconName="settings"
            onPress={handleSettingsModal}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const handleSettingsModal = () => {
    setisModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={style.modalContainer}>
          <MaterialIcons
            name="close"
            size={24}
            color="black"
            style={style.modalClose}
            onPress={handleSettingsModal}
          />

          <Settings closeModal={handleSettingsModal} />
        </View>
      </Modal>
      <FlatList
        data={selectedCategories}
        renderItem={({ item }) => (
          <PressableItems item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.ghost,
    marginVertical: 50,
    padding: 15,
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
});
