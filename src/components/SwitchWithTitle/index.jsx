import React from "react";
import CheckBoxWithImg from "../CheckBoxWithImg";
import "./styles.scss";

const SwitchWithTitle = ({ title }) => {
  return (
    <div className="switch-title flex">
      <CheckBoxWithImg />
      <span>{title}</span>
    </div>
  );
};

export default SwitchWithTitle;
