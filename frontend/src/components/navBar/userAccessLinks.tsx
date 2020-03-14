import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { sendLogoutRequest } from "../../state/userAuthState/userAuthActions";
import { useUserAuthSelector } from "../../state/typedSelectors";

import * as linkItems from "../views/userAccess/userAccessLinks";
import { homeLink } from "../views/homePage";

import {
  ShowOnlyWhenLoggedIn,
  DontShowWhenLoggedIn
} from "../utils/elementWrappers/authBasedVisibilityWrappers";

export default () => {
  const dispatch = useDispatch();
  const authToken = useUserAuthSelector(
    state => state.userAuthReducer.authToken
  );
  return (
    <div className="col-12 col-lg-6 d-block d-lg-flex flex-row justify-content-end">
      <DontShowWhenLoggedIn>
        <LinkContainer to={linkItems.login.link}>
          <Nav.Link eventKey={linkItems.login.link}>
            {linkItems.login.icon}
            {linkItems.login.displayName}
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to={linkItems.register.link}>
          <Nav.Link eventKey={linkItems.register.link}>
            {linkItems.register.icon}
            {linkItems.register.displayName}
          </Nav.Link>
        </LinkContainer>
      </DontShowWhenLoggedIn>
      <ShowOnlyWhenLoggedIn>
        <Nav.Link
          onClick={() => {
            dispatch(sendLogoutRequest(authToken));
            dispatch(push(homeLink.link));
          }}
        >
          {linkItems.logout.icon}
          {linkItems.logout.displayName}
        </Nav.Link>
      </ShowOnlyWhenLoggedIn>
    </div>
  );
};
