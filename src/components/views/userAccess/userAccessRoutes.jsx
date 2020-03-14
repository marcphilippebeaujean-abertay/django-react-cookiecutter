import React from "react";
import { Route, Switch } from "react-router-dom";

import RegisterPage from "./registration/form";
import LoginPage from "./login/form";
import EmailConfirmation from "./registration/emailConfirmation";

import { login, register, emailConfirmationLink } from "./userAccessLinks";

export default () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={register.link} component={RegisterPage} />
        <Route path={login.link} component={LoginPage} />
        <Route path={emailConfirmationLink} component={EmailConfirmation} />
      </Switch>
    </React.Fragment>
  );
};
