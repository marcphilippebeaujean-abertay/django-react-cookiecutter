import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useAlertsSelector } from "../../state/typedSelectors";
import { LOADING_STATES } from "../../state/alertsState/alertTypes";
import { setLoadingAlertVisibility } from "../../state/alertsState/alertActions";

const ProgressBarStyle = styled.div`
  width: 100%;
`;

const loadSpeedMs = 60;
const incrementAmount = 15;

const barPercentIncreaseLoop = (
  currentBarPercent: number,
  targetBarPercent: number,
  setBarPercent: Function
) => {
  const increment =
    currentBarPercent + incrementAmount < targetBarPercent
      ? currentBarPercent + incrementAmount
      : targetBarPercent - currentBarPercent;
  setBarPercent(currentBarPercent + increment);
};

export default () => {
  const [previousLoadingState, setPreviousLoadingState] = useState<
    LOADING_STATES
  >("loaded");
  const [currentBarPercent, setCurrentBarPercent] = useState(0);

  const dispatch = useDispatch();

  const { loadingAlertState } = useAlertsSelector(state => state.alertsReducer);

  if (loadingAlertState !== previousLoadingState) {
    setPreviousLoadingState(loadingAlertState);
  }

  let targetBarPercent = 0;
  switch (previousLoadingState) {
    case "loading":
      targetBarPercent = 80;
      setTimeout(
        () =>
          barPercentIncreaseLoop(
            currentBarPercent,
            targetBarPercent,
            setCurrentBarPercent
          ),
        loadSpeedMs
      );
      break;
    case "finishing":
      if (currentBarPercent < 100) {
        setTimeout(() => {
          dispatch(setLoadingAlertVisibility("loaded"));
        }, 300);
        targetBarPercent = 100;
        setCurrentBarPercent(100);
      }
      break;
    case "loaded":
      if (currentBarPercent !== 0) {
        setCurrentBarPercent(0);
        targetBarPercent = 0;
      }
  }
  return currentBarPercent === 0 ? null : (
    <ProgressBarStyle>
      <ProgressBar now={currentBarPercent} className="rounded-0" />
    </ProgressBarStyle>
  );
};
