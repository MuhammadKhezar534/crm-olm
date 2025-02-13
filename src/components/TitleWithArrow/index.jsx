import React from "react";
import "./styles.scss";

const TitleWithArrow = ({ title, styles }) => {
  return (
    <div className="title-with-arrow flex" style={styles}>
      <span>{title}</span>
      <img src="/icons/dArrow.svg" alt="down-arrow" />
    </div>
  );
};

export default TitleWithArrow;
