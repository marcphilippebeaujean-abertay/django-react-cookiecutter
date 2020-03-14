import React, { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import * as Io from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormWrapper from "../formWrapper";
import { handleInputChange } from "../../../utils/formUtils";
import handleSubmit from "./submission";
import {
  USERNAME,
  PASSWORD,
  EMAIL,
  LEGAL_AGREEMENT,
  REPEATED_PASSWORD,
  SUBMIT,
  FORM_ID,
  FORM_ERROR_DIV_ID,
  FORM_SUCCESS_ID
} from "./fieldNames";
import { login } from "../userAccessLinks";

export interface UserRegistrationForm {
  [USERNAME]: string;
  [PASSWORD]: string;
  [REPEATED_PASSWORD]: string;
  [EMAIL]: string;
  [LEGAL_AGREEMENT]: boolean;
}

export default () => {
  const [formData, setFormData] = useState<UserRegistrationForm>({
    [USERNAME]: "",
    [PASSWORD]: "",
    [REPEATED_PASSWORD]: "",
    [EMAIL]: "",
    [LEGAL_AGREEMENT]: false
  });
  const updateFormElement = (e: React.FormEvent<HTMLInputElement>) =>
    handleInputChange(e, formData, setFormData);
  const dispatch = useDispatch();
  return (
    <FormWrapper>
      <Card>
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <Form
            id={FORM_ID}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              handleSubmit(e, formData, dispatch)
            }
          >
            <Form.Group controlId={EMAIL}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id={`${EMAIL}-prepend`}>
                    <Io.IoMdMail />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name={EMAIL}
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={updateFormElement}
                />
              </InputGroup>
              <Form.Text className="d-none text-danger" id={EMAIL + "-error"}>
                Invalid Email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId={USERNAME}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id={`${USERNAME}-prepend`}>
                    <Io.IoMdPerson />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name={USERNAME}
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={updateFormElement}
                />
              </InputGroup>
              <Form.Text
                className="d-none text-danger"
                id={USERNAME + "-error"}
              >
                Please choose a username that is at least six characters long
                and contains no whitespace (tabs, spaces, etc.).
              </Form.Text>
            </Form.Group>
            <Form.Group controlId={PASSWORD}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id={`${PASSWORD}-prepend`}>
                    <Io.IoMdLock />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name={PASSWORD}
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={updateFormElement}
                />
              </InputGroup>
              <Form.Text
                className="d-none text-danger"
                id={PASSWORD + "-error"}
              >
                Please choose a safer password. It should be at least 6
                characters long, contain lower and uppercase letters as well as
                at least one number.
              </Form.Text>
            </Form.Group>
            {/* 
          <Form.Group controlId={REPEATED_PASSWORD}>
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              name={REPEATED_PASSWORD}
              type="password"
              placeholder="Password"
              value={formData.repeatPassword}
              onChange={updateFormElement}
            />
            <Form.Text
              className="d-none text-danger"
              id={REPEATED_PASSWORD + "-error"}
            >
              Passwords don't match
            </Form.Text>
          </Form.Group> 
          */}
            <Form.Group controlId={LEGAL_AGREEMENT} className="">
              <div className="d-flex m-0">
                <Form.Check
                  name={LEGAL_AGREEMENT}
                  type="checkbox"
                  checked={formData.legalAgreement}
                  onChange={updateFormElement}
                />
                <p className="m-0">
                  I agree to the Data Policy and Terms of Use.
                </p>
              </div>
              <Form.Text
                className="d-none text-danger"
                id={LEGAL_AGREEMENT + "-error"}
              >
                You need to agree to the Terms of use for our Service
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="primary" type="submit" id={SUBMIT}>
                Submit
              </Button>
              <div id={FORM_ERROR_DIV_ID}>{/* errors inserted here */}</div>
              <Form.Text className="d-none text-success" id={FORM_SUCCESS_ID}>
                Sign up successful - check your email!
              </Form.Text>
            </Form.Group>
          </Form>
          <Card.Text>
            Already have an account?{" "}
            <Link to={login.link} className="st-link">
              {login.displayName}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </FormWrapper>
  );
};
