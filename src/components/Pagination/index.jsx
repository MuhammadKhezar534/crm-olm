import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import "./styles.scss";
import classNames from "classnames";

const Pagination = ({
  marginPagesDisplayed = 2,
  pageRangeDisplayed = 2,
  currentPage,
  pageCount = 10,
  onPageChange,
}) => {
  const [arrow, setArrow] = useState({
    prev: false,
    next: false,
  });

  const setArrowHoverState = (type) => {
    setArrow((prev) => {
      return {
        ...prev,
        [type]: !prev[type],
      };
    });
  };

  return (
    <div className="pagination-div">
      <ReactPaginate
        previousLabel={
          <div
            className={classNames("prev-arrow", { "prev-hover": arrow.prev })}
            onMouseEnter={() => setArrowHoverState("prev")}
            onMouseLeave={() => setArrowHoverState("prev")}
          >
            <img src="/assets/icons/arrowPrev.svg" alt="arrow" />
          </div>
        }
        breakLabel="..."
        nextLabel={
          <div
            className={classNames("next-arrow", { "nxt-hover": arrow.next })}
            onMouseEnter={() => setArrowHoverState("next")}
            onMouseLeave={() => setArrowHoverState("next")}
          >
            <img src="/assets/icons/arrowNext.svg" alt="arrow" />
          </div>
        }
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        pageClassName="pages"
        activeClassName="active"
        breakClassName="break-me"
        containerClassName="pagination"
        forcePage={currentPage}
        onPageChange={(selected) => {
          onPageChange(selected);
        }}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Pagination;
