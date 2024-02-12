import React, { useState } from "react";
import "../Styles/Dashboard/AddFile.css";
import "../Styles/Dashboard/MenuItem.css";
import Addfilebutton from "../Functions/Addfilebutton";
import Logo from "../assets/Image/Coclase logo.png";

const Addfile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible); // Toggle the visibility of the dropdown
  };

  return (
    <div className="main-container">
      <div className="oval" />
      <div className="body">
        <div className="header">
          <div className="elements">
            <div className="profile">
              <i className="icon2 bi bi-person-circle" />
              <div className="text">
                <span className="john-doe">John Doe</span>
                <div className="bi bi-chevron-down arrow2" />
              </div>
            </div>
          </div>
        </div>
        <div className="frm1">
          <button className="login">
            <span className="publish">Publish</span>
          </button>
          <div className="register">
            <span className="preview">Preview</span>
          </div>

          <div
            className="bi bi-three-dots-vertical"
            onClick={handleDropdownToggle}
          >
            {/* Three vertical dots icon */}
          </div>
          {dropdownVisible && (
            <div className="menubox">
              {/* Dropdown menu */}
              <div className="hover-state-toggle">
                <option className="oneresponse">Limit to one response</option>
                <div className="bi bi-toggle-off toggle-button " />
              </div>
              <div className="hover-state-icon">
                <option className="fix-deadline">Fix deadline</option>
              </div>
              <div className="hover-state">
                <option className="delete-survey">Delete survey</option>
              </div>
              <div className="hover-state-1">
                <span className="print-survey">Print Survey</span>
              </div>
            </div>
          )}
        </div>

        <div className="form">
          <div className="frm2">
            <input className="form-title" placeholder="Form Title" />
          </div>
          <div className="frm3">
            <input className="form-description" placeholder="Description" />
          </div>
          <Addfilebutton />
        </div>
      </div>
      <div className="sidebars">
        <div className="frm4">
          {/* <div className="image" /> */}
          <img className="img-3" alt="Image" src={Logo} />
        </div>
        <div className="frm5">
          <div className="component">
            <div className="chart" />
            <span className="dashboard">Dashboard</span>
          </div>
          <button className="component-button">
            <div className="chat-centered-text" />
            <span className="dashboard-create-survey">Create survey</span>
          </button>
          <div className="component-div">
            <div className="chat-teardrop-dots" />
            <span className="dashboard-responses">Responses</span>
          </div>
          <div className="component-div-6">
            <div className="gear-six" />
            <span className="dashboard-settings">Settings</span>
          </div>
          <div className="component-7">
            <div className="sign-out" />
            <span className="dashboard-8">Logout</span>
          </div>
        </div>
        <div className="frm6">
          <div className="caret-left" />
        </div>
      </div>
      <div className="group">
        <div className="oval-a" />
        <div className="oval-b" />
      </div>
    </div>
  );
};

export default Addfile;
