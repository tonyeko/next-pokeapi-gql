import { useQuery } from "@apollo/client";
import Image from "next/image";

import { Badge } from "@/components";
import { formatPokemonId } from "@/utils";

import {
  GetPokemonTypesQueryResult,
  GetPokemonTypesQueryVariables,
  GET_POKEMON_TYPES,
} from "./PokemonCard.queries";
import {
  IdText,
  NameText,
  OwnedText,
  PokemonCardLink,
  TypesBadge,
} from "./PokemonCard.styles";
import { useMyPokemon } from "@/context/MyPokemonContext";

export type PokemonCardProps = {
  data: PokeAPI.PokemonItem;
};

const PokemonCard = ({ data: pokemonData }: PokemonCardProps) => {
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

  const ownedPokemon = myPokemon.filter(
    (pokemon) => pokemon.id === pokemonData.id
  ).length;

  return (
    <PokemonCardLink color={firstType} href={`/pokemon/${pokemonData.name}`}>
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
          <Badge variant="ghost" key={idx}>
            {type.type?.name}
          </Badge>
        ))}
      </TypesBadge>
      <OwnedText>{`Owned: ${ownedPokemon}`}</OwnedText>
    </PokemonCardLink>
  );
};

export default PokemonCard;
