import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const MCheckbox = ({ className }) => {
  return (
    <div className="c-box">
      <Checkbox {...label} className={className} />
    </div>
  );
};

export default MCheckbox;
