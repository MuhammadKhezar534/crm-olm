import _ from "lodash";
import { makeFirtLetterCapital } from "./common";

export const graphParserWithTimeFrame = (timeframe = "", chartData = {}) => {
  switch (timeframe) {
    case "year":
      return getGraphParsedData(chartData, "month", 12);
    case "month":
      return getGraphParsedData(chartData, "week", 5);
    case "week":
      return getGraphParsedData(chartData, "day", 7);

    default:
      return {};
  }
};

const fetchedDataKeys = {
  agencyOnboarding: "agencies",
  subscriberOnboarding: "subscribers",
  VIDEO: "goldies",
  ARTICLE: "goldies",
};

export const getGraphParsedData = (
  chartData,
  timePeriod,
  timePeriodNumber = 0
) => {
  const parsedArray = Object.keys(chartData).map((item) => {
    const sortedData = _.sortBy(chartData[item], timePeriod);
    const tempArray = Array(timePeriodNumber).fill(0);
    for (let element of sortedData) {
      tempArray[element[timePeriod] - (timePeriod === "week" ? 0 : 1)] =
        element[fetchedDataKeys[item]];
    }

    return {
      name: makeFirtLetterCapital(item),
      data: tempArray,
    };
  });

  return parsedArray;
};

export const weekNames = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
export const daysNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const monthsShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getXAxisData = (timeframe) => {
  switch (timeframe) {
    case "year":
      return monthsShortNames;
    case "month":
      return weekNames;
    case "week":
      return daysNames;

    default:
      return monthsShortNames;
  }
};
