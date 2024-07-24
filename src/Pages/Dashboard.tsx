// import React from "react";
import "../styles/dashboard.css";
import Header from "@/layout/dashboardLayout/Header";
import SideBar from "@/layout/dashboardLayout/SideBar";
import MainContent from "@/layout/dashboardLayout/MainContent";

// type Props = {};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
