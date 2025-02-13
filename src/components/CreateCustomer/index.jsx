import React, { useState } from "react";
import TopBar from "../../hoc/TopBar";
import DashboardUpperRow from "../DashboardUpperRow";
import tabs from "../../utilities/jsons/createCustomer.json";
import { settabsActive } from "../../utilities/common";
import TableBox from "../../hoc/TableBox";
import SwitchWithTitle from "../../components/SwitchWithTitle";
import { createCustomerFields } from "../../utilities/mock";
import Grid from "@mui/material/Grid";
import InputAboveTitle from "../InputAboveTitle";
import SelectWithTitle from "../SelectWithTitle";
import ImgBox from "../ImgBox";
import TwoHeadings from "../TwoHeadings";
import TitleWithArrow from "../TitleWithArrow";
import ContactInformation from "../ContactInformation";
import ContactAddress from "../ContactAddress";
import CardDetail from "../CardDetail";
import OutlineButton from "../OutlineButton";
import MButton from "../MButton";
import CustomerTransactuons from "../CustomerTransactions";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import "./styles.scss";

const CreateCustomer = () => {
  const [tabList, setList] = useState(tabs);
  const [currentTabId, setTabId] = useState(1);
  const [contactList, setContactList] = useState([
    {
      id: v4(),
    },
  ]);

  let navigate = useNavigate();

  const removeIt = (id) => {
    console.log({ id });
    setContactList([...contactList.filter((list) => list?.id !== id)]);
  };

  const handleList = () => {
    setContactList((prev) => [
      ...prev,
      {
        id: v4(),
      },
    ]);
  };

  const tabHandler = (title, id) => {
    const tabs = settabsActive(tabList, title);
    setTabId(id);
    setList(tabs);
  };

  return (
    <div className="create-customer-ctn">
      <TopBar title="CUSTOMER MANAGMENT" />
      <div className="inner-ctn">
        <div className="tab-row">
          <DashboardUpperRow tabList={tabList} tabHandler={tabHandler} />
        </div>

        {currentTabId === 1 && (
          <div className="flex two-btns-row" style={{ justifyContent: "end" }}>
            <OutlineButton onClick={() => navigate("/customers")} />
            <MButton btnText="CREATE CUSTOMER" simpBtn={true} />
          </div>
        )}

        {currentTabId === 1 && (
          <TableBox filters={false} styles={{ marginTop: "30px" }}>
            <TitleWithArrow title="General Information" />
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xs={12} sm={12} md={12} lg={8}>
                <div className="flex swicth-row mb-32">
                  <SwitchWithTitle title="Normal" />
                  <SwitchWithTitle title="Loyalty" />
                  <SwitchWithTitle title="Credit" />
                </div>
                <Grid container spacing={2}>
                  {createCustomerFields?.map((field) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                      key={field.placeholder}
                    >
                      {field?.isFieldInput ? (
                        <InputAboveTitle
                          title={field?.label}
                          placeholder={field?.placeholder}
                        />
                      ) : (
                        <SelectWithTitle
                          title={field?.label}
                          placeholder={field?.placeholder}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
                <div className="text-box-cust">
                  <span className="spn mb-8">Comment</span>
                  <textarea placeholder="Add Comment" className="text-bx" />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                className="sec-grid-col"
              >
                <ImgBox />
                <TwoHeadings
                  heading="Last Activity"
                  title="4/22/2023 11:31 AM"
                />
                <TwoHeadings heading="Reference by" title="Sendo Takashi" />
              </Grid>
            </Grid>

            {contactList?.map((list) => (
              <ContactInformation
                key={list?.id}
                onClick={handleList}
                id={list?.id}
                removeIt={removeIt}
                list={contactList}
              />
            ))}
          </TableBox>
        )}

        {currentTabId === 2 && (
          <div>
            <ContactAddress />
          </div>
        )}
        {currentTabId === 3 && (
          <div>
            <CardDetail />
          </div>
        )}
        {currentTabId === 4 && <CustomerTransactuons />}
      </div>
    </div>
  );
};

export default CreateCustomer;
