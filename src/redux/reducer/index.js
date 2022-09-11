const initialState = {
  pokemons: [],
  pokemonDetails: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };

    case "GET_POKEMON_DETAILS":
      console.log(action.type);
      return {
        ...state,
        pokemonDetails: action.payload,
      };

    case "CLEAN_DETAILS":
      return {
        ...state,
        pokemonDetails: [],
      };
    default:
      return state;
  }
}

export default rootReducer;
