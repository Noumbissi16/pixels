import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    fontSize: 20,
    fontFamily: "InriaSans_300Light",
  },
  titleText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  profileImg: {
    width: width * 0.8,
    height: 250,
    borderRadius: 14,
  },
  profileItem: {
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans_700Bold_Italic",
    fontSize: 25,
  },
});

export default styles;
