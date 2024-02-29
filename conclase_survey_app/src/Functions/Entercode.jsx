import React from "react";
import "../Styles/Reset/Reset.css";
import "../Styles/Reset/Entercode.css";
import ResetPasswordForm from "../Component/RegisterForm";

const Entercode = ({ title, subtitle }) => {
  return (
    <div className="main-container2">
      <div className="lets-get-started">
        <div className="flexcontainer">
          <p className="text">
            <span className="text-wrapper-4">
              Please enter the code sent to your email
            </span>
          </p>
          <p className="text">
            <span>to reset your password</span>
          </p>
        </div>
      </div>
      <div className="full-stack">
        <div className="create-acc1">
          <span className="enter-code">{title}</span>
        </div>
        <div className="lets-get-started1">
          <span className="enter-code-1">{subtitle}</span>
        </div>
      </div>
      <ResetPasswordForm  />

      <div className="create-my-account1">
        <button className="creat-my-account1" >
          <div className="create-my-account-7">
            <span className="creat-my-account-8">
              {/* {buttonText}Reset Password */}
            </span>
          </div>
        </button>
        <div className="already-have-account1">
          <div className="already-have-account-9box">
            <span className="didnt-get-a-code">Didn’t get a code?</span>
          </div>
          <div className="login1">
            <span className="resend-code">Resend code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entercode;