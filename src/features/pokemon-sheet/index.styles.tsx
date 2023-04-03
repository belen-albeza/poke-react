import styled from "styled-components";
import { setTypography, ellipsis } from "../../ui/mixins";
import { spacing, viewports } from "../../ui/tokens";

export const Container = styled.article`
  display: grid;
  row-gap: ${spacing.sp016};
`;

export const Heading = styled.h1`
  ${setTypography("heading1")}
  text-align: center;
  text-transform: capitalize;
  max-width: 100%;
  ${ellipsis()}

  @media (min-width: ${viewports.l}) {
    font-size: 5vw;
  }
`;

export const PokemonImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 100%;
`;

export const TypesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: ${spacing.sp008};
`;
