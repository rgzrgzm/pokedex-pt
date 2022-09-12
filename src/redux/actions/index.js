import {
  getPokemonDetail,
  getPokemons,
  getPokemonByName,
  getApiTotalCount,
} from "../../helpers/fetchDataPokemons";

export function getAllPokemons(limit = 25, offset = 0) {
  return async function (dispatch) {
    try {
      const data = await getPokemons(limit, offset);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonDetail(pokemon.url);
      });

      const results = await Promise.all(promises);

      const pokemonInfo = results.map((p) => {
        return {
          id: p.id,
          name: p.name,
          height: p.height,
          weight: p.weight,
          sprites: p.sprites.other.dream_world.front_default,
          types: p.types,
        };
      });

      return dispatch({
        type: "GET_POKEMONS",
        payload: pokemonInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPokemonDetails(name) {
  return async function (dispatch) {
    try {
      if (localStorage.getItem(`pokeDetail${name}`)) {
        // console.log("Detail was  found in localStorage");

        //Get detail pokemon from localStorage
        const strDetail = localStorage.getItem(`pokeDetail${name}`);
        const parsedDetail = JSON.parse(strDetail);

        return dispatch({
          type: "GET_POKEMON_DETAILS",
          payload: parsedDetail,
        });
      } else {
        // console.log("Detail was not found in localStorage");
        const pokemonDetail = await getPokemonByName(name);

        const pokemonInfo = {
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          abilities: pokemonDetail.abilities,
          types: pokemonDetail.types,
          height: pokemonDetail.height,
          weight: pokemonDetail.weight,
          sprites: pokemonDetail.sprites.other.dream_world.front_default,
          stats: pokemonDetail.stats,
          base_experience: pokemonDetail.base_experience,
        };

        //Save details in localStorage
        const jsonDetail = JSON.stringify(pokemonInfo);
        localStorage.setItem(`pokeDetail${pokemonInfo.name}`, jsonDetail);

        return dispatch({
          type: "GET_POKEMON_DETAILS",
          payload: pokemonInfo,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTotalCount() {
  return async function (dispatch) {
    try {
      const totalCount = await getApiTotalCount();

      return dispatch({
        type: "GET_TOTAL_COUNT",
        payload: totalCount,
      });
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

export function cleanStatePokemon() {
  return {
    type: "CLEAN_STATE_POKEMON",
  };
}
