import React from "react";
import RSelect from "../RSelect";
import "./styles.scss";

const SelectWithTitle = ({ title = "Birth Day", placeholder }) => {
  return (
    <div className="sel-w-title">
      <RSelect title={title} placeholder={placeholder} />
    </div>
  );
};

export default SelectWithTitle;
