import {ADD_USER_VALUE } from "./types";

export const userInputValue = (value) => ({
  type: ADD_USER_VALUE,
  payload: value
});