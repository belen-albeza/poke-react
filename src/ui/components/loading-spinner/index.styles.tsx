import styled from "styled-components";
import { sizes } from "../../tokens";

export const SpinnerSvg = styled.svg`
  animation: rotate 2.5s linear infinite;
  width: ${sizes.sz048};

  & .path {
    stroke: currentColor;
    stroke-linecap: square;
    animation: dash 2s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 300;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 180, 300;
      stroke-dashoffset: -30;
    }
    100% {
      stroke-dasharray: 180, 300;
      stroke-dashoffset: -280;
    }
  }
`;
