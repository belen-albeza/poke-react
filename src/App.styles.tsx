import styled from "styled-components";
import { setTypography } from "./ui/mixins";
import { sizes, spacing } from "./ui/tokens";

export const Container = styled.div`
  max-width: ${sizes.sz960};
  margin: 0 auto;
  padding: ${spacing.sp016};
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: ${spacing.sp032};
`;

export const Header = styled.header`
  text-align: center;
`;

export const Title = styled.p`
  ${setTypography("title")}
`;

export const Icon = styled.img`
  vertical-align: middle;
`;

export const Footer = styled.footer`
  text-align: center;
`;
