import React, { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormWrapper from "../../../utils/elementWrappers/formWrapper";
import { passwordResetRequest } from "../passwordReset/passwordResetLinks";
import {
  handleInputChange,
} from "../../../utils/formUtils";
import * as fieldNames from "./formFieldNames";
import { register } from "../userAccessLinks";
import { sendLoginRequest } from './formSubmission';
import * as Io from "react-icons/io";
import { ButtonSpinner } from "../../../utils/components/ButtonSpinner";

export interface UserLoginDetails {
  [fieldNames.PASSWORD]: string;
  [fieldNames.USERNAME]: string;
}

export default () => {
  const [userDetails, setUserDetails] = useState<UserLoginDetails>({
    [fieldNames.PASSWORD]: "",
    [fieldNames.USERNAME]: ""
  });
  const dispatch = useDispatch();
  const updateFormElement = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, userDetails, setUserDetails);
  return (
    <FormWrapper>
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form
            onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
              e.preventDefault();
              dispatch(sendLoginRequest(userDetails));
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
                <ButtonSpinner ButtonId={fieldNames.SUBMIT} />
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
