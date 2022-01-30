import { Container, Typography } from "@/shared";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";
import { GetPokemonDetailQueryResult } from "./PokemonDetail.queries";
import Image from "next/image";
import { formatPokemonId } from "@/utils";
import { Badge } from "@/components";

type PokemonDetailProps = {
  data: GetPokemonDetailQueryResult;
};

const PokemonDetail = ({ data }: PokemonDetailProps) => {
  const theme = useTheme();
  const {
    pokemon: { types, id, name, abilities, moves },
  } = data;

  const firstType = types?.[0]?.type?.name || "unknown";

  const customBorderStyles = css`
    border: 4px solid ${theme.color.general.black};
    border-radius: 0.375rem;
    box-shadow: 4px 5px 0 ${theme.color.type[firstType]};
  `;

  const Grid = styled.div`
    margin: 1rem 1rem 0;
    display: grid;
    grid-gap: 1.5rem;
    overflow: visible !important;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    ${up("md")} {
      margin: 1rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `;

  const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    ${customBorderStyles}
  `;

  const TitleContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    flex-direction: column;
    margin: 1.5rem auto;
    ${up("md")} {
      margin: 3rem auto;
      flex-direction: row;
      gap: 1rem;
    }
    text-align: center;
  `;

  const Title = styled(Typography.H1)`
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.025rem;
  `;

  const SubTitle = styled(Typography.H2)`
    font-weight: 700;
  `;

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.75rem auto 1.25rem;
    padding: 0.25rem;
    ${customBorderStyles}
  `;

  const ContentText = styled(Typography.Paragraph)`
    text-transform: capitalize;
    font-weight: 500;
  `;

  const ContentFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    border-radius: 0.375rem;
    margin: 0.5rem;
  `;

  const MovesContentText = styled(ContentText)`
    border: 2px solid ${theme.color.general.black};
    border-radius: 0.375rem;
    padding: 0.125rem 0.25rem;
  `;

  const getDreamWorldImage = (pokemonId: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  return (
    <Container css={{ marginTop: "1rem" }}>
      <TitleContainer>
        <SubTitle>{formatPokemonId(id!)}</SubTitle>
        <Title>{name}</Title>
      </TitleContainer>
      <Grid>
        <div>
          <ImageContainer>
            <Image
              src={getDreamWorldImage(id!)}
              width="256px"
              height="256px"
              alt={name}
            />
          </ImageContainer>
        </div>
        <div>
          <SubTitle>Types</SubTitle>
          <ContentContainer>
            <ContentFlex>
              {types?.map((type, idx) => (
                <Badge variant="ghost" key={idx}>
                  {type.type?.name}
                </Badge>
              ))}
            </ContentFlex>
          </ContentContainer>
          <SubTitle>Abilities</SubTitle>
          <ContentContainer>
            {abilities?.map((ability, idx) => (
              <ContentText key={idx}>{ability.ability?.name}</ContentText>
            ))}
          </ContentContainer>
        </div>
      </Grid>
      <Grid css={{ gridGap: 0, margin: "0 1rem" }}>
        <SubTitle css={{ gridColumn: "span 2 / span 2" }}>Moves</SubTitle>
        <ContentContainer css={{ gridColumn: "span 2 / span 2" }}>
          <ContentFlex>
            {moves?.map((move, idx) => (
              <MovesContentText key={idx}>{move.move?.name}</MovesContentText>
            ))}
          </ContentFlex>
        </ContentContainer>
      </Grid>
    </Container>
  );
};

export default PokemonDetail;
