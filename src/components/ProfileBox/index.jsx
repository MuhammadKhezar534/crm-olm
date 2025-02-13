import React from "react";
import "./styles.scss";

const ProfileBox = ({ logout }) => {
  return (
    <div className="profile-box-ctn">
      <img src="/imgs/userIm.png" alt="user" className="user-img mb-8" />
      <span className="medium">John Doe</span>
      <span className="low mb-16">John Doe@mycomsy.com</span>

      <div className="flex bord-line">
        <img src="/icons/profile-setting.svg" alt="profile-setting" />
        <span className="medium">Settings</span>
      </div>
      <div className="flex bord-line" onClick={logout}>
        <img src="/icons/logout.svg" alt="logout" />
        <span className="medium" style={{ color: "#FF0000" }}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileBox;
