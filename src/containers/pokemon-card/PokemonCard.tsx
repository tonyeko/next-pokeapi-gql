import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Image from "next/image";

import { Badge, Link } from "@/components";
import { formatPokemonId } from "@/utils";

import {
  GetPokemonTypesQueryResult,
  GetPokemonTypesQueryVariables,
  GET_POKEMON_TYPES,
} from "./PokemonCard.queries";
import {
  IdText,
  NameText,
  PokemonCardContainer,
  TypesBadge,
} from "./PokemonCard.styles";
import OwnedPokemonToolbar from "./OwnedPokemonToolbar";
import DeleteMyPokemonToolbar from "./DeleteMyPokemonToolbar";

export type PokemonCardData = {
  id: number;
  name: string;
  dreamworld: string;
  types?: PokeAPI.Type[];
  nickname?: string;
};

export type PokemonCardProps = {
  data: PokemonCardData;
  toolbar?: "owned-pokemon" | "delete-my-pokemon";
};

const PokemonCard = ({
  data: pokemonData,
  toolbar = "owned-pokemon",
}: PokemonCardProps) => {
  const [getPokemonTypes, { data: typesData }] = useLazyQuery<
    GetPokemonTypesQueryResult,
    GetPokemonTypesQueryVariables
  >(GET_POKEMON_TYPES, {
    variables: { name: pokemonData.name },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (!pokemonData.types) {
      getPokemonTypes();
    }
  }, [pokemonData.types, getPokemonTypes]);

  const types = pokemonData.types || typesData?.pokemon.types;
  const firstType = types?.[0]?.type?.name || "unknown";

  const renderContent = () => (
    <PokemonCardContainer color={firstType}>
      {toolbar === "owned-pokemon" ? (
        <OwnedPokemonToolbar data={pokemonData} />
      ) : (
        <DeleteMyPokemonToolbar data={pokemonData} />
      )}
      <Image
        crossOrigin="anonymous"
        src={pokemonData.dreamworld}
        alt={pokemonData.name}
        width={128}
        height={128}
      />
      <IdText>{formatPokemonId(pokemonData.id)}</IdText>
      <NameText>
        {pokemonData.nickname
          ? `${pokemonData.nickname}\nThe ${pokemonData.name}`
          : pokemonData.name}
      </NameText>
      <TypesBadge>
        {types?.map((type, idx) => (
          <Badge variant="ghost" key={idx}>
            {type.type?.name}
          </Badge>
        ))}
      </TypesBadge>
    </PokemonCardContainer>
  );

  return toolbar === "delete-my-pokemon" ? (
    renderContent()
  ) : (
    <Link
      href={`/pokemon/${pokemonData.name}`}
      css={{ color: "inherit", textDecoration: "inherit" }}
    >
      {renderContent()}
    </Link>
  );
};

export default PokemonCard;
