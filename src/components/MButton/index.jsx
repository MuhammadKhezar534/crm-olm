import React from "react";
import "./styles.scss";
import classNames from "classnames";

const MButton = ({ btnText, onClick, type, styles, simpBtn = false }) => {
  return (
    <div className={classNames("mbutton", { "simp-btn": simpBtn })}>
      <button onClick={onClick} type={type} style={styles}>
        {btnText}
      </button>
    </div>
  );
};

export default MButton;
