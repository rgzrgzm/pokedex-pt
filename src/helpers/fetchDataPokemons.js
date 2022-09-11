import axios from "axios";

export const getPokemons = async () => {
  try {
    const { data } = await axios("https://pokeapi.co/api/v2/pokemon");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonDetail = async (url) => {
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByName = async (name) => {
  try {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
