import { gql } from "@apollo/client";

export const GET_POKEMON_TYPES = gql`
  query getPokemonTypes($name: String!) {
    pokemon(name: $name) {
      types {
        type {
          id
          name
        }
      }
    }
  }
`;

export type GetPokemonTypesQueryVariables = {
  name: string;
};

export type GetPokemonTypesQueryResult = {
  pokemon: {
    types: Omit<PokeAPI.Type, "slot">[];
  };
};
