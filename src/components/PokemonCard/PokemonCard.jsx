import React, { useEffect } from "react";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import "./pokemonCard.css";

const PokemonCard = ({ pokemons }) => {

  // console.log(pokemons);

  return (
    <>
      {pokemons && pokemons.map((pokemon, index) => {
        return (
          <div key={index} className="card-container">
            <PokemonInfo pokemon={pokemon} />
          </div>
        );
      })}
    </>
  );
};

export default PokemonCard;
