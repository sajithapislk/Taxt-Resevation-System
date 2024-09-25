import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavBar from "./components/TopNavBar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Trips from "./components/Trips";
import Payments from "./components/Payments";
import { Route, Routes } from "react-router-dom";
import AdminProfile from "./components/AdminProfile";
import Settings from "./components/Settings";

export const Admin = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <TopNavBar />
        <div className="container-fluid mt-4">
          {/* <Dashboard />
          <Users />
          <Trips />
          <Payments /> */}
          <Routes>
              <Route path="/*" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/admin/profile" element={<AdminProfile/>} />
              <Route path="/admin/setting" element={<Settings/>}/>
            </Routes>
        </div>
      </div>
    </div>
  );
};
