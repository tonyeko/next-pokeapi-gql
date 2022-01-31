import { useMyPokemon } from "@/context";
import { theme } from "@/utils";
import styled from "@emotion/styled";
import { AiOutlineDelete } from "react-icons/ai";
import { up } from "styled-breakpoints";
import { PokemonCardData } from "./PokemonCard";
import { ToolbarText } from "./PokemonCard.styles";

type DeleteMyPokemonToolbarProps = {
  data: PokemonCardData;
};

const DeleteMyPokemonToolbar = ({
  data: pokemonData,
}: DeleteMyPokemonToolbarProps) => {
  const { myPokemon, releasePokemon } = useMyPokemon();

  const selectedPokemon = myPokemon.filter(
    (pokemon) => pokemon.nickname === pokemonData.nickname
  )[0];

  const handleDelete = () => releasePokemon(selectedPokemon.nickname);

  const CustomToolbarText = styled(ToolbarText)`
    background-color: ${theme.color.general.red};
    color: ${theme.color.general.white};
    &:hover {
      cursor: pointer;
    }
    font-size: 1.25rem;
    ${up("md")} {
      font-size: 1.75rem;
    }
  `;

  return (
    <CustomToolbarText onClick={handleDelete}>
      <AiOutlineDelete />
    </CustomToolbarText>
  );
};

export default DeleteMyPokemonToolbar;
