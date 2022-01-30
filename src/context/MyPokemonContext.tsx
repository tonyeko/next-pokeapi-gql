import { createContext, useContext, useEffect, useState } from "react";
import { readMyPokemon, saveMyPokemon, removeAllMyPokemons } from "@/utils";

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  sprites?: string;
  nickname?: string;
};

type MyPokemonContextType = {
  myPokemon: Pokemon[];
  savePokemon: (pokemon: PokeAPI.Pokemon, nickname: string) => void;
  releasePokemon: (idx: number) => void;
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

const MyPokemonProvider: React.FC = (props) => {
  const [myPokemon, setMyPokemon] = useState<Pokemon[]>([]);

  const savePokemon = (pokemon: PokeAPI.Pokemon, nickname: string) => {
    const pokemonPayload: Pokemon = {
      id: pokemon.id!,
      name: pokemon.name!,
      types: pokemon.types!.map((type) => type.type?.name || "unknown"),
      sprites: pokemon.sprites?.front_default,
      nickname,
    };

    const payload = [...myPokemon, pokemonPayload];
    setMyPokemon(payload);
    saveMyPokemon(payload);
  };

  const releasePokemon = (idx: number) => {
    const filtered = [...myPokemon];
    filtered.splice(idx, 1);
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
      {...props}
    />
  );
};

const useMyPokemon = () => useContext(MyPokemonContext);

export { MyPokemonContext, MyPokemonProvider, useMyPokemon };
