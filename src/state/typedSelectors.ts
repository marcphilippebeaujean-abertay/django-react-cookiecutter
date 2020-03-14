import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RouterState } from "connected-react-router";

import { UserState } from "./userAuthState/userAuthTypes";
import { AlertState } from "./alertsState/alertTypes";
import * as reducerNames from "./reducerNames";

interface RouterStateSelector {
  [reducerNames.ROUTE_REDUCER]: RouterState;
}

export const useRouterSelector: TypedUseSelectorHook<RouterStateSelector> = useSelector;

interface AlertStateSelector {
  [reducerNames.ALERTS_REDUCER]: AlertState;
}

export const useAlertsSelector: TypedUseSelectorHook<AlertStateSelector> = useSelector;

interface UserStateSelector {
  [reducerNames.USER_AUTH_REDUCER]: UserState;
}

export const useUserAuthSelector: TypedUseSelectorHook<UserStateSelector> = useSelector;
