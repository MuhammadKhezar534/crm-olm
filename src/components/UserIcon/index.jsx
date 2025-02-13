import React from "react";
import "./styles.scss";

const UserIcon = ({ toggleBox }) => {
  return (
    <div className="user-icon flex" onClick={toggleBox}>
      <img src="/icons/user.svg" alt="user" />
      <img src="/icons/arrDown.svg" alt="arrow" className="arr-ic" />
    </div>
  );
};

export default UserIcon;
