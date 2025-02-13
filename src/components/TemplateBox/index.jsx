import React from "react";
import "./styles.scss";

const TemplateBox = () => {
  return (
    <div className="template-ctn">
      <div className="temp-list-row flex sp-b">
        <span>Investment</span>
        <div className="flex">
          <img src="/icons/eye-temp.svg" alt="eye-temp" />
          <img src="/icons/edit-temp.svg" alt="edit-temp" />
        </div>
      </div>

      <div className="inner-img">
        <img src="/imgs/dumImg.png" alt="dum-img" />
      </div>
    </div>
  );
};

export default TemplateBox;
