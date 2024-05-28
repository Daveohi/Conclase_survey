import React, { useState } from "react";
import "../Styles/Dashboard/Dashboard.css";
import Logo from "../assets/Image/Coclase logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const DashSidebar = () => {
  const [activeButton, setActiveButton] = useState(""); // Initialize with an empty string or a default button name

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  //logout
  const logout = async () => {
    try {
      // Send a request to the logout API endpoint
      await axios.post("http://localhost:4005/auth/logout", {
        userId: sessionStorage.getItem("id"),
      });
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
              activeButton === "dashboard" ? "active" : " "
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
              activeButton === "createSurvey" ? "active" : " "
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
      <div className="section">{/* <div className="pic" /> */}</div>
    </div>
  );
};

export default DashSidebar;
