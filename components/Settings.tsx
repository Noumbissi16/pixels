import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import Colors from "../styles/Colors";
import CustomSwitch from "./CustomSwitch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import setCategorySetting from "../redux/actions/actionSettings";

const Settings: React.FC<{ closeModal: Function }> = ({ closeModal }) => {
  const [ispaysagesNaturels, setIspaysagesNaturels] = useState(true);
  const [isArtAbstrait, setIsArtAbstrait] = useState(true);
  const [isnatureVintage, setisnatureVintage] = useState(true);
  const [isUrbainEnchanter, setisUrbainEnchanter] = useState(true);
  function selector() {
    return (state: RootState) => state.users.users;
  }
  const users = useSelector(selector());

  const dispatch = useDispatch();

  const saveSettings = useCallback(() => {
    const savedSettings = {
      paysagesNaturels: ispaysagesNaturels,
      artAbstrait: isArtAbstrait,
      natureVintage: isnatureVintage,
      urbainEnchanter: isUrbainEnchanter,
    };
    dispatch(setCategorySetting(savedSettings));
    closeModal();
  }, [ispaysagesNaturels, isArtAbstrait, isnatureVintage, isUrbainEnchanter]);

  return (
    <View style={styles.container}>
      <Text style={styles.settingTitle}>Reglages</Text>
      <Text style={styles.settingText}>
        Utilisez les parametres ci-dessous pour gere les categories a afficher
      </Text>
      <View style={styles.separator} />
      {users.map((user) => {
        return (
          <CustomSwitch
            key={user.id}
            label={user.category}
            value={
              user.category == "Paysages Naturels"
                ? ispaysagesNaturels
                : user.category == "Art Abstrait"
                ? isArtAbstrait
                : user.category == "Nature et Vintage"
                ? isnatureVintage
                : isUrbainEnchanter
            }
            handleSwitch={(newVal: boolean) =>
              user.category == "Paysages Naturels"
                ? setIspaysagesNaturels(newVal)
                : user.category == "Art Abstrait"
                ? setIsArtAbstrait(newVal)
                : user.category == "Nature et Vintage"
                ? setisnatureVintage(newVal)
                : setisUrbainEnchanter(newVal)
            }
          />
        );
      })}

      {ispaysagesNaturels === false &&
      isArtAbstrait === false &&
      isnatureVintage === false &&
      isUrbainEnchanter === false ? (
        <Text
          style={{
            ...styles.settingText,
            color: Colors.clicked,
            textAlign: "center",
          }}
        >
          Veliier Choisir une categorie
        </Text>
      ) : (
        <Pressable onPress={saveSettings}>
          <Text
            style={{
              ...styles.settingText,
              color: Colors.white,
              textAlign: "center",
              backgroundColor: Colors.clicked,
              borderRadius: 4,
            }}
          >
            Valider les parametres
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 20,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
    textAlign: "center",
    margin: 16,
    textTransform: "uppercase",
  },
  settingText: {
    fontSize: 18,
    padding: 9,
    fontFamily: "InriaSans_300Light",
  },
  separator: {
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
    width: "100%",
    marginVertical: 15,
  },
});
