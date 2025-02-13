import React from "react";
import ReactApexChart from "react-apexcharts";
import { getXAxisData } from "../../utilities/graph-parser";
import { nFormatter } from "../../utilities/function";
import "./styles.scss";

const AreaChart = ({ timeframe, series, colors }) => {
  const state = {
    series,
    options: {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#A700FF", "#EF4444", "#3CD856"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
      grid: {
        strokeDashArray: [4, 4],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return nFormatter(value);
          },
          style: {
            colors: [],
            fontSize: "12px",
            fontFamily: "inter",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      xaxis: {
        categories: getXAxisData(timeframe),
      },
    },
  };

  return (
    <div className="lineChart mt-16">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={255}
      />
    </div>
  );
};

export default AreaChart;
