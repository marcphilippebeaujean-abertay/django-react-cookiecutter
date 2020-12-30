import React from "react";
import styled from "styled-components";
import IconWrapper from "../elementWrappers/IconWrapper";
import * as Ai from "react-icons/ai";
import { createButtonSpinnerId } from '../formUtils';


interface SpinnerProps {
    ButtonId: string;
}

const SpinningStyle = styled.span`
    span {
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`

export const ButtonSpinner = (props: SpinnerProps) => {
    return (
    <SpinningStyle id={createButtonSpinnerId(props.ButtonId)} className="d-none">
        <IconWrapper Icon={Ai.AiOutlineLoading} />
    </SpinningStyle>
    )
}