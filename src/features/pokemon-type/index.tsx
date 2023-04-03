import { FC } from "react";
import { PokeType } from "../models";
import { Container } from "./index.styles";

export type PokemonTypeProps = {
  pokeType: PokeType;
};

const iconForPokeType = (pokeType: PokeType): string => {
  switch (pokeType) {
    case "bug":
      return "🐞";
    case "dark":
      return "🌑";
    case "dragon":
      return "🐉";
    case "electric":
      return "⚡️";
    case "fairy":
      return "✨";
    case "fighting":
      return "👊";
    case "fire":
      return "🔥";
    case "flying":
      return "🦋";
    case "ghost":
      return "👻";
    case "grass":
      return "🌱";
    case "ground":
      return "🟤";
    case "ice":
      return "🧊";
    case "normal":
      return "⚪️";
    case "poison":
      return "☠️";
    case "psychic":
      return "👁️";
    case "rock":
      return "🪨";
    case "shadow":
      return "🕳️";
    case "steel":
      return "⛓️";
    case "water":
      return "💧";
  }
};

export const PokemonType: FC<PokemonTypeProps> = ({
  pokeType,
}: PokemonTypeProps) => {
  const icon = iconForPokeType(pokeType);
  return (
    <Container>
      {icon} {pokeType}
    </Container>
  );
};
