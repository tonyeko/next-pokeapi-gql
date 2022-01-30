import { ClientOnly, SEO } from "@/components";
import { PokemonListContainer } from "@/containers";

const Home = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <ClientOnly>
        <PokemonListContainer />
      </ClientOnly>
    </>
  );
};

export default Home;
