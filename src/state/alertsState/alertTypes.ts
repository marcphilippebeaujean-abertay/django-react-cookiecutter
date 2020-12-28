export const SET_SUCCESS_ALERTS = "setSuccessAlerts";
export const SET_NEGATIVE_ALERTS = "setNegativeAlerts";
export const ADD_PENDING_API_CALL = "addPendingApiCall";
export const REMOVE_PENDING_API_CALL = "removePendingApiCall";
export const CLEAR_ALERTS = "clearAlerts";

export type LOADING_STATES = "loading" | "loaded" | "finishing";

export interface AlertState {
  successAlerts: Array<String>;
  negativeAlerts: Array<String>;
  lastAlertUrlPath: string;
  pendingApiCalls: Array<String>;
}

export interface SetSuccessAlerts {
  type: typeof SET_SUCCESS_ALERTS;
  payload: Array<String>;
}

export interface SetNegativeAlerts {
  type: typeof SET_NEGATIVE_ALERTS;
  payload: Array<String>;
}

export interface ClearAllAlerts {
  type: typeof CLEAR_ALERTS;
}

export interface AddPendingApiCall {
  type: typeof ADD_PENDING_API_CALL;
  apiCallId: string;
}

export interface RemovePendingApiCall {
  type: typeof REMOVE_PENDING_API_CALL;
  apiCallId: string;
}
