import React from "react";
import { components } from "react-select";

const CustomIndicator = (props) => {
  const { selectProps } = props;
  const isOpen = selectProps.menuIsOpen;

  const indicatorText = isOpen ? (
    <img src="/icons/arrowUpS.svg" alt="arrow" />
  ) : (
    <img src="/icons/arrowDownS.svg" alt="arrow" />
  );

  return (
    <components.DropdownIndicator {...props}>
      <span style={{ marginRight: "5px" }}>{indicatorText}</span>
    </components.DropdownIndicator>
  );
};

export default CustomIndicator;
