import { FC } from "react";
import type { Pokemon } from "../models";

export type PokemonSheetProps = Pokemon;

const PokemonSheet: FC<PokemonSheetProps> = ({
  name,
  sprite,
  types,
}: PokemonSheetProps) => {
  return (
    <>
      <h1>{name}</h1>
      <p>
        <img src={sprite} alt="Sprite" />
      </p>
      <ul>
        {types.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonSheet;
