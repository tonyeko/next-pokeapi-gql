import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      status
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;

export type GetPokemonListQueryVariables = {
  limit: number;
  offset: number;
};

export type GetPokemonListQueryResult = {
  pokemons: {
    count: number;
    status: boolean;
    results: PokeAPI.PokemonItem[];
  };
};
