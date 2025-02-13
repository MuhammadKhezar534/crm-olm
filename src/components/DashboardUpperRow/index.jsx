import React from "react";
import classNames from "classnames";
import "./styles.scss";

const DashboardUpperRow = ({ tabList, tabHandler, className }) => {
  return (
    <div className={`dash-tab-ctn flex sp-b ${className}`}>
      {tabList?.map((tab) => (
        <div
          className={classNames("dash-tab", { "tab-active": tab.isActive })}
          onClick={() => tabHandler(tab?.title, tab?.id)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default DashboardUpperRow;
