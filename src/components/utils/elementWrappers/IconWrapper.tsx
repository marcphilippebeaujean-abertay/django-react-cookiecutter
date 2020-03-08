import React from "react";
import styled from "styled-components";

export const IconSize = 16;

const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  bottom: 1.5px;
`;

interface IconProps {
  Icon: any;
  Size?: Number | undefined;
  AddMargin?: boolean | undefined;
}

export default (props: IconProps) => {
  const { AddMargin, Icon } = props;
  return (
    <IconWrapper className={AddMargin === false ? "" : "mr-2"}>
      <Icon size={props.Size === undefined ? IconSize : props.Size} />
    </IconWrapper>
  );
};
