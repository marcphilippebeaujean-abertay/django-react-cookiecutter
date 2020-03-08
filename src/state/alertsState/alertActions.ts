import * as types from "./alertTypes";

export const setSuccessAlerts = (
  alerts: Array<String>
): types.SetSuccessAlerts => {
  return {
    type: types.SET_SUCCESS_ALERTS,
    payload: alerts
  };
};

export const setNegativeAlerts = (
  alerts: Array<String>
): types.SetNegativeAlerts => {
  return {
    type: types.SET_NEGATIVE_ALERTS,
    payload: alerts
  };
};

export const clearAlerts = (): types.ClearAllAlerts => {
  return {
    type: types.CLEAR_ALERTS
  };
};

export const setLoadingAlertVisibility = (
  showLoadingAlert: types.LOADING_STATES
): types.SetLoadingAlertVisibility => {
  return {
    type: types.SET_LOADING_ALERT_VISIBILITY,
    showAlert: showLoadingAlert
  };
};
