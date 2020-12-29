export const START_USER_SESSION = "startUserSession";
export const END_USER_SESSION = "endUserSession";

export interface UserState {
  username: string | null; //name of user
  sessionActive: boolean; //checks if session is active
  authToken: string | null; //current JWT for login
  loginTime: string | null; //time user logged in
  tenantDomain: string | null; //assigned at login to identify the tenant that user session belongs to
}

export interface StartUserSessionAction {
  type: typeof START_USER_SESSION;
  payload: UserState;
}

export interface EndUserSessionAction {
  type: typeof END_USER_SESSION;
}
