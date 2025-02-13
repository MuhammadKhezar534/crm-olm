import React from "react";
import "./styles.scss";

const TwoHeadings = ({ heading, title }) => {
  return (
    <div className="two-head-title">
      <h5>{heading}</h5>
      <h4>{title}</h4>
    </div>
  );
};

export default TwoHeadings;
