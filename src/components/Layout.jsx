import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="layout">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
