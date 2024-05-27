import React, { useState} from "react";
import "../Styles/Dashboard/Dashboard.css";
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
    <div className="sidebar-container">
      <div className="group"></div>

      <div className="section-a">
        <div className="box-5">
          <img className="img-3" alt="Image" src={Logo} />
        </div>
        <div className="box-6">
          <button
            className={`wrapper-8 ${
              activeButton === "dashboard" ? "active" : "section-b"
            }`}
            onClick={() => handleButtonClick("dashboard")}
          >
            <i className="bi bi-bar-chart" />
            <Link
              style={{ textDecoration: "none" }}
              className="text-a"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </button>
          <button
            className={`wrapper-8 ${
              activeButton === "createSurvey" ? "active" : " wrapper-9"
            }`}
            onClick={() => handleButtonClick("createSurvey")}
          >
            <i className="bi bi-chat-square-text" />
            <Link
              style={{ textDecoration: "none" }}
              className="text-b"
              to="/addfile"
            >
              Create survey
            </Link>
          </button>
          <button
            className={`wrapper-8 ${
              activeButton === "responses" ? "active" : " wrapper-a"
            }`}
            onClick={() => handleButtonClick("responses")}
          >
            <i className="bi bi-chat-dots" />
            <span className="text-c">Responses</span>
          </button>
          <button className="group-5">
            <i className="bi bi-gear" />
            <span className="text-d">Settings</span>
          </button>
          <button className="wrapper-a">
            <i className="bi bi-box-arrow-right" />
            <span className="text-e">Logout</span>
          </button>
        </div>
        <div className="wrapper-b">
          <div className="bi bi-caret-left" />
        </div>
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
