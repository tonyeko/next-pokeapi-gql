export const formatPokemonId = (id: number): string => {
  if (id < 10) {
    return "#00" + id.toString();
  } else if (id < 100) {
    return "#0" + id.toString();
  }
  return "#" + id.toString();
};
