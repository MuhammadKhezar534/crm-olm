import React from "react";
import "./styles.scss";

const MSearch = () => {
  return (
    <div className="m-search">
      <input type="text" className="c-inp" placeholder="Search here..." />
      <img src="/icons/search.svg" alt="search" />
    </div>
  );
};

export default MSearch;
