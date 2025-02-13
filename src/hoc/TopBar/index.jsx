import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import useStore from "../../store/store";
import MSwitch from "../../components/MSwitch";
import MSearch from "../../components/MSearch";
import UserIcon from "../../components/UserIcon";
import "./styles.scss";
import ProfileBox from "../../components/ProfileBox";
import { useNavigate } from "react-router-dom";

const TopBar = ({ children, title }) => {
  const { sidebarIsOpen, toggleSideBar } = useStore();
  const [isBoxOpen, setBox] = useState(false);
  const boxRef = useRef(null);
  let navigate = useNavigate();

  const toggleBox = () => {
    setBox((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef?.current && !boxRef.current.contains(event.target)) {
        setBox(false);
      }
    };
    if (isBoxOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isBoxOpen]);

  const logout = () => {
    localStorage.removeItem("Auth");
    navigate("/login");
  };

  return (
    <div className={classNames("top-bar", { "is-open": sidebarIsOpen })}>
      <div className="flex sp-b">
        {/* <img
          className="toggle-btn"
          src="/icons/Vector.svg"
          alt="vector"
          onClick={toggleSideBar}
        /> */}
        <div className="flex">
          <MSwitch onClick={toggleSideBar} />
          <h3>{title}</h3>
        </div>
        <MSearch />
        <div className="flex mr-48 user-p" ref={boxRef}>
          <img
            src="/icons/notification.svg"
            alt="notification"
            className="bell-icon"
          />
          <UserIcon toggleBox={toggleBox} />

          {isBoxOpen && <ProfileBox logout={logout} />}
        </div>
      </div>

      {children}
    </div>
  );
};

export default TopBar;
