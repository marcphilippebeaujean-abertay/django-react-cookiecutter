import React from "react";
import { useUserAuthSelector } from "../../../state/typedSelectors";

interface AuthVisibilityWrapper {
  children: React.ReactNode;
}

export const ShowOnlyWhenLoggedIn = ({ children }: AuthVisibilityWrapper) => {
  const loggedIn = useUserAuthSelector(
    state => state.userAuthReducer.sessionActive === true
  );
  return loggedIn ? <React.Fragment>{children}</React.Fragment> : null;
};

export const DontShowWhenLoggedIn = ({ children }: AuthVisibilityWrapper) => {
  const loggedIn = useUserAuthSelector(
    state => state.userAuthReducer.sessionActive === true
  );
  return loggedIn ? null : <React.Fragment>{children}</React.Fragment>;
};
