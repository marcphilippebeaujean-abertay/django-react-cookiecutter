import * as alertTypes from "./alertTypes";

export const initialState: alertTypes.AlertState = {
  successAlerts: [],
  negativeAlerts: [],
  lastAlertUrlPath: "",
  pendingApiCalls: []
};

export default (
  previousState: alertTypes.AlertState = initialState,
  action:
    | alertTypes.ClearAllAlerts
    | alertTypes.SetNegativeAlerts
    | alertTypes.SetSuccessAlerts
    | alertTypes.AddPendingApiCall
    | alertTypes.RemovePendingApiCall
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
    case alertTypes.CLEAR_ALERTS:
      return initialState;
    case alertTypes.ADD_PENDING_API_CALL:
      return {
        ...previousState,
        pendingApiCalls: [...previousState.pendingApiCalls, action.apiCallId]
      }
      case alertTypes.REMOVE_PENDING_API_CALL:
        return {
          ...previousState,
          pendingApiCalls: previousState.pendingApiCalls.filter(x => x !== action.apiCallId)
        }
  }
  return previousState;
};
