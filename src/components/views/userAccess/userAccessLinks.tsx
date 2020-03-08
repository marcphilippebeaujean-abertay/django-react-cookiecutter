import React from "react";
import * as Io from "react-icons/io";

import IconWrapper from "../../utils/elementWrappers/IconWrapper";
import { LinkItem } from "../../utils/navLinkInterface";
import { homeLink } from "../homePage";

export const login: LinkItem = {
  link: "/login",
  displayName: "Login",
  icon: <IconWrapper Icon={Io.IoIosLogIn} />
};

export const register: LinkItem = {
  link: "/register",
  displayName: "Sign Up",
  icon: <IconWrapper Icon={Io.IoIosPersonAdd} />
};

export const logout: LinkItem = {
  link: homeLink.link,
  displayName: "Sign Out",
  icon: <IconWrapper Icon={Io.IoIosLogOut} />
};

export const emailConfirmationLink = "/accounts/confirm-email/";
