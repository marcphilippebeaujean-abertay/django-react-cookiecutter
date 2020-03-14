import * as alertTypes from "./alertTypes";

export const initialState: alertTypes.AlertState = {
  successAlerts: [],
  negativeAlerts: [],
  lastAlertUrlPath: "",
  loadingAlertState: "loaded"
};

export default (
  previousState: alertTypes.AlertState = initialState,
  action:
    | alertTypes.ClearAllAlerts
    | alertTypes.SetNegativeAlerts
    | alertTypes.SetSuccessAlerts
    | alertTypes.SetLoadingAlertVisibility
): alertTypes.AlertState => {
  switch (action.type) {
    case alertTypes.SET_NEGATIVE_ALERTS:
      return {
        ...previousState,
        lastAlertUrlPath: document.location.pathname,
        negativeAlerts: action.payload
      };
    case alertTypes.SET_SUCCESS_ALERTS:
      return {
        ...previousState,
        lastAlertUrlPath: document.location.pathname,
        successAlerts: action.payload
      };
    case alertTypes.SET_LOADING_ALERT_VISIBILITY:
      return {
        ...previousState,
        loadingAlertState: action.showAlert
      };
    case alertTypes.CLEAR_ALERTS:
      return initialState;
  }
  return previousState;
};
