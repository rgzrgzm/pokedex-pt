import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getTotalCount } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import "./pokemonGrid.css";

const PokemonGrid = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const count = useSelector((state) => state.totalCount);

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllPokemons(25, 25 * page));
    dispatch(getTotalCount());
  }, [page]);

  useEffect(() => {
    setTotal(Math.ceil(count / 25));
  }, [count, loading]);

  return (
    <div className="body-container">
      <div className="pagination-wrapper">
        <Pagination
          page={page}
          setPage={setPage}
          total={total}
          setLoading={setLoading}
        />
      </div>
      {loading && pokemons.length === 0 ? (
        <SpinnerLoading />
      ) : (
        <div className="grid-container">
          <PokemonCard pokemons={pokemons} />
        </div>
      )}
    </div>
  );
};

export default PokemonGrid;
