import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { enableFormButton, disableFormButton } from "../../../utils/formUtils";
import { API_CONFIRM_EMAIL } from "../../../../constants/apiUrl";
import { login } from "../../userAccess/userAccessLinks";
import {
  setSuccessAlerts,
  addPendingApiCall,
  removePendingApiCall
} from "../../../../state/alertsState/alertActions";

const buttonId = "confirmation-btn";
const messageDivId = "msg-div";

export default () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        id={buttonId}
        onClick={() => {
          const pathUrl = window.location.pathname;
          const urlParts = pathUrl.split("/");
          const confirmationToken = urlParts[urlParts.length - 2];
          disableFormButton(buttonId);
          const messageDiv = document.getElementById(
            messageDivId
          ) as HTMLElement;
          dispatch(addPendingApiCall(API_CONFIRM_EMAIL));
          axios
            .post(API_CONFIRM_EMAIL, {
              key: confirmationToken
            })
            .then(response => {
              dispatch(push(login.link));
              dispatch(
                setSuccessAlerts([
                  "Successfully confirmed your email! You can now log in."
                ])
              );
            })
            .catch(error => {
              messageDiv.insertAdjacentHTML(
                "afterbegin",
                `<small class="text-danger form-text">Your token is invalid/has expired.</small>`
              );
            })
            .finally(() => {
              dispatch(removePendingApiCall(API_CONFIRM_EMAIL));
              enableFormButton(buttonId);
        })
        }
      }
      >
        Confirm Email
      </Button>
      <div id={messageDivId}></div>
    </div>
  );
};
