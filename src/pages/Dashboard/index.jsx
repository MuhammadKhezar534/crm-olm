import React, { useState } from "react";
import TopBar from "../../hoc/TopBar";
import LineChart from "../../components/LineChart";
import {
  customerActivity,
  customerSatisfaction,
  customerStatData,
} from "../../utilities/mock";
import Box from "../../hoc/Box";
import OnboardingData from "../../components/OnboardingData";
import AreaChart from "../../components/AreaChart";
import PolarChart from "../../components/PolarChart";
import Grid from "@mui/material/Grid";
import CustomerStatCard from "../../components/CustomerStatCard";
import tabs from "../../utilities/jsons/dashboardTabs.json";
import DashboardUpperRow from "../../components/DashboardUpperRow";
import { settabsActive } from "../../utilities/common";
import "./styles.scss";

const Dashboard = () => {
  const [tabList, setList] = useState(tabs);

  const tabHandler = (title) => {
    const tabs = settabsActive(tabList, title);
    setList(tabs);
  };
  return (
    <div className="dashboard-ctn">
      <TopBar title="DASHBOARD" />

      <div className="inner-ctn">
        <div className="tab-row">
          <DashboardUpperRow tabList={tabList} tabHandler={tabHandler} />
        </div>
        <div className="flex sp-b mb-24 row-c">
          {customerStatData.map((data) => (
            <CustomerStatCard {...data} />
          ))}
        </div>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box styles={{ marginTop: "24px" }} className="mt-24">
              <h3 className="ml-24">Customer Satisfaction</h3>
              <AreaChart series={customerSatisfaction} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box styles={{ marginTop: "24px" }} className="mt-24">
              <h3 className="ml-24">Loyalty Types</h3>
              <PolarChart />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box styles={{ marginTop: "24px" }}>
              <h3 className="ml-24">Customer Activity</h3>
              <LineChart series={customerActivity} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box styles={{ marginTop: "24px" }} className="mt-24">
              <h3 className="ml-24">Ongoing Promotions</h3>
              <OnboardingData />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
