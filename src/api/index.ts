export type PokemonSummary = {
  id: string;
};

export type Pokemon = PokemonSummary & {
  sprite: string;
  name: string;
  types: string[];
};

const BASE_URL = "https://pokeapi.co/api/v2";

type PokeApiPokemonResponse = {
  id: string;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
};

export const getPokemon = async (id: string): Promise<Pokemon> => {
  const url = `${BASE_URL}/pokemon/${id}`;
  const response = await fetch(url);
  const data = (await response.json()) as PokeApiPokemonResponse;

  return {
    id: data.id,
    name: data.name,
    types: data.types.map((x) => x.type.name),
    sprite: data.sprites.front_default,
  };
};
