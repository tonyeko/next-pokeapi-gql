import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
  query getPokemonDetail($name: String!) {
    pokemon(name: $name) {
      id
      name
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
    }
  }
`;

export type GetPokemonDetailQueryResult = {
  pokemon: PokeAPI.Pokemon;
};

export type GetPokemonDetailQueryVariables = {
  name: string;
};
