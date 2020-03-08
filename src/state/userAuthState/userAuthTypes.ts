export const START_USER_SESSION = "startUserSession";
export const END_USER_SESSION = "endUserSession";

export interface UserState {
  username: string | null;
  sessionActive: boolean;
  authToken: string | null;
  loginTime: string | null;
}

export interface StartUserSessionAction {
  type: typeof START_USER_SESSION;
  payload: UserState;
}

export interface EndUserSessionAction {
  type: typeof END_USER_SESSION;
}
