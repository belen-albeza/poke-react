import { FC } from "react";
import { Heading } from "./index.styles";
import { Pokemon, getPokemon } from "../../api";
import { useLoaderData } from "react-router-dom";
import { PokemonSheet } from "../pokemon-sheet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = async ({ params }: any): Promise<Pokemon | undefined> => {
  if (!params.id) {
    return;
  }

  const pokemon = getPokemon(params.id);
  return pokemon;
};

const ShowPokemonPage: FC = () => {
  const pokemon = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <article>
      {pokemon ? (
        <PokemonSheet
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          sprite={pokemon.sprite}
        />
      ) : (
        <Heading>Pokémon</Heading>
      )}
    </article>
  );
};

export default ShowPokemonPage;
