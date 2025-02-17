import React from "react";
import { Navigate } from "react-router-dom";
import SideBar from "../../hoc/Sidebar";
import Content from "../Content";

const AdminLayout = () => {
  const loggedIn = localStorage.getItem("AuTH");

  if (!loggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Content />
    </div>
  );
};

export default AdminLayout;
