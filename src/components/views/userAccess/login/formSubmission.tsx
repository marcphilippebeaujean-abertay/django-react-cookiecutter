import axios from 'axios';
import { push } from "connected-react-router";

import {
    displayServerErrorMessagesInErrorDiv,
    displayInputErrorMessages,
    hideAllInputErrorMessages,
    enableFormButton,
    disableFormButton
} from "../../../utils/formUtils";
import * as fieldNames from "./formFieldNames";
import { UserLoginDetails } from "./form";
import { addPendingApiCall, clearAlerts, removePendingApiCall } from '../../../../state/alertsState/alertActions';
import { API_LOGIN_URL } from '../../../../constants/apiUrl';
import { startUserSession } from '../../../../state/userAuthState/userAuthActions';


export const sendLoginRequest = (userDetails: UserLoginDetails) => {
    return async (dispatch: Function) => {
      hideAllInputErrorMessages([
        fieldNames.USERNAME,
        fieldNames.PASSWORD
      ]);
      let errorMessageFieldnames = [];
      if (userDetails[fieldNames.USERNAME].length === 0) {
        errorMessageFieldnames.push(fieldNames.USERNAME);
      }
      if (userDetails[fieldNames.PASSWORD].length === 0) {
        errorMessageFieldnames.push(fieldNames.PASSWORD);
      }
      if (errorMessageFieldnames.length > 0) {
        displayInputErrorMessages(errorMessageFieldnames);
        return;
      }
      disableFormButton(fieldNames.SUBMIT);
      (document.getElementById(
        fieldNames.FORM_ERROR_DIV_ID
      ) as HTMLElement).innerHTML = "";
      dispatch(addPendingApiCall(API_LOGIN_URL));
      axios
        .post(API_LOGIN_URL, {
          username: userDetails[fieldNames.USERNAME],
          password: userDetails[fieldNames.PASSWORD]
        })
        .then(response => {
          dispatch(clearAlerts());
          dispatch(
            startUserSession(
              response.data.key,
              userDetails.login_username
            )
          );
          dispatch(push("/"));
        })
        .catch(error => {
          if (error["response"] !== undefined) {
            displayServerErrorMessagesInErrorDiv(
              fieldNames.FORM_ERROR_DIV_ID,
              error.response.data
            );
          }
        })
        .finally(() => {
          dispatch(removePendingApiCall(API_LOGIN_URL));
          enableFormButton(fieldNames.SUBMIT);
        });
    }
  };