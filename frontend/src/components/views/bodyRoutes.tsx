import React from "react";

import UserAccessRoutes from "./userAccess/userAccessRoutes";
import PasswordResetRoutes from "./userAccess/passwordReset/passwordResetRoutes";

export default () => {
  return (
    <React.Fragment>
      <UserAccessRoutes />
      <PasswordResetRoutes />
    </React.Fragment>
  );
};
