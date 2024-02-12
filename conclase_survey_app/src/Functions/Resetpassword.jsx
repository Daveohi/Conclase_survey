import React from 'react';
import "../Styles/Reset/Entercode.css";
import "../Styles/Reset/Reset.css";

const Resetpassword = () => {
  return (
    <div className="main-container1">
      <div className="create-acc1">
        <div className="create-acc-1">
          <span className="reset-password">Reset Password</span>
        </div>
        <div className="lets-get-started1">
          <span className="reset-password-2">
            Please reset your new password
          </span>
        </div>
      </div>
      <div className="password">
        <div className="password-3">
          <span className="new-password">New Password</span>
          <div className="frame-3box" />
        </div>
      </div>
      <div className="password-4">
        <div className="password-5">
          <span className="confirm-new-password">Confirm New Password</span>
          <div className="frame-6box" />
        </div>
      </div>
      <button className="create-my-account1">
        <div className="creat-my-account1">
          <div className="create-my-account-7">
            <span className="creat-my-account-8">Create New Password</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Resetpassword