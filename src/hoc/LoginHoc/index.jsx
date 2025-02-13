import React from "react";
import "./styles.scss";

const LoginHoc = ({ children }) => {
  const bg = "/imgs/bg-img.png";
  return (
    <div className="top-ctn" style={{ backgroundImage: "url(" + bg + ")" }}>
      <div className="upper-bar">
        <img src="/icons/Wafaa_logo-s.svg" alt="logo" />
      </div>
      {children}
    </div>
  );
};

export default LoginHoc;
