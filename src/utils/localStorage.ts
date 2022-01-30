import { Pokemon } from "@/context/MyPokemonContext";

export const readMyPokemon = () => {
  const localData = localStorage.getItem("myPokemon");
  if (localData === null) {
    return null;
  }
  const myPokemon = JSON.parse(localData || "");
  return myPokemon;
};

export const saveMyPokemon = (myPokemon: Pokemon[]) => {
  localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
};

export const removeAllMyPokemons = () => {
  localStorage.removeItem("myPokemon");
};
