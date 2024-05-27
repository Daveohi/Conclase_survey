import { React, useState } from 'react';
import "../Styles/Modals/FixDate.css";

const ModalDate = ({ onClose }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleCreate = () => {
    // Handle form submission logic here
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    onClose();
  };
  return (
    <div className="modal2">
      <div className="hover-state">
        <span className="options">Fix Deadline </span>
      </div>
      <span className="dateform-title">Form Title</span>
      <span className="date">Date</span>
      <div className="flex-row-bd">
        <div className="dateframe">
          <div className="dateframe-1">
            <span className="from">From</span>
            {/* <span className="date-2">20.03.2024</span> */}
            <input
              type="date"
              className="date-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="datesolar-calendar-linear" />
        </div>
        <div className="dateframe-3">
          <div className="dateframe-4">
            <span className="to">To</span>
            {/* <span className="date-5">20.03.2024</span> */}
            <input
              type="date"
              className="date-5"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="solar-calendar-linear-6" />
        </div>
      </div>
      <span className="time">Time</span>
      <div className="flex-row-dc">
        <div className="dateframe-7">
          <div className="dateframe-8">
            <span className="start">Start</span>
            {/* <span className="time-9">9:00</span> */}

            <input
              type="time"
              className="time-9"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
        </div>
        <div className="dateframe-a">
          <div className="dateframe-b">
            <span className="end">End</span>
            {/* <span className="time-c">20:00</span> */}
            <input
              type="time"
              className="time-c"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="dateframe-d">
        <button className="login-button">
          <span className="create"onClick={handleCreate}>Create</span>
        </button>
        <div className="dateregister">
          <span className="cancel">Cancel</span>
        </div>
      </div>
    </div>
  );
}

export default ModalDate;