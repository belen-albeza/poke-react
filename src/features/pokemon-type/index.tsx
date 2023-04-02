import { FC } from "react";
import { PokeType } from "../models";
import { Container } from "./index.styles";

export type PokemonTypeProps = {
  pokeType: PokeType;
};

export const PokemonType: FC<PokemonTypeProps> = ({
  pokeType,
}: PokemonTypeProps) => {
  return <Container>{pokeType}</Container>;
};
