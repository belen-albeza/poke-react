import styled from "styled-components";
import { spacing, colors, borderRadius } from "../../ui/tokens";

export const Container = styled.span`
  display: inline-block;
  padding: ${spacing.sp004} ${spacing.sp016};
  background: ${colors.gray050};
  border-radius: ${borderRadius.sm};
  text-transform: capitalize;
`;
