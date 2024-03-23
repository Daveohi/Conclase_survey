import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "../Styles/Reset/Desktop3.css";
import SideNav from "./SideNav";
import RESET from "../assets/Image/resetpassword.png";
import ResetModal from "./ResetModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Desktop3 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordReset = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Passwords match, perform further actions such as password reset
    // For now, let's just show the success modal
    setModalVisible(true);
  };

  return (
    <div className="desktop-46">
      <div className="rectangle8" />
      <div className="oval16" />
      <div className="oval17" />

      <SideNav />

      <img className="removebg-preview-1-icon4" alt="" src={RESET} />
      <div className="reset-new-password2">
        <div className="create-acc8">
          <div className="create-acc9">
            <div className="reset-password2">Reset Password</div>
          </div>
          <div className="lets-get-started4">
            <div className="please-reset-your2">
              Please reset your new password
            </div>
          </div>
        </div>
        <div className="password6">
          <div className="password7">
            <input
              className="new-password1"
              type={passwordVisible ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
            </span>
          </div>
        </div>
        <div className="password6">
          <div className="password7">
            
            <input
              className="new-password1"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
            {/* </div> */}
          </div>
          <br />
        </div>
        <div className="create-my-account8">
          <div className="creat-my-account8">
            <div className="create-my-account9">
              <b className="new-password1" onClick={handlePasswordReset}>
                Create New Password
              </b>
            </div>
          </div>
        </div>
      </div>
      <Link to="/login">
        <BsArrowLeft className="arrow-back-icon4" />
        </Link>
      <div className="rectangle9" />
      {modalVisible && ( <ResetModal />)}
    </div>
  );
};

export default Desktop3;
