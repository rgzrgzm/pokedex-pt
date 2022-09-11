import React from "react";

const DetailCard = ({ pokemonDetails }) => {
  const transformNameStat = (name) => {
    if (name === "hp") {
      return "HP";
    }

    if (name === "attack") {
      return "ATK";
    }

    if (name === "defense") {
      return "DEF";
    }

    if (name === "special-attack") {
      return "SA";
    }

    if (name === "special-defense") {
      return "SD";
    }

    if (name === "speed") {
      return "SPD";
    }

    return name;
  };
  return (
    <div>
      <h1>Pokemon Detail</h1>

      <div className="detail-infoPrincipal">
        <div className="detail-id">
          <div>
            <span>{pokemonDetails.id && pokemonDetails.id}</span>
            <p>{pokemonDetails.name && pokemonDetails.name}</p>
          </div>

          <div className="detail-types">
            {pokemonDetails.types &&
              pokemonDetails.types.map((types, index) => (
                <p key={index}>{types.type.name}</p>
              ))}
          </div>
        </div>
        <img
          src={
            pokemonDetails.sprites &&
            pokemonDetails.sprites.other.dream_world.front_default
          }
          alt=""
        />
      </div>

      <div className="detail-abilities">
        <h2>ABILITIES</h2>
        <div className="detail-infoAbilities">
          {pokemonDetails.abilities &&
            pokemonDetails.abilities.map((abilities, index) => (
              <span key={index}>{abilities.ability.name}</span>
            ))}
        </div>
      </div>

      <div className="detail-condition">
        <div className="detail-infoCondition">
          <div className="detail-conditionText">
            <p>HEIGHT</p>
            <span>10m</span>
          </div>
          <div className="detail-conditionText">
            <p>WEIGHT</p>
            <span>10k</span>
          </div>
        </div>
        <div className="detail-infoExp">
          <p>BASE EXP</p>
          <span>
            {pokemonDetails.base_experience && pokemonDetails.base_experience}
          </span>
        </div>
      </div>

      <div className="detail-stats">
        <h2>STATS</h2>
        <div className="detail-infoStats">
          {pokemonDetails.stats &&
            pokemonDetails.stats.map((stats, index) => (
              <div className="detail-stat" key={index}>
                <span>{transformNameStat(stats.stat.name)}</span>
                <p>{stats.base_stat}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
