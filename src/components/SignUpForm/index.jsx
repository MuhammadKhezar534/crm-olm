import React from "react";
import Box from "../../hoc/Box";
import "./styles.scss";
import { TextField } from "@material-ui/core";
import { MenuItem } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <Box>
        <div className="head">LOGIN</div>
        <div className="lowMedium">
          Please fill your detail to access your account.
        </div>

        <div>
          <label>Region</label>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </div>
  );
};

export default SignUpForm;
