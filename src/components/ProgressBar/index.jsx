import React from "react";
import "./styles.scss";

const ProgressBar = ({ width, colors = [] }) => {
  return (
    <div className="bar-ctn" style={{ backgroundColor: colors[1] }}>
      <div
        className="progress-b"
        style={{ width: width, backgroundColor: colors[0] }}
      ></div>
    </div>
  );
};

export default ProgressBar;
