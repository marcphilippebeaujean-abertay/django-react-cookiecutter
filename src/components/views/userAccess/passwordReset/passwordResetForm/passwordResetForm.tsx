import React, { useState } from "react";
import axios from "axios";
import { Form, Card, Button, InputGroup } from "react-bootstrap";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import * as Io from "react-icons/io";

import { API_PASSWORD_RESET_REQUEST } from "../../../../../constants/apiUrl";
import { emailRegex } from "../../../../../constants/regex";
import { EMAIL_FIELDNAME, SUBMIT, FORM_ERROR_DIV_ID } from "./fieldnames";
import { passwordResetRequestConfirmationUrl } from "../passwordResetLinks";
import {
  setSuccessAlerts,
  setLoadingAlertVisibility
} from "../../../../../state/alertsState/alertActions";
import FormWrapper from "../../formWrapper";

export default () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  return (
    <FormWrapper>
      <Card>
        <Card.Body>
          <Card.Title>Request Password Reset</Card.Title>
          <Form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const submitBtn = document.getElementById(
                SUBMIT
              ) as HTMLInputElement;
              if (!emailRegex.test(email)) {
                (document.getElementById(
                  EMAIL_FIELDNAME + "-error"
                ) as HTMLElement).classList.remove("d-none");
                return;
              }
              submitBtn.disabled = true;
              dispatch(setLoadingAlertVisibility("loading"));
              axios
                .post(API_PASSWORD_RESET_REQUEST, {
                  email: email
                })
                .then(response => {
                  dispatch(push(passwordResetRequestConfirmationUrl));
                  dispatch(
                    setSuccessAlerts([
                      `Password reset sent to ${email} - please check your email`
                    ])
                  );
                })
                .catch(e => console.log(e))
                .finally(() => {
                  submitBtn.disabled = false;
                  dispatch(setLoadingAlertVisibility("finishing"));
                });
            }}
          >
            <Form.Group controlId={EMAIL_FIELDNAME}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Io.IoIosMail />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name={EMAIL_FIELDNAME}
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setEmail(e.currentTarget.value)
                  }
                />
              </InputGroup>

              <Form.Text
                className="d-none text-danger"
                id={EMAIL_FIELDNAME + "-error"}
              >
                Email
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="submit" className="m-0">
              <Button variant="primary" type="submit" id={SUBMIT}>
                Submit
              </Button>
              <div id={FORM_ERROR_DIV_ID}>{/* errors inserted here */}</div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </FormWrapper>
  );
};
