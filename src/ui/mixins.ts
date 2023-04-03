import { css } from "styled-components";
import { typo, Typography } from "./tokens";

export const setTypography = (typography: Typography) => {
  const { fontSize, fontWeight } = typo[typography];
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
};

export const ellipsis = () => {
  return css`
    whitespace: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};
