import React from "react";
import "../Styles/Reset/ResetModal.css";
import { Link } from "react-router-dom";
import Icon from "../assets/Image/success_icon.png";

const ResetModal = () => {
  return (
    <div className="desktop-49-item">
      <div className="desktop-49-inner">
        <div className="success-icon-parent">
          <img className="success-icon" alt="" src={Icon} />
          <div className="password-successfully-reset-wrapper">
            <b className="password-successfully-reset">
              Password successfully Reset
            </b>
          </div>
          <div className="you-have-successfully-reset-yo-wrapper">
            <div className="you-have-successfully">
              You have successfully reset your password. To continue, go back to
              login page
            </div>
          </div>
          <div className="main-button">
            <Link
              style={{ textDecoration: "none" }}
              className="enabled"
              to="/login"
            >
              <div className="back-to-login">Back to login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
