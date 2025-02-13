import React from "react";
import Switch from "@mui/material/Switch";
import "./styles.scss";
import useStore from "../../store/store";

const label = { inputProps: { "aria-label": "Switch demo" } };
const MSwitch = ({ onClick }) => {
  const { sidebarIsOpen } = useStore();

  return (
    <div className="m-sw">
      <Switch
        {...label}
        defaultChecked
        onClick={onClick}
        checked={sidebarIsOpen}
      />
    </div>
  );
};

export default MSwitch;
