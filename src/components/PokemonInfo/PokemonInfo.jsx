import React from "react";
import { Link } from "react-router-dom";
import "./pokemonInfo.css";

const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="info-container">
      <img src={pokemon.sprites.other.dream_world.front_default} alt="" />

      <div className="info-bottom">
        <span className="info-id">N°{pokemon.id}</span>

        <p className="info-name">{pokemon.name}</p>

        <div className="info-types">
          {pokemon.types &&
            pokemon.types.map((types, index) => (
              <p key={index}>{types.type.name}</p>
            ))}
        </div>

        <Link to={`pokemon/details/${pokemon.name}`}>View more</Link>
      </div>
    </div>
  );
};

export default PokemonInfo;
