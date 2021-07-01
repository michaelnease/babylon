import { CHARACTER_GET_CHARACTERS } from "../constants/actionTypes";

const initialState = {
  all: [],
  count: false,
};

const characterReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_GET_CHARACTERS:
      const { results, count } = action.payload;
      return { ...state, all: results, count };
    default:
      return state;
  }
};

export default characterReducers;
