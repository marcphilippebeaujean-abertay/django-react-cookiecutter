import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

import { useAlertsSelector } from "../../state/typedSelectors";

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
  const [previousApiCallsPending, setPreviousApiCallsPending] = useState<
    Number
  >(0);
  const [currentBarPercent, setCurrentBarPercent] = useState(0);

  const numPendingApiCalls = useAlertsSelector(state => state.alertsReducer.pendingApiCalls.length);

  let loadingState;
  if(numPendingApiCalls === 0 &&
    numPendingApiCalls !== previousApiCallsPending) {
    loadingState = "finishing";
  } else {
    if(numPendingApiCalls > 0) {
      loadingState = "loading";
    } else {
      loadingState = "loaded";
    }
    if(numPendingApiCalls !== previousApiCallsPending) {
      setPreviousApiCallsPending(numPendingApiCalls);
    }
  }

  let targetBarPercent = 0;
  switch (loadingState) {
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
      if (currentBarPercent < 100 &&
          currentBarPercent > 0) {
        setTimeout(() => {
          setPreviousApiCallsPending(0);
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
