export type PokemonSummary = {
  id: string;
};

export type Pokemon = PokemonSummary & {
  sprite: string;
  name: string;
  types: PokeType[];
};

const allPokeTypes = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "shadow",
] as const;

export type PokeType = (typeof allPokeTypes)[number];

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
    types: data.types.map((x) => {
      const pokeType = x.type.name;
      if (!isPokeType(pokeType)) {
        throw new Error(`Invalid Pokémon type: ${pokeType}`);
      }
      return pokeType;
    }),
    sprite: data.sprites.front_default,
  };
};

const isPokeType = (value: string): value is PokeType => {
  return allPokeTypes.includes(value as PokeType);
};
