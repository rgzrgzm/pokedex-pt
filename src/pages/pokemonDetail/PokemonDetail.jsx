import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard/DetailCard";
import "./pokemonDetail.css";
import { cleanStateDetail, getPokemonDetails } from "../../redux/actions";

const PokemonDetail = () => {
  const { name } = useParams();

  const dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  useEffect(() => {
    dispatch(getPokemonDetails(name));

    return () => dispatch(cleanStateDetail());
  }, []);

  return (
    <div className="detail-container">
      <DetailCard pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default PokemonDetail;
