import React from "react";
import useStore from "../../store/store";
import { Routes, Route } from "react-router-dom";
import classNames from "classnames";
import Dashboard from "../Dashboard";
import Customers from "../Customers";
import CreateCustomer from "../../components/CreateCustomer";
import Campaign from "../Campaign";
import CreateCompaign from "../CreateCompaign";
import "./styles.scss";

const Content = () => {
  const { sidebarIsOpen } = useStore();

  return (
    <div className={classNames("content", { "is-open": sidebarIsOpen })}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/create-compaign" element={<CreateCompaign />} />
      </Routes>
    </div>
  );
};

export default Content;
