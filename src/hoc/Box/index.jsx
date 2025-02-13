import React from "react";
import "./styles.scss";

const Box = ({ children, styles }) => {
  return (
    <div className="box-hoc" style={styles}>
      {children}
    </div>
  );
};

export default Box;
