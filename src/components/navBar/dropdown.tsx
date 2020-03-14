import React, { FC } from "react";
import styled from "styled-components";

import { NavDropdown } from "react-bootstrap";
import { useRouterSelector } from "../../state/typedSelectors";
import { LinkItem } from "../utils/navLinkInterface";

const DropdownWrapper = styled(NavDropdown)`
  .dropdown-item {
    color: rgba(0, 0, 0, 0.5);
  }
  .dropdown-item.active,
  .dropdown-item:active {
    background-color: rgba(0, 0, 0, 0) !important;
    color: black !important;
    opacity: 1;
  }
  .dropdown-item:hover,
  .dropdown-item.hover {
    background-color: rgba(0, 0, 0, 0) !important;
    color: rgba(0, 0, 0, 0.7);
  }
  ${props => (props.isActive ? `color: rgb(0, 0, 0) !important` : "")}
`;

interface IProps {
  children: React.ReactNode;
  link: LinkItem;
  activeKey?: string;
}

const Dropdown: FC<IProps> = ({ activeKey = "-1", children, link }) => {
  const currentRoutePathname = useRouterSelector(
    state => state.router.location.pathname
  );
  const dropdownHeader = (
    <span
      className={currentRoutePathname.startsWith(activeKey) ? "text-dark" : ""}
    >
      {link.icon}
      {link.displayName}
    </span>
  );
  return <DropdownWrapper title={dropdownHeader}>{children}</DropdownWrapper>;
};

export default Dropdown;
