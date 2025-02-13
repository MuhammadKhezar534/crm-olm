import React from "react";
import "./styles.scss";
import { addCardFields } from "../../utilities/mock";
import { Grid } from "@mui/material";
import InputAboveTitle from "../InputAboveTitle";
import RSelect from "../RSelect";
import MButton from "../MButton";
import OutlineButton from "../OutlineButton";

const AddCard = ({ toggleCard }) => {
  return (
    <div className="add-new-card-ctn">
      <div className="flex sp-b">
        <h6>Add New Card</h6>
        <OutlineButton onClick={toggleCard} />
      </div>
      <div className="inner-bx mt-32">
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={12} md={7} lg={7} className="sec-grid-co">
            <h3 className="mb-16">Card Details</h3>
            <Grid container spacing={2}>
              {addCardFields.map((field) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={field.label}>
                  <InputAboveTitle
                    title={field.label}
                    placeholder={field.placeholder}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} className="sec-grid-c">
            <h3 className="mb-16">Your contact details</h3>
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
              btnText="SAVE Card"
              simpBtn={true}
              styles={{ marginTop: "40px" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddCard;
