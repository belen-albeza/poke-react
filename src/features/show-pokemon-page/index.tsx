import { FC } from "react";
import { Heading } from "./index.styles";
import { Pokemon, getPokemon } from "../../api";
import { useLoaderData } from "react-router-dom";

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
      <Heading>{pokemon ? pokemon.name : "??"}</Heading>
    </article>
  );
};

export default ShowPokemonPage;
