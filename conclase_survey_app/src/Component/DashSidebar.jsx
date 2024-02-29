import React, { useState} from "react";
import "../Styles/Dashboard/Dashboard.css";
import Logo from "../assets/Image/Coclase logo.png";
import { Link } from "react-router-dom";


const DashSidebar = () => {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
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
      <div className="section"></div>
    </div>
  );
};

export default DashSidebar;
