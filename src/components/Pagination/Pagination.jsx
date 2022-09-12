import React from "react";
import "./pagination.css";
import left from "./left.svg";
import right from "./right.svg";
import { useDispatch } from "react-redux";
import { cleanStatePokemon } from "../../redux/actions";

const Pagination = ({ page, setPage, total, setLoading }) => {
  const dispatch = useDispatch();

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
    dispatch(cleanStatePokemon());
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
    dispatch(cleanStatePokemon());
  };

  const resetPage = () => {
    if (page !== 0) {
      setPage(0);
      setLoading(true);
      dispatch(cleanStatePokemon());
    }
  };

  return (
    <div className="pagination-container">
      {page !== 0 && (
        <button onClick={() => lastPage()} type="button">
          <img src={left} alt="left_arrow" />
        </button>
      )}

      <span>{page + 1}</span>
      <p>to</p>
      <span>{total}</span>

      {page + 1 !== total && (
        <button onClick={() => nextPage()} type="button">
          <img src={right} alt="rigth_arrow" />
        </button>
      )}

      <button
        type="button"
        onClick={() => resetPage()}
        className={
          page === 0
            ? "pagination-reset pagination-reset-disabled"
            : "pagination-reset"
        }
      >
        RESET
      </button>
    </div>
  );
};

export default Pagination;
