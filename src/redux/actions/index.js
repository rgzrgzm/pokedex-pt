import {
  getPokemonDetail,
  getPokemons,
  getPokemonByName,
} from "../../helpers/fetchDataPokemons";

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      if (localStorage.getItem("array")) {
        console.log("Data was found in localStorage");

        const str = localStorage.getItem("array");
        const parsedArr = JSON.parse(str);
        return dispatch({
          type: "GET_POKEMONS",
          payload: parsedArr,
        });
      } else {
        console.log("Data was not found in localStorage");

        const data = await getPokemons();
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonDetail(pokemon.url);
        });

        const results = await Promise.all(promises);
        // save in localStorage
        const jsonArr = JSON.stringify(results);
        localStorage.setItem("array", jsonArr);

        return dispatch({
          type: "GET_POKEMONS",
          payload: results,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPokemonDetails(name) {
  return async function (dispatch) {
    try {
      if (localStorage.getItem(`pokeDetail${name}`)) {
        console.log("Detail was  found in localStorage");
        //Get detail pokemon from localStorage
        const strDetail = localStorage.getItem(`pokeDetail${name}`);
        const parsedDetail = JSON.parse(strDetail);

        return dispatch({
          type: "GET_POKEMON_DETAILS",
          payload: parsedDetail,
        });
      } else {
        console.log("Detail was not found in localStorage");
        const pokemonDetail = await getPokemonByName(name);
        const jsonDetail = JSON.stringify(pokemonDetail);
        localStorage.setItem(`pokeDetail${pokemonDetail.name}`, jsonDetail);

        return dispatch({
          type: "GET_POKEMON_DETAILS",
          payload: pokemonDetail,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanStateDetail() {
  return {
    type: "CLEAN_DETAILS",
  };
}
