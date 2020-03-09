import axios from "axios";
import { push } from "connected-react-router";

import {
  hideAllInputErrorMessages,
  displayInputErrorMessages,
  displaySingleErrorMessageInErrorDiv
} from "../../../../utils/formUtils";
import * as fieldnames from "./fieldnames";
import { PasswordResetForm } from "./passwordResetConfirm";
import { API_PASSWORD_RESET_CONFIRM } from "../../../../../constants/apiUrl";
import { passwordResetConfirmationUrl } from "../passwordResetLinks";
import {
  setSuccessAlerts,
  setLoadingAlertVisibility
} from "../../../../../state/alertsState/alertActions";

interface PasswordResetPayload {
  uid: string;
  token: string;
  new_password1: string;
  new_password2: string;
}

const getFaultyInputFieldNames = (formState: PasswordResetForm) => {
  const faultyInputFieldNames: Array<String> = [];
  if (
    !/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(formState[fieldnames.NEW_PASSWORD_1])
  ) {
    faultyInputFieldNames.push(fieldnames.NEW_PASSWORD_1);
  }
  if (
    formState[fieldnames.NEW_PASSWORD_1] !==
    formState[fieldnames.NEW_PASSWORD_2]
  ) {
    faultyInputFieldNames.push(fieldnames.NEW_PASSWORD_2);
  }
  return faultyInputFieldNames;
};

export default (
  event: React.FormEvent<HTMLFormElement>,
  formInputValues: PasswordResetForm,
  reduxActionDispatch: Function
) => {
  event.preventDefault();
  const formKeys = [];
  for (let key in formInputValues) {
    formKeys.push(key);
  }
  hideAllInputErrorMessages(formKeys);
  const faultyInputFieldNames = getFaultyInputFieldNames(formInputValues);
  if (faultyInputFieldNames.length > 0) {
    displayInputErrorMessages(faultyInputFieldNames);
  } else {
    const currentUrlPath = document.location.pathname;
    const pathElements = currentUrlPath.split("/");
    const uid = pathElements[pathElements.length - 3];
    const token = pathElements[pathElements.length - 2];
    const passwordResetPayload: PasswordResetPayload = {
      uid: uid,
      token: token,
      new_password1: formInputValues[fieldnames.NEW_PASSWORD_1],
      new_password2: formInputValues[fieldnames.NEW_PASSWORD_2]
    };
    const submitBtn = document.getElementById(
      fieldnames.SUBMIT
    ) as HTMLInputElement;
    submitBtn.disabled = true;
    (document.getElementById(
      fieldnames.FORM_ERROR_DIV_ID
    ) as HTMLElement).innerHTML = "";
    setLoadingAlertVisibility("loading");
    axios
      .post(API_PASSWORD_RESET_CONFIRM, passwordResetPayload)
      .then(response => {
        reduxActionDispatch(push(passwordResetConfirmationUrl));
        reduxActionDispatch(
          setSuccessAlerts(["Successfully changed your password!"])
        );
      })
      .catch((error: any) => {
        displaySingleErrorMessageInErrorDiv(
          fieldnames.FORM_ERROR_DIV_ID,
          "Password reset form is invalid."
        );
      })
      .finally(() => {
        submitBtn.disabled = false;
        setLoadingAlertVisibility("finishing");
      });
  }
};
