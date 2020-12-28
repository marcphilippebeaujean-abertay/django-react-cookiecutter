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


export const addPendingApiCall = (
  newApiCallId: string
): types.AddPendingApiCall => {
  return {
    type: types.ADD_PENDING_API_CALL,
    apiCallId: newApiCallId
  };
};

export const removePendingApiCall = (
  removeApiCallId: string
): types.RemovePendingApiCall => {
  return {
    type: types.REMOVE_PENDING_API_CALL,
    apiCallId: removeApiCallId
  };
};
