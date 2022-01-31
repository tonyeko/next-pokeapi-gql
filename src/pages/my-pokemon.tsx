import { SEO } from "@/components";
import { MyPokemon } from "@/containers";

const HomePage = () => {
  return (
    <>
      <SEO pageTitle="My Pokemons" />
      <MyPokemon />
    </>
  );
};

export default HomePage;
