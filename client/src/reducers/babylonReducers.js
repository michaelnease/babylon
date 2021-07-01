import { APP_BOOT } from "../constants/actionTypes";

const initialState = {
  meta: {
    site: "Babylon",
    version: "0.0.1",
  },
};

const babylonReducer = (state = initialState.meta, action) => {
  switch (action.type) {
    case APP_BOOT:
      return { ...state, site: action.payload };
    default:
      return state;
  }
};

export default babylonReducer;
