import React from "react";
import "./styles.scss";

const TrendingBadge = ({ isTrending = false, value = 20 }) => {
  return (
    <div className={`trending-badge ${isTrending ? "trendUp" : "trendDown"}`}>
      <div className="flex">
        <img
          src={
            isTrending
              ? "/icons/bx_trending-up.svg"
              : "/icons/bx_trending-down.svg"
          }
          alt="trending-icon"
        />
        <span className="spn-v">{value}%</span>
      </div>
    </div>
  );
};

export default TrendingBadge;
