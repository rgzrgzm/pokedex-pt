import React from "react";
import {
  capitalizeFirstLetter,
  styleStats,
  styleTypes,
  transformNameStat,
} from "../../helpers/utils";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

const DetailCard = ({ pokemonDetails }) => {
  return (
    <div className="detailCard-container">
      <h1>Pokemon Detail</h1>

      {pokemonDetails.length === 0 ? (
        <SpinnerLoading />
      ) : (
        <>
          <div className="detail-infoPrincipal">
            <div className="detail-id">
              <div>
                <span>N°{pokemonDetails.id && pokemonDetails.id}</span>
                <p className="detail-name">
                  {pokemonDetails.name &&
                    capitalizeFirstLetter(pokemonDetails.name)}
                </p>
              </div>

              <div className="detail-types">
                {pokemonDetails.types &&
                  pokemonDetails.types.map((types, index) => (
                    <p key={index} className={styleTypes(types.type.name)}>
                      {capitalizeFirstLetter(types.type.name)}
                    </p>
                  ))}
              </div>
            </div>
            <img
              src={pokemonDetails.sprites && pokemonDetails.sprites}
              alt=""
            />
          </div>

          <div className="detail-abilities">
            <h2>ABILITIES</h2>
            <div className="detail-infoAbilities">
              {pokemonDetails.abilities &&
                pokemonDetails.abilities.map((abilities, index) => (
                  <span key={index}>
                    {capitalizeFirstLetter(abilities.ability.name)}
                  </span>
                ))}
            </div>
          </div>

          <h2 className="condition-title">CONDITION</h2>

          <div className="detail-condition">
            <div className="detail-infoCondition">
              <div className="detail-conditionText">
                <p>HEIGHT</p>
                <span>{pokemonDetails.height}m</span>
              </div>
              <div className="detail-conditionText">
                <p>WEIGHT</p>
                <span>{pokemonDetails.weight}kg</span>
              </div>
            </div>
            <div className="detail-infoExp">
              <p>BASE EXP</p>
              <span>
                {pokemonDetails.base_experience &&
                  pokemonDetails.base_experience}
              </span>
            </div>
          </div>

          <div className="detail-stats">
            <h2>STATS</h2>
            <div className="detail-infoStats">
              {pokemonDetails.stats &&
                pokemonDetails.stats.map((stats, index) => (
                  <div className="detail-stat" key={index}>
                    <span className={styleStats(stats.stat.name)}>
                      {transformNameStat(stats.stat.name)}
                    </span>
                    <p>{stats.base_stat}</p>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailCard;
