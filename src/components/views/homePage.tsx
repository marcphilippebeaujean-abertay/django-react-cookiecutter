import React from "react";
import * as Io from "react-icons/io";

import IconWrapper from "../utils/elementWrappers/IconWrapper";
import { LinkItem } from "../utils/navLinkInterface";

export const homeLink: LinkItem = {
  link: "/home",
  displayName: "Home",
  icon: <IconWrapper Icon={Io.IoIosHome} />
};

export default () => <div></div>;
