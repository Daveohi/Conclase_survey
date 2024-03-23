import React from "react";
import "../Styles/Reset/SideNav.css";
import SIDE from "../assets/Image/Coclase logo.png"

const SideNav = () => {
  return (
    <div className="desktop-44-child">
      <div className="conclase-logo1">
        <img className="image-1-icon1" alt="" src={SIDE} />
      </div>
      <div className="conclase-survey-container">
        <b className="conclase-survey1">
          <span className="span2">{` `}</span>
          <span>Conclase</span>
          <span className="span3">{` `}</span>
          <span>Survey!</span>
        </b>
      </div>
      <div className="oval6" />
      <div className="oval7" />
    </div>
  );
};

export default SideNav;