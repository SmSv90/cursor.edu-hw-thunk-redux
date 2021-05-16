import { ADD_USER_VALUE } from "./types";

const user = {};

export const userInputValueReducer = (state = user, action) => {
  switch (action.type) {
    case ADD_USER_VALUE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
} 