import React from "react";
import ReactApexChart from "react-apexcharts";
import "./styles.scss";

const PolarChart = ({ series = [14, 23] }) => {
  let state = {
    series,
    options: {
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="polarChart mt-16">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={265}
      />
    </div>
  );
};

export default PolarChart;
