import React, { useState } from "react";
import "../Styles/Modals/MenuItem.css";
import Addfilebutton from "../Functions/Addfilebutton";
import FixDeadline from "../Component/FixDeadline";
import { Link } from "react-router-dom";
import FixDate from "../Component/FixDate";
import Calendar from "../Component/Calendar";
import "../Styles/Dashboard/Addfile.css";
import DashSidebar from "../Component/DashSidebar";
import PublishFormModal from "../Component/PublishFormModal";

const Addfile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(0);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible); // Toggle the visibility of the dropdown
  };

  const handlePublishClick = () => {
    // setModalVisible(true); // Show the modal when "Publish" button is clicked
    setModalVisible(1);
  };
  const handleCloseModal = () => {
    // setModalVisible(false);
    setModalVisible(modalVisible + 1);
  };

  const renderModal = () => {
    switch (modalVisible) {
      case 1:
        return (
          <FixDeadline
            onClose={handleCloseModal}
            onClickFix={handleCloseModal}
          />
        );
      case 2:
        return <FixDate onClose={handleCloseModal} />;
      case 3:
        return <Calendar onClose={handleCloseModal} />;
      case 4:
        return <PublishFormModal onClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="file-container">
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
          <button className="filelogin" onClick={handlePublishClick}>
            <span className="publish">Publish</span>
          </button>

          {renderModal()}

          <Link
            style={{ textDecoration: "none" }}
            className="fileregister"
            to="/formpage"
          >
            <span className="preview">Preview</span>
          </Link>

          <div
            className="bi bi-three-dots-vertical dots"
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
              <div className="toggle-state-icon">
                <option className="fix-deadline">Fix deadline</option>
              </div>
              <div className="hover-state-0">
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

      <DashSidebar />
    </div>
  );
};

export default Addfile;
