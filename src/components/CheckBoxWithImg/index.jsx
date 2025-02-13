import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CheckBoxWithImg = () => {
  return (
    <Checkbox
      {...label}
      icon={<img src="/imgs/checkBox.png" alt="Unchecked" />}
      checkedIcon={<img src="/imgs/activeCheckBox.png" alt="checkedIcon" />}
    />
  );
};

export default CheckBoxWithImg;
