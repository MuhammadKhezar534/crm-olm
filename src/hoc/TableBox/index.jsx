import React from "react";
import "./styles.scss";

const TableBox = ({ children, filters = true, styles }) => {
  return (
    <div className="table-box-ctn" style={styles}>
      {filters && (
        <div className="flex sp-b">
          <div>
            <img src="/icons/colmn.svg" alt="icon-table" />
            <img src="/icons/filter.svg" alt="icon-table" />
            <img src="/icons/density.svg" alt="icon-table" />
            <img src="/icons/export.svg" alt="icon-table" />
          </div>
          <div></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default TableBox;
