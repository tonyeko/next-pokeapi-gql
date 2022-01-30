import { SEO } from "@/components";
import {
  GetPokemonDetailQueryResult,
  GET_POKEMON_DETAIL,
  PokemonDetail,
} from "@/containers";
import { apolloClient } from "@/lib";
import { GetServerSideProps } from "next";

type PokemonDetailPageProps = {
  pokemon: GetPokemonDetailQueryResult;
} & GetServerSideProps;

const PokemonDetailPage: React.FC<PokemonDetailPageProps> = ({ pokemon }) => (
  <>
    <SEO pageTitle={`Bulbasaur`} />
    <PokemonDetail data={pokemon} />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params && params.name) {
    const { name } = params;
    const { data } = await apolloClient.query({
      query: GET_POKEMON_DETAIL,
      variables: { name: name as string },
    });
    return {
      props: {
        pokemon: data,
      },
    };
  }
  return {
    notFound: true,
  };
};

export default PokemonDetailPage;
