import React from 'react'

const FixDeadline = () => {
  return (
    <div className="modal1">
      <div className="pop-up-deadline">
        <div className="frame">
          <div className="x" />
        </div>
        <div className="flex-row-c">
          <div className="schedule-rafiki" />
          <div className="group-1" />
          <div className="frame-2">
            <span className="please-fix-deadline">
              Please fix a deadline for the survey to proceed
            </span>
          </div>
        </div>
        <div className="login">
          <button className="fix-deadline" />
        </div>
      </div>
    </div>
  );
}

export default FixDeadline