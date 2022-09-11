import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../helpers/fetchDataPokemons";
import DetailCard from "../../components/DetailCard/DetailCard";
import "./pokemonDetail.css";
import { cleanStateDetail, getPokemonDetails } from "../../redux/actions";

const PokemonDetail = () => {
  const { name } = useParams();
  // const [pokemonDetails, setPokemonDetails] = useState({});

  const dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  const getPokemonDetail = async () => {
    if (localStorage.getItem(`pokeDetail${name}`)) {
      console.log("Detail was  found in localStorage");
      //Get detail pokemon from localStorage
      const strDetail = localStorage.getItem(`pokeDetail${name}`);
      const parsedDetail = JSON.parse(strDetail);
      setPokemonDetails(parsedDetail);
    } else {
      console.log("Detail was not found in localStorage");
      const pokemonDetail = await getPokemonByName(name);
      setPokemonDetails(pokemonDetail);
      //Save new pokemon detail in localStorage
      const jsonDetail = JSON.stringify(pokemonDetail);
      localStorage.setItem(`pokeDetail${pokemonDetail.name}`, jsonDetail);
    }
  };

  useEffect(() => {
    // getPokemonDetail();
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
