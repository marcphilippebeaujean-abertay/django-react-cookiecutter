import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import NavBar from "./navBar/navMenu";
import AlertsContainer from "./alerting/alertsContainer";
import SessionChecker from "./utils/sessionChecker";
import BodyRoutes from "./views/bodyRoutes";
import Footer, { footerHeight } from "./footer";
import ScrollToTopOnRouteChange from "./utils/scrollToTopOnRouteChange";
import RedirectToHome from "./utils/redirectToHome";

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  position: relative;
  .content-wrapper {
    padding-bottom: ${footerHeight};
  }
`;

function App() {
  return (
    <ContentWrapper className="bg-light">
      <Container fluid className="px-0 main content-wrapper">
        <ScrollToTopOnRouteChange />
        <RedirectToHome />
        <SessionChecker />
        <NavBar />
        <Container className="mt-2">
          <AlertsContainer />
          <BodyRoutes />
        </Container>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default App;
