import React from "react";
import Select from "react-select";
import { selectStyles } from "./styles";
import classNames from "classnames";
import "./styles.scss";

const options1 = [
  {
    value: "Text 1",
    label: "Text 1",
  },
  {
    value: "Text 2",
    label: "Text 2",
  },
  {
    value: "Text 3",
    label: "Text 3",
  },
];
const CustomIndicatorSeparator = () => {
  return null;
};

const RSelect = ({
  showImg = false,
  title,
  showtitle = true,
  width,
  styles,
  options,
  placeholder = "Select your region",
}) => {
  return (
    <div
      className={classNames("img-select", { "n-img": !showImg })}
      style={{ width: width, ...styles }}
    >
      {!showImg && showtitle && <span className="in-title">{title}</span>}
      <Select
        options={showtitle ? options1 : options}
        className="s-select"
        styles={selectStyles(width)}
        isSearchable={false}
        placeholder={placeholder}
        components={{
          IndicatorSeparator: CustomIndicatorSeparator,
        }}
      />
      {showImg && (
        <img src="/icons/region.svg" alt="region" className="c-img" />
      )}{" "}
    </div>
  );
};

export default RSelect;
