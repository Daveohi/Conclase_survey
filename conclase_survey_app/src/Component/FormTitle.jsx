import React from "react";
// import "../Styles/Dashboard/AddFile.css";
import "../Styles/Dashboard/FormTitle.css";

const FormTitle = () => {
  return (
    <div className="maincontainer">
      <div className="bi bi-grip-vertical" />
      {/* <div className="border"> */}
      <div className="flex-row-bc">
        <div className="line" />
        <div className="firstframe">
          <div className="secondframe">
            <div className="thirdframe">
              <button className="frame-button">
                <input
                  placeholder="Input Question"
                  className="span-input-question"
                />
              </button>
            </div>
            <div className="div-date-option">
              <select className="div-button">
                <option value="Date" className="span-label-date">
                  Date
                </option>
                <option value="Time" className="span-label-date">
                  Time
                </option>
                <option value="Multiple Choice" className="span-label-date">
                  Multiple Choice
                </option>
                <option value="Paragraph Text" className="span-label-date">
                  Paragraph Text
                </option>
                <option value="Checkbox" className="span-label-date">
                  Checkbox
                </option>
                <option value="Dropdown" className="span-label-date">
                  Dropdown
                </option>
              </select>
              <div className="div-icon" />

              {/* <input className="input-date-option" /> */}
            </div>
          </div>
          <div className="fourthframe">
            <div className="bi bi-type-bold" />
            <div className="bi bi-type-italic" />
            <div className="bi bi-type-underline" />
            <div className="bi bi-emoji-smile" />
          </div>
          <div className="fifthframe">
            <span className="mm-dd-yyyy">mm/dd/yyyy</span>
            <div className="bi bi-calendar-week" />
          </div>
        </div>
      </div>
      <div className="flex-row-ae">
        <div className="sixthframe">
          <span className="add-option">Add Option</span>
        </div>
        <div className="seventhframe">
          <span className="add-other-option">Add ‘Other’ Option</span>
        </div>
      </div>
      <div className="line-7" />
      <div className="flex-row-ff">
        <div className="line-8" />
        <div className="bi bi-plus add" />
        <div className="bi bi-trash3" />
        <div className="eightframe">
          <span className="required">Required</span>
          <div className="toggle-button bi bi-toggle-off" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FormTitle;
