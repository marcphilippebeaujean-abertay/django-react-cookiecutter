import * as userTypes from "./userAuthTypes";
import { TENANT_DOMAIN_KEY } from '../../constants/localStorageKeys';
import {
  AUTH_TOKEN_KEY,
  USERNAME_KEY,
  LOGIN_TIME_KEY
} from "../../constants/localStorageKeys";
import { extractTenantDomain } from "./userAuthActions";

const isSessionActive = () => {
  if(localStorage.getItem(USERNAME_KEY) === null ||
    localStorage.getItem(AUTH_TOKEN_KEY) === null) {
    return false;
  }
  const tenantDomain = localStorage.getItem(TENANT_DOMAIN_KEY);
  if(tenantDomain === null) {
    return false;
  }else {
    return tenantDomain === extractTenantDomain();
  }
}

export const initialState: userTypes.UserState = {
  username: localStorage.getItem(USERNAME_KEY),
  sessionActive: isSessionActive(),
  authToken: localStorage.getItem(AUTH_TOKEN_KEY),
  loginTime: localStorage.getItem(LOGIN_TIME_KEY),
  tenantDomain: localStorage.getItem(TENANT_DOMAIN_KEY)
};

const loggedOutState: userTypes.UserState = {
  username: null,
  sessionActive: false,
  authToken: null,
  loginTime: null,
  tenantDomain: null
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
