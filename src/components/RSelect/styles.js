export const selectStyles = (width = "100%") => {
  return {
    singleValue: (provided) => ({
      ...provided,
      // fontStyle: "normal",
      // fontWeight: "400",
      // fontSize: "16px",
      // lineHeight: "24px",
      // color: "#rgba(0, 0, 0, 0.87)",
      marginBottom: "10px",
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0px",

      borderColor: "#fff",
      "&:hover": {
        borderColor: "#fff",
      },
      boxShadow: state.isFocused ? "#fa1c3c" : "none",

      width,
    }),
    menu: (provided) => ({
      ...provided,
      padding: "14px 12px 10px 12px",
      borderRadius: "2px",
      //   background: "#FFFFFF",
      //   boxShadow:
      //     "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
    }),
    option: (provided, state) => ({
      ...provided,
      //   background: state.isSelected ? "#fa1c3c" : "",
      borderRadius: "6px",
      padding: "10px 12px",
      //   backgroundColor: state.isFocused ? "#fa1c3c" : "white",

      //   ":hover": {
      //     backgroundColor: "#fa1c3c",
      //     color: "#fff",
      //   },
      marginBottom: "5px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "14px",
      color: "#000",
    }),
  };
};
