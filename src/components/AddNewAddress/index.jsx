import React from "react";
import { Grid } from "@mui/material";
import { addressFields } from "../../utilities/mock";
import InputAboveTitle from "../InputAboveTitle";
import CheckBoxWithImg from "../CheckBoxWithImg";
import SwitchWithTitle from "../SwitchWithTitle";
import SelectWithTitle from "../SelectWithTitle";
import RSelect from "../RSelect";
import MButton from "../MButton";
import OutlineButton from "../OutlineButton";
import "./styles.scss";

const AddNewAddress = ({ toggleAddressScreen }) => {
  return (
    <div className="new-address-ctn">
      <div className="flex sp-b">
        <h6>Add new address </h6>
        <OutlineButton btnText="Back" onClick={toggleAddressScreen} />
      </div>

      <div className="inner-bx mt-32">
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={12} md={12} lg={7} className="sec-grid-co">
            <h3 className="mb-16">Address details</h3>

            <Grid container spacing={2}>
              {addressFields.map((field) => (
                <Grid item {...field?.respTag} key={field.label}>
                  <InputAboveTitle
                    title={field.label}
                    placeholder={field.placeholder}
                  />
                </Grid>
              ))}
            </Grid>

            <div className="mt-40">
              <h3>
                Address label <sapn>(optional)</sapn>
              </h3>

              <div className="flex mt-16 mb-16">
                <div className="flex">
                  <CheckBoxWithImg />
                  <h5>Home</h5>
                </div>
                <div className="flex">
                  <CheckBoxWithImg />
                  <h5>Work</h5>
                </div>
              </div>

              <SwitchWithTitle title="Set as default address" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} className="sec-grid-c">
            <h3 className="mb-16">Your contact details</h3>
            <SelectWithTitle title="Country" />
            <div className="mt-16 flex">
              <RSelect
                options={[{ label: "+971", value: "971" }]}
                styles={{ marginBottom: "0px" }}
                placeholder="Code"
                showtitle={false}
                width="100px"
              />
              <input
                placeholder="Number"
                type="text"
                className="ad-phone-nmb"
              />
            </div>
            <InputAboveTitle
              title="First Name"
              placeholder="Enter first name"
              styles={{ marginTop: "20px" }}
            />
            <InputAboveTitle
              title="Last Name"
              placeholder="Enter lasy name"
              styles={{ marginTop: "20px" }}
            />

            <MButton
              btnText="SAVE ADDRESS"
              simpBtn={true}
              styles={{ marginTop: "40px" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddNewAddress;
