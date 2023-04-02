import { FC } from "react";
import type { Pokemon } from "../models";

import { PokemonType } from "../pokemon-type";
import { Container, Heading, PokemonImage, TypesList } from "./index.styles";

export type PokemonSheetProps = Pokemon;

export const PokemonSheet: FC<PokemonSheetProps> = ({
  name,
  sprite,
  types,
}: PokemonSheetProps) => {
  return (
    <Container>
      <Heading>{name}</Heading>
      <p>
        <PokemonImage src={sprite} alt="Sprite" width={2000} />
      </p>
      <TypesList>
        {types.map((x, i) => (
          <li key={i}>
            <PokemonType pokeType={x} />
          </li>
        ))}
      </TypesList>
    </Container>
  );
};
