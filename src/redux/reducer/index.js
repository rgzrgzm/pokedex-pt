const initialState = {
  pokemons: [],
  pokemonDetails: [],
  totalCount: 0,
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

    case "GET_TOTAL_COUNT":
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
