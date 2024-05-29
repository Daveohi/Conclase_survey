import React, { useState } from "react";
import "../Styles/Dashboard/TitleBar.css";

const TitleBar = ({ onFormSubmit }) => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);
  const [question, setQuestion] = useState("");
  const [inputType, setInputType] = useState("Date");

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSelectChange = (e) => {
    setInputType(e.target.value);
  };

  const handleFormSubmit = () => {
    onFormSubmit({ question, inputType });
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleEmojiDropdown = () => {
    setShowEmojiDropdown(!showEmojiDropdown);
  };

  const handleEmojiClick = (emoji) => {
    setQuestion(question + emoji);
    setShowEmojiDropdown(false);
  };

  const inputStyle = {
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
  };
  return (
    <div className="flex-row-bc">
      <div className="line" />
      <div className="firstframe">
              <div className="secondframe">
          <div className="thirdframe">
            <button className="frame-button" onClick={handleFormSubmit}>
              <textarea
                placeholder="Input Question"
                className="span-input-question"
                value={question}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </button>
                  </div>
                  
          <div className="div-date-option">
            <select
              className="div-button"
              value={inputType}
              onChange={handleSelectChange}
            >
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
          </div>
          <br />
          <div className="fourthframe">
            <div
              className={`bi bi-type-bold ${isBold ? "active" : ""}`}
              onClick={toggleBold}
            />
            <div
              className={`bi bi-type-italic ${isItalic ? "active" : ""}`}
              onClick={toggleItalic}
            />
            <div
              className={`bi bi-type-underline ${isUnderline ? "active" : ""}`}
              onClick={toggleUnderline}
            />
            <div className="bi bi-emoji-smile" onClick={toggleEmojiDropdown} />
            {showEmojiDropdown && (
              <div className="emoji-dropdown">
                <div onClick={() => handleEmojiClick("😊")}>😊</div>
                <div onClick={() => handleEmojiClick("😂")}>😂</div>
                <div onClick={() => handleEmojiClick("😍")}>😍</div>
                <div onClick={() => handleEmojiClick("😢")}>😢</div>
                <div onClick={() => handleEmojiClick("😎")}>😎</div>
              </div>
            )}
          </div>
        </div>
        <div className="fifthframe">
          <span className="mm-dd-yyyy">mm/dd/yyyy</span>
          <i className="bi bi-calendar-week" />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
