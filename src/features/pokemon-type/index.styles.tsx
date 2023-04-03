import styled from "styled-components";
import { spacing, colors, borderRadius, viewports } from "../../ui/tokens";
import { setTypography } from "../../ui/mixins";

export const Container = styled.span`
  display: inline-block;
  padding: ${spacing.sp004} ${spacing.sp016};
  background: ${colors.gray050};
  border-radius: ${borderRadius.sm};
  text-transform: capitalize;

  @media (min-width: ${viewports.l}) {
    ${setTypography("button")}
  }
`;
