import React from "react";
import "../Styles/Dashboard/Dashboard.css";
import Logo from "../assets/Image/Coclase logo.png";
import Empty from "../assets/Image/No Content.png";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="main-container">
      <div className="oval5" />
      <div className="box">
        <div className="section">
          <div className="box-2">
            <div className="wrapper">
              <span className="text">Welcome, John</span>
              <span className="text-2">
                To begin please create a new survey
              </span>
            </div>
          </div>
          <div className="section-2">
            <div className="box-3">
              <div className="bi bi-search" />
              <div className="bi bi-bell" />
            </div>
            <div className="section-3">
              <div className="icon bi bi-person-circle " />
              <div className="wrapper-2">
                <span className="text-3">John Doe</span>
                <div className="pic-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-4">
          <div className="wrapper-3">
            <div className="wrapper-4">
              <div className="section-5">
                <div className="group">
                  <span className="text-4">Total Surveys</span>
                  <div className="section-6">
                    <div className="pic-5" />
                  </div>
                </div>
                <div className="group-2">
                  <span className="text-5">0</span>
                </div>
              </div>
            </div>
            <div className="section-7">
              <div className="group-3">
                <div className="group-4">
                  <span className="text-6">Total Active Surveys</span>
                  <div className="box-4">
                    <div className="pic-6" />
                  </div>
                </div>
                <div className="wrapper-5">
                  <span className="text-7">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-6">
            <div className="section-8">
              <img className="img-2" alt="Empty" src={Empty} />
            </div>
            <span className="text-8">
              Looks like you don’t have any survey yet!!!
            </span>
            <button className="section-9">
              <Link className="wrapper-7" to="/addfile">
                <span className="text-9">Create New Survey</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="pic-7" />
      </div>

      <div className="section-a">
        <div className="box-5">
          <img className="img-3" alt="Image" src={Logo} />
        </div>
        <div className="box-6">
          <button className="wrapper-8">
            <div className="bi bi-bar-chart" />
            <span className="text-a">Dashboard</span>
          </button>
          <button className="section-b">
            <div className="bi bi-chat-square-text" />
            <span className="text-b">Create survey</span>
          </button>
          <button className="wrapper-9">
            <div className="bi bi-chat-dots" />
            <span className="text-c">Responses</span>
          </button>
          <button className="group-5">
            <div className="bi bi-gear" />
            <span className="text-d">Settings</span>
          </button>
          <button className="wrapper-a">
            <div className="bi bi-box-arrow-right" />
            <span className="text-e">Logout</span>
          </button>
        </div>
        <div className="wrapper-b">
          <div className="bi bi-caret-left" />
        </div>
      </div>
      <div className="oval-3" />
      <div className="oval-4" />
      <div className="img-9" />
    </div>
  );
}
export default DashBoard;