import { SET_SELECTION } from "../constants";

const setSelection = (id: string) => {
  return {
    type: SET_SELECTION,
    payload: id,
  };
};

export default setSelection;
