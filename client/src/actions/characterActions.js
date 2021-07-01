import axios from "axios";

import { CHARACTER_GET_CHARACTERS } from "../constants/actionTypes";

export const allcharacters = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      const { count, results } = response?.data;
      return dispatch({
        type: CHARACTER_GET_CHARACTERS,
        payload: {
          count,
          results,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
