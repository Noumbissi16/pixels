import { View, Text, FlatList } from "react-native";
import React from "react";
import { SelectedScreenNavigation } from "../types";
import { useSelector } from "react-redux";
import styles from "../styles/AppStyles";
import { RootState } from "../redux/store";
import NoData from "../components/NoData";
import ListItem from "../components/ListItem";

const Selected: React.FC<SelectedScreenNavigation> = ({
  navigation,
  route,
}) => {
  const selectedUsers = useSelector(
    (state: RootState) => state.users.selectedUsers
  );

  if (selectedUsers.length === 0) {
    return <NoData>Pas d'utilisateur a afficher</NoData>;
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={selectedUsers}
          renderItem={({ item }) => {
            return <ListItem items={item} navigation={navigation} />;
          }}
        />
      </View>
    );
  }
};

export default Selected;
