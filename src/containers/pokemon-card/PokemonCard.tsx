import { useQuery } from "@apollo/client";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

import { Badge, Link } from "@/components";
import { formatPokemonId } from "@/utils";

import {
  GetPokemonTypesQueryResult,
  GetPokemonTypesQueryVariables,
  GET_POKEMON_TYPES,
} from "./PokemonCard.queries";
import { IdText, NameText, OwnedText, TypesBadge } from "./PokemonCard.styles";
import { useMyPokemon } from "@/context/MyPokemonContext";

export type PokemonCardProps = {
  data: PokeAPI.PokemonItem;
};

const PokemonCard = ({ data: pokemonData }: PokemonCardProps) => {
  const theme = useTheme();
  const { myPokemon } = useMyPokemon();
  const { data: typesData } = useQuery<
    GetPokemonTypesQueryResult,
    GetPokemonTypesQueryVariables
  >(GET_POKEMON_TYPES, {
    variables: { name: pokemonData.name },
    fetchPolicy: "no-cache",
  });

  const types = typesData?.pokemon.types;
  const firstType = types?.[0]?.type?.name || "unknown";

  const PokemonCardLink = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.25s all ease;
    border: 4px solid ${theme.color.general.black};
    border-radius: 0.375rem;
    color: inherit;
    text-decoration: inherit;
    box-shadow: 4px 5px 0 ${theme.color.type[firstType]};

    &:hover {
      box-shadow: 2px 3px 0 ${theme.color.type[firstType]};
    }

    &:active {
      box-shadow: none;
    }
  `;

  const ownedPokemon = myPokemon.filter(
    (pokemon) => pokemon.id === pokemonData.id
  ).length;

  return (
    <PokemonCardLink href={`/pokemon/${pokemonData.name}`}>
      <Image
        crossOrigin="anonymous"
        src={pokemonData.dreamworld}
        alt={pokemonData.name}
        width={128}
        height={128}
      />
      <IdText>{formatPokemonId(pokemonData.id)}</IdText>
      <NameText>{pokemonData.name}</NameText>
      <TypesBadge>
        {types?.map((type, idx) => (
          <Badge key={idx}>{type.type?.name}</Badge>
        ))}
      </TypesBadge>
      <OwnedText>{`Owned: ${ownedPokemon}`}</OwnedText>
    </PokemonCardLink>
  );
};

export default PokemonCard;
