import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

import * as fieldnames from "./fieldnames";
import handleSubmit from "./formSubmission";
import { handleInputChange } from "../../../../utils/formUtils";
import { useDispatch } from "react-redux";
import FormWrapper from "../../formWrapper";

export interface PasswordResetForm {
  [fieldnames.NEW_PASSWORD_1]: string;
  [fieldnames.NEW_PASSWORD_2]: string;
}

export default () => {
  const [passwordResetState, setPasswordResetState] = useState<
    PasswordResetForm
  >({
    [fieldnames.NEW_PASSWORD_1]: "",
    [fieldnames.NEW_PASSWORD_2]: ""
  });

  const updateFormElement = (e: React.FormEvent<HTMLInputElement>) =>
    handleInputChange(e, passwordResetState, setPasswordResetState);
  const dispatch = useDispatch();
  return (
    <FormWrapper>
      <Card>
        <Card.Body>
          <Card.Title>Request Password Reset</Card.Title>
          <Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              handleSubmit(e, passwordResetState, dispatch);
            }}
          >
            <Form.Group controlId={fieldnames.NEW_PASSWORD_1}>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                name={fieldnames.NEW_PASSWORD_1}
                type="password"
                placeholder="Enter password"
                value={passwordResetState[fieldnames.NEW_PASSWORD_1]}
                onChange={updateFormElement}
              />
              <Form.Text
                className="d-none text-danger"
                id={fieldnames.NEW_PASSWORD_1 + "-error"}
              >
                Please choose a safer password. It should be at least 6
                characters long, contain lower and uppercase letters as well as
                at least one number.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId={fieldnames.NEW_PASSWORD_2}>
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                name={fieldnames.NEW_PASSWORD_2}
                type="password"
                placeholder="Repeat password"
                value={passwordResetState[fieldnames.NEW_PASSWORD_2]}
                onChange={updateFormElement}
              />
              <Form.Text
                className="d-none text-danger"
                id={fieldnames.NEW_PASSWORD_2 + "-error"}
              >
                Passwords don't match
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="primary" type="submit" id={fieldnames.SUBMIT}>
                Submit
              </Button>
              <div id={fieldnames.FORM_ERROR_DIV_ID}>
                {/* errors inserted here */}
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </FormWrapper>
  );
};
