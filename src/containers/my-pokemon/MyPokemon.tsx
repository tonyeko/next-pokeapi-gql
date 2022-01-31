import { CenteredDiv, Container, Typography } from "@/shared";
import { PokemonCard, PokemonCardData } from "@/containers";
import { useMyPokemon } from "@/context";

import { Grid } from "./MyPokemon.styles";
import { toPokemonTypes, getDreamWorldImage } from "@/utils";
import { Button, Link } from "@/components";

const MyPokemon = () => {
  const { myPokemon } = useMyPokemon();

  const pokemons: PokemonCardData[] =
    myPokemon && myPokemon.length
      ? myPokemon.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          nickname: pokemon.nickname,
          types: toPokemonTypes(pokemon.types),
          dreamworld: getDreamWorldImage(pokemon.id),
        }))
      : [];

  return (
    <Container>
      {pokemons.length ? (
        <Grid>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.nickname}
              data={pokemon}
              toolbar="delete-my-pokemon"
            />
          ))}
        </Grid>
      ) : (
        <CenteredDiv minHeight="92.5vh" css={{ gap: "1rem" }}>
          <Typography.H2 fontWeight="bold">Empty</Typography.H2>
          <Link href="/" css={{ textDecoration: "none" }}>
            <Button>
              <Typography.Paragraph>Catch Pokemon</Typography.Paragraph>
            </Button>
          </Link>
        </CenteredDiv>
      )}
    </Container>
  );
};

export default MyPokemon;
