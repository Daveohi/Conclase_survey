import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "../Styles/Reset/Desktop2.css";
import SideNav from "./SideNav";
import RESET from "../assets/Image/resetpassword.png";

const Desktop2 = () => {
  const [codes, setCodes] = useState(["", "", "", "", ""]); // State to store codes entered
  const [error, setError] = useState(null); // State to store validation error message

  const handleChange = (index, event) => {
    const value = event.target.value;
    const updatedCodes = [...codes];
    updatedCodes[index] = value;
    setCodes(updatedCodes);
    setError(null); // Reset error message when user starts typing again
  };

  const onDesktop2Click = () => {
    // Validate codes
    for (let code of codes) {
      if (!validateSingleDigit(code)) {
        setError("Please enter single-digit numbers in all input boxes");
        return;
      }
      navigate("/desktop3");
    }
    // All codes are valid, proceed with resetting password
    // alert("proceed with resetting password");
  };

  // Function to validate single-digit numbers
  const validateSingleDigit = (code) => {
    return (
      code.length === 1 &&
      !isNaN(code) &&
      parseInt(code) >= 0 &&
      parseInt(code) <= 9
    );
  };

  return (
    <div className="desktop-45">
      <div className="rectangle4" />
      <div className="oval8" />
      <div className="oval9" />
      <SideNav />
      <img className="removebg-preview-1-icon2" alt="" src={RESET} />
      <div className="create-acc-group">
        <div className="create-acc4">
          <div className="create-acc5">
            <div className="enter-code">Enter Code</div>
          </div>
          <div className="lets-get-started2">
            <div className="please-enter-the">
              Please enter the code sent to you email to reset your password
            </div>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="rectangle-parent">
          {codes.map((code, index) => (
            <input
              key={index}
              className="frame-child"
              value={code}
              onChange={(event) => handleChange(index, event)}
            />
          ))}
        </div>
        <div className="create-my-account4">
          <div className="creat-my-account4">
            <div className="create-my-account5">
              <b className="resend-code" onClick={onDesktop2Click}>
                Reset password
              </b>
            </div>
          </div>
          <div className="already-have-account">
            <div className="create-my-account5">
              <div className="didnt-get-a">Didn’t get a code?</div>
            </div>
            <div className="login">
              <b className="send-code">Resend code</b>
            </div>
          </div>
        </div>
      </div>
      <BsArrowLeft className="arrow-back-icon2" />
      <div className="rectangle5" />
    </div>
  );
};

export default Desktop2;
