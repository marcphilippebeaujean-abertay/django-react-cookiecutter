import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { IoIosHeart } from "react-icons/io";

import IconWrapper from "./utils/elementWrappers/IconWrapper";

export const footerHeight = `8rem`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${footerHeight};
  .footer-border {
    border-width: 1px 0px 0px 0px;
    border-style: solid;
    border-color: lightgrey;
  }
  a {
    padding-bottom: 0;
  }
`;

export default () => (
  <Footer>
    <Container className="footer-border">
      <p className="text-center mt-4">
        <i>
          Made with <IconWrapper Icon={IoIosHeart} AddMargin={false} /> by{" "}
          <a
            href="https://byteschool.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marc Philippe Beaujean
          </a>
        </i>
      </p>
    </Container>
  </Footer>
);
