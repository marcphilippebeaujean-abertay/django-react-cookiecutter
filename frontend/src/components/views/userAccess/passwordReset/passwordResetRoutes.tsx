import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  passwordResetRequest,
  confirmResetPassword
} from "./passwordResetLinks";
import InitPasswordResetRequest from "./passwordResetForm/passwordResetForm";
import PasswordResetConfirm from "./passwordResetConfirm/passwordResetConfirm";

export default () => (
  <React.Fragment>
    <Switch>
      <Route
        path={passwordResetRequest.link}
        component={InitPasswordResetRequest}
      />
      <Route
        path={confirmResetPassword.link}
        component={PasswordResetConfirm}
      />
    </Switch>
  </React.Fragment>
);
