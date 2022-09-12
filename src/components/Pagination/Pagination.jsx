import React from "react";
import "./pagination.css";
import left from "./left.svg";
import right from "./right.svg";
import reset from "./reset.svg";

const Pagination = ({ page, setPage, total }) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  const resetPage = () => {
    setPage(0);
  };

  return (
    <div className="pagination-container">
      <button onClick={() => lastPage()} type="button">
        <img src={left} alt="" />
      </button>

      <span>{page + 1}</span>
      <p>to</p>
      <span>{total}</span>

      <button onClick={() => nextPage()} type="button">
        <img src={right} alt="" />
      </button>

      <button
        type="button"
        onClick={() => resetPage()}
        className="pagination-reset"
      >
        RESET
      </button>
    </div>
  );
};

export default Pagination;
