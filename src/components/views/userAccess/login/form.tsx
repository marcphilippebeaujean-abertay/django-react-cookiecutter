import React, { useState } from "react";
import axios from "axios";
import * as Io from "react-icons/io";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

import FormWrapper from "../formWrapper";
import { passwordResetRequest } from "../passwordReset/passwordResetLinks";
import {
  handleInputChange,
  displayServerErrorMessagesInErrorDiv,
  displayInputErrorMessages,
  hideAllInputErrorMessages
} from "../../../utils/formUtils";
import * as fieldNames from "./formFieldNames";
import { register } from "../userAccessLinks";
import { API_LOGIN_URL } from "../../../../constants/apiUrl";
import { startUserSession } from "../../../../state/userAuthState/userAuthActions";
import { clearAlerts } from "../../../../state/alertsState/alertActions";
import { setLoadingAlertVisibility } from "../../../../state/alertsState/alertActions";

interface UserLoginDetails {
  [fieldNames.PASSWORD]: string;
  [fieldNames.USERNAME]: string;
}

export default () => {
  const [userDetails, setUserDetails] = useState<UserLoginDetails>({
    [fieldNames.PASSWORD]: "",
    [fieldNames.USERNAME]: ""
  });
  const dispatch = useDispatch();
  const updateFormElement = (e: React.FormEvent<HTMLInputElement>) =>
    handleInputChange(e, userDetails, setUserDetails);
  return (
    <FormWrapper>
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
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
              const submitBtn = document.getElementById(
                fieldNames.SUBMIT
              ) as HTMLInputElement;
              submitBtn.disabled = true;
              (document.getElementById(
                fieldNames.FORM_ERROR_DIV_ID
              ) as HTMLElement).innerHTML = "";
              dispatch(setLoadingAlertVisibility("loading"));
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
                  submitBtn.disabled = false;
                })
                .finally(() =>
                  dispatch(setLoadingAlertVisibility("finishing"))
                );
            }}
          >
            <Form.Group controlId="formEmail">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id={`${fieldNames.USERNAME}-prepend`}>
                    <Io.IoMdPerson />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name={fieldNames.USERNAME}
                  value={userDetails[fieldNames.USERNAME]}
                  type="text"
                  placeholder="Username"
                  onChange={updateFormElement}
                />
              </InputGroup>
              <Form.Text
                className="d-none text-danger"
                id={fieldNames.USERNAME + "-error"}
              >
                Please enter a Username
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id={`${fieldNames.PASSWORD}-prepend`}>
                    <Io.IoMdLock />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name={fieldNames.PASSWORD}
                  value={userDetails[fieldNames.PASSWORD]}
                  type="password"
                  placeholder="Password"
                  onChange={updateFormElement}
                />
              </InputGroup>
              <Form.Text
                className="d-none text-danger"
                id={fieldNames.PASSWORD + "-error"}
              >
                Please enter a Password
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="submit">
              <Button id={fieldNames.SUBMIT} variant="primary" type="submit">
                Submit
              </Button>
              <div id={fieldNames.FORM_ERROR_DIV_ID}>
                {/* errors inserted here */}
              </div>
            </Form.Group>
          </Form>
          <Card.Text className="">
            Don't have an account?{" "}
            <Link to={register.link} className="st-link">
              {register.displayName}
            </Link>
          </Card.Text>
          <Card.Text>
            Forgot your Password?{" "}
            <Link to={passwordResetRequest.link} className="st-link">
              {passwordResetRequest.displayName}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </FormWrapper>
  );
};
