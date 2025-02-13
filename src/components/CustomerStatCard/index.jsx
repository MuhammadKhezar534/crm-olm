import React from "react";
import "./styles.scss";
import TrendingBadge from "../TrendingBadge";
import { IntoComma } from "../../utilities/common";

const CustomerStatCard = ({
  cTitle,
  isTrending,
  trendValue,
  value,
  subtext,
}) => {
  return (
    <div className="cust-card">
      <div className="flex sp-b">
        <span className="mediumUpper">{cTitle}</span>
        <TrendingBadge value={trendValue} isTrending={isTrending} />
      </div>
      <h2 className="mt-16">{IntoComma(value)}</h2>
      <div className="mt-8">{subtext}</div>
    </div>
  );
};

export default CustomerStatCard;
