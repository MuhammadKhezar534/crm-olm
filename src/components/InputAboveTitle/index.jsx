import React from "react";
import "./styles.scss";

const InputAboveTitle = ({
  title = "Contact Number",
  placeholder = "Enter Contact Number",
  styles,
}) => {
  return (
    <div className="input-w-title" style={styles}>
      <span className="spn">{title}</span>
      <input placeholder={placeholder} type="text" />
    </div>
  );
};

export default InputAboveTitle;
