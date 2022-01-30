import { ClientOnly, SEO } from "@/components";
import { PokemonList } from "@/containers";

const HomePage = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <ClientOnly>
        <PokemonList />
      </ClientOnly>
    </>
  );
};

export default HomePage;
