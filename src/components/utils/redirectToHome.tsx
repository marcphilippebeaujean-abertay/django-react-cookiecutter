import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { homeLink } from "../views/homePage";

export default () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === "/" || pathname.length === 0) {
      dispatch(push(homeLink.link));
    }
  }, [pathname, dispatch]);

  return null;
};
