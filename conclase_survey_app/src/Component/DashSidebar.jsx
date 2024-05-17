import React from "react";
import "../Styles/Dashboard/Desksidebar.css";
import Logo from "../assets/Image/Coclase logo.png";
import axios from "axios";

const DashSidebar = () => {

  //logout
  const logout = async () => {
    try {
      // Send a request to the logout API endpoint
      await axios.post("http://localhost:4005/auth/logout", { userId: sessionStorage.getItem('id') });
      // Clear session storage
      sessionStorage.clear();
      // Redirect to the login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  

  return (
    <div className="main-container">
      <div className="group">
        <div className="img" />
        <img className="img" alt="Image" src={Logo} />
      </div>
      <div className="oval-3" />
      <div className="oval-4" />
      <div className="section">
        {/* <div className="pic" /> */}
      </div>
      <div className="section-2">
        <button className="section-3">
          <i className="bi bi-bar-chart" />
          <span className="text">Dashboard</span>
        </button>
        <button className="group-2">
          <i className="bi bi-chat-square-text" />
          {/* <FaInbox /> */}
          <span className="text-2">Create survey</span>
        </button>
        <button className="section-4">
          <i className="bi bi-chat-dots" />
          <span className="text-3">Responses</span>
        </button>
        <button className="box">
          <i className="bi bi-gear" />
          <span className="text-4">Settings</span>
        </button>
        <button className="section-5" onClick={logout}>
          <i className="bi bi-box-arrow-right" />
          <span className="text-5">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;
