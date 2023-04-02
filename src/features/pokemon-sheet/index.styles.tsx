import styled from "styled-components";
import { setTypography } from "../../ui/mixins";
import { spacing } from "../../ui/tokens";

export const Container = styled.article`
  display: grid;
  row-gap: ${spacing.sp016};
`;

export const Heading = styled.h1`
  ${setTypography("heading1")}
  text-align: center;
  text-transform: capitalize;
`;

export const PokemonImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 100%;
  object-fit: cover;
`;

export const TypesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: ${spacing.sp008};
`;
