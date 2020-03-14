export const SET_SUCCESS_ALERTS = "setSuccessAlerts";
export const SET_NEGATIVE_ALERTS = "setNegativeAlerts";
export const SET_LOADING_ALERT_VISIBILITY = "setLoadingAlertVisibility";
export const CLEAR_ALERTS = "clearAlerts";

export type LOADING_STATES = "loading" | "loaded" | "finishing";

export interface AlertState {
  successAlerts: Array<String>;
  negativeAlerts: Array<String>;
  lastAlertUrlPath: string;
  loadingAlertState: LOADING_STATES;
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

export interface SetLoadingAlertVisibility {
  type: typeof SET_LOADING_ALERT_VISIBILITY;
  showAlert: LOADING_STATES;
}
