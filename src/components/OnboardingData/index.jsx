import React from "react";
import { colorsForOnboarding, onboardingData } from "../../utilities/mock";
import ProgressBar from "../ProgressBar";
import "./styles.scss";

const OnboardingData = () => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        {onboardingData.map((data, index) => (
          <tr key={data.name} className="c-tr">
            <td className="low">0{index + 1}</td>
            <td className="low">{data?.name}</td>
            <td>
              <ProgressBar
                width={`${data?.popularity}%`}
                colors={colorsForOnboarding[data?.name]}
              />
            </td>
            <td>
              <span
                className="badge-c low"
                style={{
                  backgroundColor: colorsForOnboarding[data?.name][1],
                  color: colorsForOnboarding[data?.name][0],
                  border: `1px solid ${colorsForOnboarding[data?.name][0]}`,
                }}
              >
                {data?.popularity}%
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OnboardingData;
