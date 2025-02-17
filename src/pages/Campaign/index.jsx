import React from "react";
import TopBar from "../../hoc/TopBar";
import TableBox from "../../hoc/TableBox";
import {
  campaignData,
  headersForCampaign,
  makeShapeForCampaign,
} from "../../utilities/mock";
import "./styles.scss";
import Table from "../../components/Table";
import MButton from "../../components/MButton";
import { useNavigate } from "react-router-dom";

const Campaign = () => {
  let navigate = useNavigate();
  return (
    <div className="campaign-ctn">
      <TopBar title="CAMPAIGN MANAGMENT" />
      <div className="inner-ctn">
        <div className="flex sp-b mt-32">
          <h3>E-mail Template</h3>
          <MButton
            btnText="CREATE TEMPLATE"
            simpBtn={true}
            onClick={() => navigate("/create-compaign")}
          />
        </div>
        <div className="mt-32">
          <TableBox>
            <Table
              enablePagination={true}
              data={makeShapeForCampaign(campaignData)}
              headers={headersForCampaign}
            />
          </TableBox>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
