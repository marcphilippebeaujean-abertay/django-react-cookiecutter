import * as userTypes from "./userAuthTypes";
import {
  AUTH_TOKEN_KEY,
  USERNAME_KEY,
  LOGIN_TIME_KEY
} from "../../constants/localStorageKeys";

export const initialState: userTypes.UserState = {
  username: localStorage.getItem(USERNAME_KEY),
  sessionActive:
    localStorage.getItem(USERNAME_KEY) !== null &&
    localStorage.getItem(AUTH_TOKEN_KEY) !== null,
  authToken: localStorage.getItem(AUTH_TOKEN_KEY),
  loginTime: localStorage.getItem(LOGIN_TIME_KEY)
};

const loggedOutState: userTypes.UserState = {
  username: null,
  sessionActive: false,
  authToken: null,
  loginTime: null
};

export default (
  previousState: userTypes.UserState = initialState,
  action: userTypes.StartUserSessionAction | userTypes.EndUserSessionAction
): userTypes.UserState => {
  switch (action.type) {
    case userTypes.START_USER_SESSION:
      return action.payload;
    case userTypes.END_USER_SESSION:
      return loggedOutState;
  }
  return previousState;
};
