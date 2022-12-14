import axios from "axios";

export const getPokemons = async (limit, offset) => {
  try {
    const { data } = await axios(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
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

export const getApiTotalCount = async () => {
  try {
    const { data } = await axios("https://pokeapi.co/api/v2/pokemon");
    return data.count;
  } catch (error) {
    console.log(error);
  }
};
