import styled from "styled-components";
import { setTypography } from "../../ui/mixins";
import DefaultLoadingSpinner from "../../ui/components/loading-spinner";

export const LoadingContainer = styled.p`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoadingSpinner = styled(DefaultLoadingSpinner)``;

export const Heading = styled.h1`
  ${setTypography("heading1")}
  text-align: center;
`;
