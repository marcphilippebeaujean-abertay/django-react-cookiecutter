import React from "react";
import { Alert } from "react-bootstrap";

import {
  useAlertsSelector,
  useRouterSelector
} from "../../state/typedSelectors";
import { clearAlerts } from "../../state/alertsState/alertActions";
import { useDispatch } from "react-redux";

export default () => {
  const reducerState = useAlertsSelector(state => state.alertsReducer);
  const currentUrlPathname = useRouterSelector(
    state => state.router.location.pathname
  );

  if (
    reducerState.lastAlertUrlPath !== currentUrlPathname &&
    reducerState.lastAlertUrlPath !== ""
  ) {
    const dispatch = useDispatch();
    dispatch(clearAlerts());
  }

  return (
    <div>
      {reducerState.successAlerts.map(alert => (
        <Alert key={alert + "key"} variant={"success"}>
          {alert}
        </Alert>
      ))}
      {reducerState.negativeAlerts.map(alert => (
        <Alert key={alert + "key"} variant={"danger"}>
          {alert}
        </Alert>
      ))}
    </div>
  );
};
