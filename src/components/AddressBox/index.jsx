import React from "react";
import "./styles.scss";
import MNormalSwitch from "../MNormalSwitch";

const AddressBox = () => {
  return (
    <div className="address-box-ctn">
      <div className="n-swicth">
        <MNormalSwitch />
      </div>
      <div className="flex-d mt-24 w-100">
        <div className="flex">
          <span className="title-n">Name</span>
          <span className="menu-side">Jason Miraz</span>
        </div>

        <div className="flex">
          <span className="title-n">Address</span>
          <h3 className="address">
            Flat 508 Topaz Residence 1, Dubai Silicon Oasis, Dubai
          </h3>
        </div>

        <div className="flex">
          <span className="title-n">City</span>
          <span className="menu-side">Dubai, United Arab Emirates</span>
        </div>

        <div className="flex">
          <span className="title-n">Phone</span>
          <span className="menu-side">+914 1414 1414 141</span>
        </div>
      </div>

      <div className="flex" style={{ justifyContent: "end" }}>
        <span className="t-under">EDIT</span>
        <span className="t-under">DELETE</span>
      </div>
    </div>
  );
};

export default AddressBox;
