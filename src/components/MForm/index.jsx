import React, { Fragment, forwardRef, useImperativeHandle } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import "./styles.scss";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, InputLabel } from "@mui/material";

const MForm = forwardRef((props, ref) => {
  const { formList, onSubmit } = props;

  useImperativeHandle(ref, () => {
    return sendData;
  });

  const sendData = (e) => {
    onSubmit({ email: "hy", password: "2121" });
  };
  return (
    <Box
      component="form"
      className="form-m"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      onSubmit={sendData}
      noValidate
      autoComplete="off"
    >
      {formList?.map((list) => (
        <Fragment>
          <label>{list.label}</label>
          {/* <TextField
            key={list?.name}
            type={list.type}
            label={list.label}
            className="c-field"
            // id="outlined-required"
            hiddenLabel={true}
            required={list.required}
            placeholder={list.placeholder}
            error="hy h"
            InputAdornment={{
              hiddenLabel: true,
            }}

            // InputLabelProps={}
            // startAdornment={
            //   list?.icon ? (
            //     <InputAdornment position="start">
            //       <img src="/icons/user.svg" />
            //     </InputAdornment>
            //   ) : null
            // }
          /> */}
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
        </Fragment>
      ))}
    </Box>
  );
});

export default MForm;
