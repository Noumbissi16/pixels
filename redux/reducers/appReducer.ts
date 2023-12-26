import data from "../../assets/data/data";
import { AppAction, AppState } from "../../types";
import { SET_SELECTION, SET_SETTINGS } from "../constants";

const initialState: AppState = {
  users: data,
  selectedUsers: [],
  selectedCategories: data,
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case SET_SELECTION:
      const indexResult = state.selectedUsers.findIndex(
        (user) => user.id === action.payload
      );

      if (indexResult !== -1) {
        const newSelectedUsers = [...state.selectedUsers];

        newSelectedUsers.splice(indexResult, 1);

        return {
          ...state,
          selectedUsers: newSelectedUsers,
        };
      } else {
        const user = state.users.find((user) => user.id === action.payload);

        if (!user) return state;

        return {
          ...state,
          selectedUsers: state.selectedUsers.concat(user),
        };
      }

    case SET_SETTINGS:
      const usedSettings = action.payload;
      const selectedUsersByCategory = state.users.filter((user) => {
        if (
          usedSettings.paysagesNaturels &&
          user.category == "Paysages Naturels"
        )
          return true;
        if (usedSettings.artAbstrait && user.category == "Art Abstrait")
          return true;
        if (usedSettings.natureVintage && user.category == "Nature et Vintage")
          return true;
        if (
          usedSettings.urbainEnchanter &&
          user.category == "Urbain et Enchanté"
        )
          return true;
      });

      return {
        ...state,
        selectedCategories: selectedUsersByCategory,
      };

    default:
      break;
  }
  return state;
};

export default appReducer;
