import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonDetail,
  getPokemons,
} from "../../helpers/fetchDataPokemons";
import { getAllPokemons } from "../../redux/actions";
// import { getAllPokemons, getPokemonDetails } from "../../redux/actions";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./pokemonGrid.css";

const PokemonGrid = () => {
  // const [pokemons, setPokemons] = useState();
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const fetchPokeData = async () => {
    try {
      if (localStorage.getItem("array")) {
        // console.log("Data was found in localStorage");

        const str = localStorage.getItem("array");
        const parsedArr = JSON.parse(str);

        setPokemons(parsedArr);
      } else {
        // console.log("Data was not found in localStorage");

        const data = await getPokemons();
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonDetail(pokemon.url);
        });

        const results = await Promise.all(promises);
        setPokemons(results);
        // save in localStorage
        const jsonArr = JSON.stringify(results);
        localStorage.setItem("array", jsonArr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchPokeData();
    dispatch(getAllPokemons());
  }, []);

  return (
    <div className="grid-container">
      <PokemonCard pokemons={pokemons} />
    </div>
  );
};

export default PokemonGrid;
