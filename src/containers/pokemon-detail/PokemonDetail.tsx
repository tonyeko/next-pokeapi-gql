import Image from "next/image";

import { Container } from "@/shared";
import { formatPokemonId, getDreamWorldImage } from "@/utils";
import { Badge } from "@/components";
import CatchButton from "./CatchButton";

import {
  TitleContainer,
  SubTitle,
  Title,
  Grid,
  ImageContainer,
  ContentContainer,
  ContentFlex,
  ContentText,
  MovesContentText,
} from "./PokemonDetail.styles";
import { GetPokemonDetailQueryResult } from "./PokemonDetail.queries";

type PokemonDetailProps = {
  data: GetPokemonDetailQueryResult;
};

const PokemonDetail = ({ data }: PokemonDetailProps) => {
  const {
    pokemon: { types, id, name, abilities, moves },
  } = data;

  const firstType = types?.[0]?.type?.name || "unknown";

  return (
    <Container css={{ marginTop: "1rem" }}>
      <TitleContainer>
        <SubTitle>{formatPokemonId(id!)}</SubTitle>
        <Title>{name}</Title>
      </TitleContainer>
      <CatchButton pokemon={data.pokemon} />
      <Grid>
        <div>
          <ImageContainer color={firstType}>
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
          <ContentContainer color={firstType}>
            <ContentFlex>
              {types?.map((type, idx) => (
                <Badge variant="ghost" key={idx}>
                  {type.type?.name}
                </Badge>
              ))}
            </ContentFlex>
          </ContentContainer>
          <SubTitle>Abilities</SubTitle>
          <ContentContainer color={firstType}>
            {abilities?.map((ability, idx) => (
              <ContentText key={idx}>{ability.ability?.name}</ContentText>
            ))}
          </ContentContainer>
        </div>
      </Grid>
      <Grid css={{ gridGap: 0, margin: "0 1rem" }}>
        <SubTitle css={{ gridColumn: "span 2 / span 2" }}>Moves</SubTitle>
        <ContentContainer
          css={{ gridColumn: "span 2 / span 2" }}
          color={firstType}
        >
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
