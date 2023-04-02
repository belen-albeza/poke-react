import { FC } from "react";
import type { Pokemon } from "../models";

import { Heading, ImageContainer, PokemonImage } from "./index.styles";

export type PokemonSheetProps = Pokemon;

const PokemonSheet: FC<PokemonSheetProps> = ({
  name,
  sprite,
  types,
}: PokemonSheetProps) => {
  return (
    <>
      <Heading>{name}</Heading>
      <ImageContainer>
        <PokemonImage src={sprite} alt="Sprite" />
      </ImageContainer>
      <ul>
        {types.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonSheet;
