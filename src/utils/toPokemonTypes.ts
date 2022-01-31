export const toPokemonTypes = (types: string[]): PokeAPI.Type[] =>
  types.map((type) => ({
    type: {
      name: type,
    },
  }));
