import React, { useState } from "react";
import TopBar from "../../hoc/TopBar";
import uptabs from "../../utilities/jsons/custTrans.json";
import tabs from "../../utilities/jsons/dashboardTabs.json";
import DashboardUpperRow from "../../components/DashboardUpperRow";
import { settabsActive } from "../../utilities/common";
import TableBox from "../../hoc/TableBox";
import Table from "../../components/Table";
import {
  customerData,
  headersForCustomer,
  makeCustomerDataShape,
} from "../../utilities/mock";
import MButton from "../../components/MButton";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Customers = () => {
  const [tabList, setList] = useState(uptabs);
  const [innertabList, setInnerList] = useState(tabs);
  const [currUpTab, setCurrUpTab] = useState("All Customers");
  let navigate = useNavigate();

  const tabHandler = (title) => {
    const tabs = settabsActive(tabList, title);
    setCurrUpTab(title);
    setList(tabs);
  };

  const tabinnerHandler = (title) => {
    const tabs = settabsActive(innertabList, title);
    setInnerList(tabs);
  };
  return (
    <div className="cust-ctn">
      <TopBar title="CUSTOMER MANAGMENT" />
      <div className="inner-ctn">
        <div className="cust-tab-row flex sp-b">
          <DashboardUpperRow
            tabList={tabList}
            className="upper-tab"
            tabHandler={tabHandler}
          />
          <MButton
            btnText="CREATE CUSTOMER"
            simpBtn={true}
            onClick={() => navigate("/create-customer")}
          />
        </div>
        <div className="cust-innertab-row">
          <DashboardUpperRow
            tabList={innertabList}
            tabHandler={tabinnerHandler}
          />
        </div>

        <div className="mt-32">
          <TableBox>
            <Table
              enablePagination={true}
              data={makeCustomerDataShape(customerData, currUpTab)}
              headers={headersForCustomer[currUpTab]}
            />
          </TableBox>
        </div>
      </div>
    </div>
  );
};

export default Customers;
