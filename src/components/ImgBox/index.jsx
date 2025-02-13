import React from "react";
import "./styles.scss";

const ImgBox = () => {
  return (
    <div className="img-box">
      <div className="img-opt">Image ( Optional )</div>
      <div className="img-ctn">
        <img src="/imgs/userIm.png" alt="user-img" />
      </div>
    </div>
  );
};

export default ImgBox;
