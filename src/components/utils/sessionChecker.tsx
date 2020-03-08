import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { login } from "../views/userAccess/userAccessLinks";
import { useUserAuthSelector } from "../../state/typedSelectors";
import { sendLogoutRequest } from "../../state/userAuthState/userAuthActions";
import { setNegativeAlerts } from "../../state/alertsState/alertActions";

const SESSION_DURATION = 7;

export default () => {
  const { loginTime, authToken } = useUserAuthSelector(
    state => state.userAuthReducer
  );
  const dispatch = useDispatch();
  const initLogout = () => {
    dispatch(sendLogoutRequest(authToken));
    dispatch(push(login.link));
    dispatch(
      setNegativeAlerts(["Your session has expired - please log back in."])
    );
  };

  if (loginTime !== null) {
    const lastLoginUnixTime = Date.parse(loginTime);
    const sessionEndTime =
      1000 * 60 * 60 * SESSION_DURATION + lastLoginUnixTime;
    if (sessionEndTime < Date.now()) {
      initLogout();
    } else {
      setTimeout(initLogout, sessionEndTime - Date.now());
    }
  }
  return <div />;
};
