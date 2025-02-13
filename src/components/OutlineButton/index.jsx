import React from "react";
import "./styles.scss";

const OutlineButton = ({ btnText = "Back", onClick }) => {
  return (
    <div className="outline-btn">
      <button onClick={onClick}>{btnText}</button>
    </div>
  );
};

export default OutlineButton;
