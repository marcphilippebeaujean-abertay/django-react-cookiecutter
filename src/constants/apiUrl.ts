export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/api/"
    : document.location.origin + "/api/";
export const API_RESTAUTH_URL = API_URL + "rest-auth/";
export const API_REGISTRATION_URL = API_RESTAUTH_URL + "registration/";

// Specific endpoints
export const API_LOGIN_URL = API_RESTAUTH_URL + "login/";
export const API_LOGOUT_URL = API_RESTAUTH_URL + "logout/";
export const API_CONFIRM_EMAIL = API_REGISTRATION_URL + "verify-email/";
export const API_PROFILE_URL = API_URL + "account-details/";

export const API_PASSWORD_REQUEST = API_RESTAUTH_URL + "password/";
export const API_PASSWORD_RESET_REQUEST = API_PASSWORD_REQUEST + "reset/";
export const API_PASSWORD_RESET_CONFIRM =
  API_PASSWORD_RESET_REQUEST + "confirm/";
