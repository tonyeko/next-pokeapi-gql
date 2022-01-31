import { ClientOnly, SEO } from "@/components";
import { PokemonList } from "@/containers";

const HomePage = () => (
  <>
    <SEO pageTitle="Home" />
    <ClientOnly>
      <PokemonList />
    </ClientOnly>
  </>
);

export default HomePage;
