import { useQuery } from "@apollo/client";
import Image from "next/image";

import { Container, spin } from "@/shared";
import { PokemonCard } from "@/containers";

import {
  GET_POKEMON_LIST,
  GetPokemonListQueryVariables,
  GetPokemonListQueryResult,
} from "./PokemonList.queries";
import {
  InfiniteScrollGrid,
  LoadingImageContainer,
} from "./PokemonList.styles";

const PokemonList = () => {
  const LIMIT = 100;
  const OFFSET = 0;

  const { data, fetchMore } = useQuery<
    GetPokemonListQueryResult,
    GetPokemonListQueryVariables
  >(GET_POKEMON_LIST, {
    variables: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

  const loadMore = () =>
    fetchMore({ variables: { offset: data?.pokemons.results.length } });

  const pokemons = data?.pokemons;
  const currentLength = pokemons ? pokemons.results.length : 0;
  const hasMore = pokemons ? pokemons.count > currentLength : true;

  return (
    <Container>
      <InfiniteScrollGrid
        dataLength={currentLength}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <LoadingImageContainer>
            <Image
              src="/pokeball.svg"
              width="48"
              height="48"
              alt="loading..."
              css={spin}
            />
          </LoadingImageContainer>
        }
      >
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} data={pokemon} />
        ))}
      </InfiniteScrollGrid>
    </Container>
  );
};

export default PokemonList;
