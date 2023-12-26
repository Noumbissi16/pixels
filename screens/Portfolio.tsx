import { Alert, Image, StyleSheet, Text, View } from "react-native";
import styles from "../styles/AppStyles";
import { Photo, PortfolioScreenProps } from "../types";
import { ScrollView } from "react-native";
import Colors from "../styles/Colors";
import PressableImg from "../components/PressableImg";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import setSelection from "../redux/actions/actionSelection";
import { RootState } from "../redux/store";

const Portfolio: React.FC<PortfolioScreenProps> = ({ navigation, route }) => {
  const { name, desc, img, photos, favColor, id } = route.params;
  function onSelectedPhoto(photo: Photo) {
    navigation.navigate("Photo", photo);
  }
  const dispatch = useDispatch();

  const isSelectedUsers = useSelector((state: RootState) =>
    state.users.selectedUsers.some((user) => user.id === id)
  );

  // console.log("outside", isSelectedUsers);
  const handleSelectUserPhoto = useCallback(() => {
    dispatch(setSelection(id));
    if (isSelectedUsers) {
      Alert.alert(
        "Photo supprimée",
        `Les photos de ${name} ont ete bien supprimée de vos sélections`,
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Photo sélectionnée",
        "La photo a bien été sélectionnée et est disponible dans vos sélections",
        [{ text: "OK" }]
      );
    }
  }, [dispatch, id, isSelectedUsers]);
  // I'm not oblige to add isSelectedUsers as dependency array here because dispatch is already a dependency array and whenever a dispatch is triggered, the useEffect will be triggered as well

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
          <Item
            title={isSelectedUsers ? "Retirer" : "Ajouter"}
            iconName={isSelectedUsers ? "delete" : "thumb-up"}
            onPress={handleSelectUserPhoto}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, isSelectedUsers]);

  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: favColor, ...style.profileInfo }}>
        <Image style={style.smallProfileImg} source={{ uri: img }} />
        <Text style={style.profileName}>{name}</Text>
      </View>
      <View style={style.profileDesc}>
        <Text style={style.titleBio}>Bio</Text>
        <Text style={style.textBio}>{desc}</Text>
      </View>
      <View>
        {photos.map((photo) => {
          return (
            <View key={photo.id}>
              <PressableImg
                onSelectedPhoto={() => onSelectedPhoto(photo)}
                photo={photo}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Portfolio;

const style = StyleSheet.create({
  profileInfo: {
    alignItems: "center",
    padding: 10,
  },
  smallProfileImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profileName: {
    fontFamily: "InriaSans_700Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profileDesc: {
    backgroundColor: Colors.ghost,
    padding: 15,
  },
  titleBio: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold",
    padding: 9,
  },
  textBio: {
    fontFamily: "InriaSans_400Regular",
    padding: 9,
    fontSize: 20,
  },
});
