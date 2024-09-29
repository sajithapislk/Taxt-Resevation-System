import Header from "./components/admin/Header";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/admin/Sidebar";
import { Outlet } from "react-router-dom";
import "./../styles/css/admin/core.css";
import "./../styles/css/admin/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const AdminLayout = () => {
  useEffect(() => {
    document.body.classList.add("header-white");
    document.body.classList.add("sidebar-light");

    return () => {
      document.body.classList.remove("header-white");
      document.body.classList.remove("sidebar-light");
    };
  }, []);

  const [sideBarClass, setSideBarClass] = useState("");

  const openSideBar = () => {
    setSideBarClass((prevClass) => (prevClass === "open" ? "" : "open"));
  };
  return (
    <>
      <Header onMenuClick={openSideBar} />
      <Outlet />
      <Sidebar sideBarClass={sideBarClass} setSideBarClass={setSideBarClass} />
    </>
  );
};

export default AdminLayout;
