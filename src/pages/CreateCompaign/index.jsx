import React, { Fragment, useState } from "react";
import TopBar from "../../hoc/TopBar";
import DashboardUpperRow from "../../components/DashboardUpperRow";
import tabs from "../../utilities/jsons/campaignTab.json";
import { settabsActive } from "../../utilities/common";
import OutlineButton from "../../components/OutlineButton";
import MButton from "../../components/MButton";
import TableBox from "../../hoc/TableBox";
import CustomEditor from "../../components/CustomEditor";
import { templateList } from "../../utilities/mock";
import TemplateBox from "../../components/TemplateBox";
import { Grid } from "@mui/material";
import "./styles.scss";

const CreateCompaign = () => {
  const [tabList, setList] = useState(tabs);
  const [currentTabId, setTabId] = useState(1);

  const tabHandler = (title, id) => {
    const tabs = settabsActive(tabList, title);
    setTabId(id);
    setList(tabs);
  };

  return (
    <div className="create-capn-ctn">
      <TopBar title="CAMPAIGN MANAGMENT" />
      <div className="inner-ctn">
        <div className="flex sp-b f-wrap">
          <div className="tab-row mb-16">
            <DashboardUpperRow tabList={tabList} tabHandler={tabHandler} />
          </div>
          {currentTabId === 1 && (
            <div className="flex " style={{ justifyContent: "end", flex: 1 }}>
              <OutlineButton btnText="DUPLICATE" />
              <MButton btnText="CREATE TEMPLATE" simpBtn={true} />
            </div>
          )}
        </div>
        {currentTabId === 1 && (
          <TableBox filters={false} styles={{ marginTop: "30px" }}>
            <div className="inp-ctn">
              <div className="flex">
                <span>
                  Name<span className="star">*</span>
                </span>
                <input
                  className="temp-inp"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <div className="flex mt-24">
                <span>
                  Subject<span className="star">*</span>
                </span>
                <input
                  className="temp-inp"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
            </div>

            <div className="cntr-bar flex sp-b">
              <div className="d-tit">Design</div>
              <MButton btnText="PREVIEW" simpBtn={true} />
            </div>

            <CustomEditor />
          </TableBox>
        )}

        {currentTabId === 2 && (
          <Fragment>
            {/* <img src="/icons/list.svg" alt="list" className="list-icon" /> */}
            <Grid
              container
              spacing={2}
              style={{ marginTop: "30px" }}
              className="temp-list-row"
            >
              {templateList.map((list) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={list}>
                  <TemplateBox />
                </Grid>
              ))}
            </Grid>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default CreateCompaign;
