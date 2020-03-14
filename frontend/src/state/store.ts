import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import * as reducerNames from "./reducerNames";
import userAuthReducer from "./userAuthState/userAuthReducer";
import alertsReducer from "./alertsState/alertReducer";

export const history = createBrowserHistory();

const createRootReducer = (history: any) =>
  combineReducers({
    [reducerNames.USER_AUTH_REDUCER]: userAuthReducer,
    [reducerNames.ROUTE_REDUCER]: connectRouter(history),
    [reducerNames.ALERTS_REDUCER]: alertsReducer
  });

export default function configureStore() {
  return createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
