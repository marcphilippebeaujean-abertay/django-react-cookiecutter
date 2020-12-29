import axios from "axios";
import * as types from "./userAuthTypes";
import {
  AUTH_TOKEN_KEY,
  USERNAME_KEY,
  LOGIN_TIME_KEY,
  TENANT_DOMAIN_KEY
} from "../../constants/localStorageKeys";
import { API_LOGOUT_URL } from "../../constants/apiUrl";

export const startUserSession = (
  authToken: string,
  username: string
): types.StartUserSessionAction => {
  localStorage.setItem(AUTH_TOKEN_KEY, authToken);
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(LOGIN_TIME_KEY, `${new Date()}`);
  const currentTenantDomain = extractTenantDomain();
  localStorage.setItem(TENANT_DOMAIN_KEY, currentTenantDomain);
  return {
    type: types.START_USER_SESSION,
    payload: {
      username: username,
      authToken: authToken,
      sessionActive: true,
      loginTime: `${new Date()}`,
      tenantDomain: currentTenantDomain
    }
  };
};

const endUserSession = (): types.EndUserSessionAction => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(LOGIN_TIME_KEY);
  localStorage.removeItem(TENANT_DOMAIN_KEY);
  return {
    type: types.END_USER_SESSION
  };
};

export const sendLogoutRequest = (authToken: string | null) => {
  return async (dispatch: Function) => {
    if (authToken !== null) {
      axios
        .post(
          API_LOGOUT_URL,
          {},
          {
            headers: { Authorization: `Token ${authToken}` }
          }
        )
        .catch(e => console.error(e));
    }
    dispatch(endUserSession());
  };
};

//example: https://test1.localhost.com becomes test1
export const extractTenantDomain= () =>  window.location.hostname.split(".")[0];
