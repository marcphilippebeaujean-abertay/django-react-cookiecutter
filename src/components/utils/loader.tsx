import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export default () => {
  return (
    <SpinnerWrapper>
      <Spinner animation="border" className="ml-auto mr-auto d-block" />
    </SpinnerWrapper>
  );
};
