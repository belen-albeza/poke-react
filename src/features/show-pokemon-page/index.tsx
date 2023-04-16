import { FC, Suspense } from "react";
import { Heading } from "./index.styles";
import { Pokemon, getPokemon } from "../../api";
import { useLoaderData, defer, Await, useAsyncValue } from "react-router-dom";
import { PokemonSheet } from "../pokemon-sheet";

type PokemonLoaderData = {
  pokemon: Promise<Pokemon | undefined>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = ({ params }: any) => {
  const pokemon = params.id
    ? getPokemon(params.id)
    : Promise.resolve(undefined);

  return defer({ pokemon });
};

const ShowPokemonPage: FC = () => {
  const { pokemon } = useLoaderData() as PokemonLoaderData;

  return (
    <article>
      <Suspense fallback={<Loading />}>
        <Await resolve={pokemon}>
          <ShowAwaitedPokemon />
        </Await>
      </Suspense>
    </article>
  );
};

const Loading: FC = () => {
  return (
    <>
      <Heading>Pokémon</Heading>
      <p>Loading…</p>
    </>
  );
};

const ShowAwaitedPokemon: FC = () => {
  const pokemon = useAsyncValue() as Awaited<PokemonLoaderData["pokemon"]>;

  return pokemon ? (
    <PokemonSheet
      id={pokemon.id}
      name={pokemon.name}
      types={pokemon.types}
      sprite={pokemon.sprite}
    />
  ) : (
    <Heading>Not found :(</Heading>
  );
};

export default ShowPokemonPage;
