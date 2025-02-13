import React from "react";
import "./styles.scss";
import ProgressBar from "../ProgressBar";

const PromotionBar = ({ index, name, popularity, colors = [] }) => {
  return (
    <td className="promotion-bar">
      <span className="low">0{index}</span>
      <span className="low">{name}</span>
      <ProgressBar width={`${popularity}%`} colors={colors} />
      <span
        className="badge-c low"
        style={{
          backgroundColor: colors[1],
          color: colors[0],
          border: `1px solid ${colors[0]}`,
        }}
      >
        {popularity}%
      </span>
    </td>
  );
};

export default PromotionBar;
