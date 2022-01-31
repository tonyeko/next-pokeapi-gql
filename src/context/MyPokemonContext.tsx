import { createContext, useContext, useEffect, useState } from "react";
import { readMyPokemon, saveMyPokemon, removeAllMyPokemons } from "@/utils";

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  nickname: string;
};

type MyPokemonContextType = {
  myPokemon: Pokemon[];
  savePokemon: (pokemon: PokeAPI.Pokemon, nickname: string) => void;
  releasePokemon: (nickname: string) => void;
  clearMyPokemon: () => void;
};

const MyPokemonContext = createContext<MyPokemonContextType>({
  myPokemon: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  releasePokemon: () => {},
  savePokemon: () => {},
  clearMyPokemon: () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

const MyPokemonProvider: React.FC = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState<Pokemon[]>([]);

  const savePokemon = (pokemon: PokeAPI.Pokemon, nickname: string) => {
    const pokemonPayload: Pokemon = {
      id: pokemon.id!,
      name: pokemon.name!,
      types: pokemon.types!.map((type) => type.type?.name || "unknown"),
      nickname,
    };

    const payload = [...myPokemon, pokemonPayload];
    setMyPokemon(payload);
    saveMyPokemon(payload);
  };

  const releasePokemon = (nickname: string) => {
    const filtered = myPokemon.filter(
      (pokemon) => pokemon.nickname !== nickname
    );
    setMyPokemon(filtered);
    saveMyPokemon(filtered);
  };

  const clearMyPokemon = () => {
    setMyPokemon([]);
    removeAllMyPokemons();
  };

  useEffect(() => {
    const localData = readMyPokemon();
    if (localData) {
      setMyPokemon(localData);
    }
  }, []);

  return (
    <MyPokemonContext.Provider
      value={{ myPokemon, releasePokemon, savePokemon, clearMyPokemon }}
    >
      {children}
    </MyPokemonContext.Provider>
  );
};

const useMyPokemon = () => useContext(MyPokemonContext);

export { MyPokemonContext, MyPokemonProvider, useMyPokemon };
