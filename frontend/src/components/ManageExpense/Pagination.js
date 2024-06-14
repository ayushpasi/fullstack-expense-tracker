import React from "react";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          <button onClick={() => setPage(page)} className="page-link">
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
