import React from 'react';
import "../Styles/Modals/FixDeadline.css";
import Rafiki from "../assets/Image/rafiki.png";
// import FixDate from "../Component/FixDate";

const FixDeadline = ({ onClose, onClickFix }) => {
  
  return (
    <div className="modal1">
      <div className="pop-up-deadline">
        <div className="modalframe">
          <div className="x" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
        <div className="flex-row-c">
          <img className="schedule-rafiki" src={Rafiki} />
          <div className="group-1" />
          <div className="modalframe-2">
            <span className="please-fix-deadline">
              Please fix a deadline for the survey to proceed
            </span>
          </div>
        </div>
        <div className="modallogin">
          <button className="fix-deadlinee" onClick={onClickFix}>
            Fix Deadline
          </button>
        </div>
        {/* {secondModal && <FixDate />} */}
      </div>
    </div>
  );
}

export default FixDeadline;