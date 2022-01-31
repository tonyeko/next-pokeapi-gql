import { SEO } from "@/components";
import {
  GetPokemonDetailQueryResult,
  GET_POKEMON_DETAIL,
  PokemonDetail,
} from "@/containers";
import { apolloClient } from "@/lib";
import { capitalize } from "@/utils";
import { GetServerSideProps } from "next";

type PokemonDetailPageProps = {
  data: GetPokemonDetailQueryResult;
} & GetServerSideProps;

const PokemonDetailPage: React.FC<PokemonDetailPageProps> = ({ data }) => (
  <>
    <SEO pageTitle={`${capitalize(data.pokemon.name!)}`} />
    <PokemonDetail data={data} />
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
        data,
      },
    };
  }
  return {
    notFound: true,
  };
};

export default PokemonDetailPage;
