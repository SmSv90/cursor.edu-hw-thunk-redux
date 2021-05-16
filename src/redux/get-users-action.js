import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR } from "./types";

export const getUsers = () => async ( dispatch, getState ) => {
  dispatch({
    type: GET_USERS_REQUEST
  });

  const response = await fetch("https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users");
  const users = await response.json();
  
  if (!response.ok) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: users.data
    });
    return;
  }
    
  dispatch({
    type: GET_USERS_SUCCESS,
    payload: users.data
  });
}

