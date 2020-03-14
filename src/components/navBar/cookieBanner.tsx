import React, { useState } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

import { COOKIE_AGREEMENT } from "../../constants/localStorageKeys";

const BannerWrapper = styled.div`
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  z-index: 4;
  a {
    color: lightblue;
  }
`;

export default () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<string | null>(
    window.localStorage.getItem(COOKIE_AGREEMENT)
  );
  return cookiesAccepted === null ? (
    <BannerWrapper>
      <Container>
        <div className="d-flex flex-row">
          <p>
            This website uses cookies to personalise content and improve the
            service. By using this website, you are agreeing to the use of all
            cookines - please read the Data Policy for more information.
            <Button
              onClick={() => {
                window.localStorage.setItem(COOKIE_AGREEMENT, "set");
                setCookiesAccepted("true");
              }}
            >
              OK
            </Button>
          </p>
        </div>
      </Container>
    </BannerWrapper>
  ) : null;
};
