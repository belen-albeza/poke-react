import styled from "styled-components";
import { setTypography } from "../../ui/mixins";

export const Heading = styled.h1`
  ${setTypography("heading1")}
  text-align: center;
  text-transform: capitalize;
`;

export const ImageContainer = styled.p`
  margin: -25% 0;
`;

export const PokemonImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 100%;
`;
