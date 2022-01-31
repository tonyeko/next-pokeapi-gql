import { useMyPokemon } from "@/context";
import { PokemonCardData } from "./PokemonCard";
import { ToolbarText } from "./PokemonCard.styles";

type OwnedPokemonToolbarProps = {
  data: PokemonCardData;
};

const OwnedPokemonToolbar = ({
  data: pokemonData,
}: OwnedPokemonToolbarProps) => {
  const { myPokemon } = useMyPokemon();
  const ownedPokemon = myPokemon.filter(
    (pokemon) => pokemon.id === pokemonData.id
  ).length;
  return <ToolbarText>{`Owned: ${ownedPokemon}`}</ToolbarText>;
};

export default OwnedPokemonToolbar;
