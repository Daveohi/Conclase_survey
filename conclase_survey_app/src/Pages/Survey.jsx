import React from "react";
import "../Styles/Dashboard/Surveys.css";
import Logo from "../assets/Image/Coclase logo.png";

const Surveys = () => {
  return (
    <div className="survey-container">
      <div className="oval6" />
      <div className="body">
        <div className="header">
          <div className="framebox">
            <div className="title-subtitle">
              <span className="welcome-back-john">Welcome back, John</span>
              <span className="continue-left-off">
                Continue from where you left off.
              </span>
            </div>
          </div>
          {/* Search bar, profile */}
          <div className="elements">
            <div className="search">
              <input
                className="search-input"
                placeholder="Search"
                type="text"
              />
              <div className="icon-text">
                <div className="icon-set">
                  <i className="bi bi-search" />
                  {/* <div className="search-1" /> */}
                </div>
                <div className="text-search">
                  {/* <span className="search-2">Search</span> */}
                </div>
              </div>
            </div>
            <div className="icons">
              {/* <div className="bell" /> */}
              <i className="bi bi-bell" />
            </div>
            <div className="profile">
              {/* <div className="avatar" /> */}
              <i className="bi bi-person-circle" />
              <div className="text-3">
                <span className="john-doe">John Doe</span>
                <div className="chevron-down" />
              </div>
            </div>
          </div>
        </div>

        {/* Total Survey boxes */}
        <div className="frame4">
          <div className="frame5">
            <div className="frame6">
              <div className="frame7">
                <div className="frame8">
                  <span className="total-surveys">Total Surveys</span>
                  <i
                    className="bi bi-three-dots-vertical"
                    style={{ color: "#ffffff", textAlign: "end" }}
                  />
                  <div className="group" />
                  {/* </div> */}
                </div>
                <div className="frame9">
                  <span className="number-22">22</span>
                </div>
              </div>
              <div className="chat-centered-text" />
            </div>
            <div className="frame-a">
              <div className="frame-b">
                <div className="frame-c">
                  <span className="span">Total Active Surveys</span>
                  <i
                    className="bi bi-three-dots-vertical"
                    style={{ color: "#ffffff" }}
                  />
                  <div className="group-e" />
                  {/* </div> */}
                </div>
                <div className="frame-f">
                  <span className="span-10">6</span>
                </div>
              </div>
              <div className="chat-circle-dots" />
            </div>
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <span className="span-13">Recently created surveys</span>
              <div className="arrow-chevron-big-down" />
            </div>
            <div className="frame-14">
              <div className="frame-15">
                <div className="frame-16">
                  <div className="checkbox">
                    <input className="check" type="checkbox" />
                  </div>
                  <input className="checkbox-17" type="checkbox" />
                  <input className="checkbox-18" type="checkbox" />
                  <input className="checkbox-19" type="checkbox" />
                  <input className="checkbox-1a" type="checkbox" />
                  <input className="checkbox-1b" type="checkbox" />
                </div>
                <div className="frame-1c">
                  <span className="span-1d">Survey name</span>
                  <span className="conclase-survey">Conclase Survey</span>
                  <span className="student-feedback">Student Feedbac </span>
                  <span className="conclase-survey-1e">Conclase Survey</span>
                  <span className="conclase-survey-1f">Conclase Survey</span>
                  <span className="conclase-survey-20">Conclase Survey</span>
                  <span className="conclase-survey-21">Conclase Survey</span>
                </div>
                <div className="frame-22">
                  <span className="span-23">Start date</span>
                  <span className="start-date">10/01/24 - (11:30am)</span>
                  <span className="start-date-24">10/01/24 - (11:30am)</span>
                  <span className="start-date-25">10/01/24 - (11:30am)</span>
                  <span className="start-date-26">10/01/24 - (11:30am)</span>
                  <span className="start-date-27">10/01/24 - (11:30am)</span>
                  <span className="date-time">10/01/24 - (11:30am)</span>
                </div>
                <div className="frame-28">
                  <span className="end-date">End date</span>
                  <span className="date-time-29">13/01/24 - (9:30am)</span>
                  <span className="date-time-2a">13/01/24 - (9:30am)</span>
                  <span className="date-time-2b">13/01/24 - (9:30am)</span>
                  <span className="date-time-2c">13/01/24 - (9:30am)</span>
                  <span className="date-time-2d">13/01/24 - (9:30am)</span>
                  <span className="date-time-2e">13/01/24 - (9:30am)</span>
                </div>
                <div className="frame-2f">
                  <span className="status">Status</span>
                  <span className="response">4 Response</span>
                  <span className="no-response">No Response</span>
                  <span className="no-response-30">No Response</span>
                  <span className="no-response-31">No Response</span>
                  <span className="response-32">9 Response</span>
                  <span className="response-33">15 Response</span>
                </div>
                <div className="frame-34">
                  <span className="created-by">Created by</span>
                  <div className="frame-35">
                    <i className="bi bi-person-circle" />
                    <span className="femi-james">Femi James</span>
                  </div>
                  <div className="frame-37">
                    <i className="bi bi-person-circle" />
                    <span className="john-doe-39">John Doe</span>
                  </div>
                  <div className="frame-3a">
                    <i className="bi bi-person-circle" />
                    <span className="john-doe-3c">John Doe</span>
                  </div>
                  <div className="frame-3d">
                    <i className="bi bi-person-circle" />
                    <span className="adaeze-white">Adaeze White</span>
                  </div>
                  <div className="frame-3f">
                    <i className="bi bi-person-circle" />
                    <span className="ademola-green">Ademola Green</span>
                  </div>
                  <div className="frame-41">
                    <i className="bi bi-person-circle" />
                    <span className="micheal-john">Micheal John</span>
                  </div>
                </div>
                <div className="frame-43">
                  <div className="frame-44">
                    <i className="bi bi-trash" />
                    <i className="bi bi-pencil" />
                    <i className="bi bi-three-dots-vertical" />
                    <div className="group-46" />
                  </div>
                  <div className="frame-47">
                    <i className="bi bi-trash" />
                    <i className="bi bi-pencil" />
                    <i className="bi bi-three-dots-vertical" />
                    <div className="group-4b" />
                  </div>
                  <div className="frame-4c">
                    <i className="bi bi-trash" />
                    <i className="bi bi-pencil" />
                    <i className="bi bi-three-dots-vertical" />
                    <div className="group-50" />
                  </div>
                  <div className="frame-51">
                    <i className="bi bi-trash" />
                    <i className="bi bi-pencil" />
                    <i className="bi bi-three-dots-vertical" />
                    <div className="group-55" />
                  </div>
                  <div className="frame-56">
                    <i className="bi bi-trash" />
                    <i className="bi bi-pencil" />
                    <i className="bi bi-three-dots-vertical" />
                    <div className="group-5a" />
                  </div>
                  <div className="frame-5b">
                    <i className="bi bi-trash" />

                    <i className="bi bi-pencil" />
                    <i className="bi bi-three-dots-vertical" />

                    <div className="group-5f" />
                  </div>
                </div>
              </div>
              <div className="frame-60">
                <div className="frame-61">
                  <div className="frame-62">
                    <span className="-of">1-6 of </span>
                    <span className="span-12">12</span>
                  </div>
                  <div className="div-frame">
                    <div className="div-button">
                      <div className="div-caret-left" />
                    </div>
                    <div className="div-button-63">
                      <div className="div-caret-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-rectangle" />
      </div>
      <div className="div-sidebars">
        <div className="div-frame-64">
          {/* <div className="div-image" /> */}
          <img className="img-3" alt="Image" src={Logo} />
        </div>
        <div className="notify">
          <button className="button-component">
            {/* <div className="div-chart" /> */}
            <i className="bi bi-bar-chart" />

            <span className="span-dashboard">Dashboard</span>
          </button>
          <div className="div-component">
            {/* <div className="div-chat-centered-text" /> */}
            <i className="bi bi-chat-square-text" />
            <span className="span-dashboard-66">Create survey</span>
          </div>
          <div className="div-component-67">
            {/* <div className="div-chat-teardrop-dots" /> */}
            <i className="bi bi-chat-dots" />
            <span className="span-dashboard-68">Responses</span>
          </div>
          <div className="div-component-69">
            {/* <div className="div-gear-six" /> */}
            <i className="bi bi-gear" />
            <span className="span-dashboard-6a">Settings</span>
          </div>
          <div className="div-component-6b">
            {/* <div className="div-sign-out" /> */}
            <i className="bi bi-box-arrow-right" />
            <span className="span-dashboard-6c">Logout</span>
          </div>
          <div className="div-indicator">
            <div className="div-frame-6d">
              <span className="span-2">2</span>
            </div>
          </div>
        </div>
        <div className="div-frame-6e">
          <div className="div-caret-left-6f" />
        </div>
      </div>
      {/* <div className="div-group" /> */}
      <div className="oval3" />
      <div className="oval4" />
      <div className="div-rectangle-70" />
    </div>
  );
}
export default Surveys;