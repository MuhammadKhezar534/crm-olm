import React from "react";
import TitleWithArrow from "../TitleWithArrow";
import "./styles.scss";
import InputAboveTitle from "../InputAboveTitle";
import SwitchWithTitle from "../SwitchWithTitle";

const ContactInformation = ({ onClick, id, removeIt, list }) => {
  return (
    <div className="contact-information-ctn">
      <TitleWithArrow
        title="Contact Number"
        styles={{ marginBottom: "20px" }}
      />
      <div className="flex f-wrap">
        <InputAboveTitle
          styles={{ width: "250px" }}
          title="Contact Number"
          placeholder="Enter Contact Number"
        />
        <SwitchWithTitle title="Set as default contact number" />
        <div className="plus-box" onClick={onClick}>
          <img src="/icons/plus-img.svg" alt="plus-svg" />
        </div>

        {list?.length >= 2 && (
          <img
            src="/icons/delete.png"
            alt="delete"
            style={{ cursor: "pointer" }}
            onClick={() => removeIt(id)}
          />
        )}
      </div>
    </div>
  );
};

export default ContactInformation;
