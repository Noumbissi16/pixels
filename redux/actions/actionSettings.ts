import { appSetting } from "../../types";
import { SET_SETTINGS } from "../constants";

const setCategorySetting = (setting: appSetting) => {
  return {
    type: SET_SETTINGS,
    payload: setting,
  };
};

export default setCategorySetting;
