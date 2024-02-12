import React from 'react'

const ModalDate = () => {
  return (
    <div className="modal2">
      <div className="hover-state">
        <span className="options">Fix Deadline </span>
      </div>
      <span className="form-title">Form Title</span>
      <span className="date">Date</span>
      <div className="flex-row-bd">
        <div className="frame">
          <div className="frame-1">
            <span className="from">From</span>
            <span className="date-2">20.03.2024</span>
          </div>
          <div className="solar-calendar-linear" />
        </div>
        <div className="frame-3">
          <div className="frame-4">
            <span className="to">To</span>
            <span className="date-5">20.03.2024</span>
          </div>
          <div className="solar-calendar-linear-6" />
        </div>
      </div>
      <span className="time">Time</span>
      <div className="flex-row-dc">
        <div className="frame-7">
          <div className="frame-8">
            <span className="start">Start</span>
            <span className="time-9">9:00</span>
          </div>
        </div>
        <div className="frame-a">
          <div className="frame-b">
            <span className="end">End</span>
            <span className="time-c">20:00</span>
          </div>
        </div>
      </div>
      <div className="frame-d">
        <button className="login-button">
          <span className="create">Create</span>
        </button>
        <div className="register">
          <span className="cancel">Cancel</span>
        </div>
      </div>
    </div>
  );
}

export default ModalDate