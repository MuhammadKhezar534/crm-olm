import React, { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import sideMenus from "../../utilities/jsons/menus.json";
import useStore from "../../store/store";
import "./styles.scss";
import { parseMenusOnMount, setMenusActive } from "../../utilities/common";

const campaignSubMenu = [
  { isActive: false, title: "E-mail Template", to: "/e-template" },
  {
    isActive: false,
    title: "E-mail  Campaign",
    to: "/e-campaign",
  },
];

const SideBar = () => {
  const { sidebarIsOpen, toggleSideBar } = useStore();
  // const { pathname } = useLocation();
  const [menus, setMenus] = useState(sideMenus);
  const [subMenus, setSubMenus] = useState(campaignSubMenu);

  // const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const { pathname } = useLocation();

  console.log({ menus });

  const handleMenus = (menu, to) => {
    const pMenus = setMenusActive(menus, menu);
    handleSubMenus("");
    setMenus(pMenus);
    navigate(to);
  };

  const handleSubMenus = (menu, to) => {
    const pMenus = setMenusActive(subMenus, menu);
    console.log({ pMenus });
    setSubMenus(pMenus);
    // navigate(to);
  };

  useEffect(() => {
    const pMenus = parseMenusOnMount(menus, window.location?.pathname);
    setMenus(pMenus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className={classNames("sidebar", { "is-open": sidebarIsOpen })}>
      <div className="backdrop" onClick={toggleSideBar}></div>

      <div className="sidebar-header flex" onClick={() => navigate("/")}>
        <img
          src="/icons/Wafaa_logo.svg"
          alt="logo"
          style={{ cursor: "pointer" }}
        />
        <img src="/icons/wafaa-crm.svg" alt="wafa" />
        {/* <img
          src="/icons/Vector.svg"
          alt="vector"
          className="icon"
          onClick={toggleSideBar}
        /> */}
      </div>
      <div className="side-menu flex">
        {menus.map((men) => (
          <Fragment>
            <div
              className={classNames("nav-item-div", {
                "is-active-nav": men.isActive,
              })}
              onClick={() => handleMenus(men.title, men.to, men?.display)}
              key={men.title}
            >
              <img
                src={men.isActive ? men.activeSrc : men.inactiveSrc}
                alt="nav-item-icon"
              />
              <div
                className={classNames("menu-side", {
                  "is-active": men.isActive,
                })}
              >
                {men.title}
              </div>
            </div>
            {men.haveChild && (
              <div
                className="flex-d sub-m-row"
                style={{ display: men.isActive ? "flex" : "none" }}
              >
                {subMenus?.map((sMenu) => (
                  <span
                    className={classNames("submenu-side sub-menu", {
                      "sub-men-act": sMenu.isActive,
                    })}
                    onClick={() => handleSubMenus(sMenu.title, men.to)}
                  >
                    {sMenu.title}
                  </span>
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
