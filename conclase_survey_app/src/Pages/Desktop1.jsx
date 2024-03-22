import { useState } from "react";
import "../Styles/Reset/Desktop1.css";
import { BsArrowLeft } from "react-icons/bs";
import SideNav from "../Component/SideNav";
import RESET from "../assets/Image/resetpassword.png";
import Desktop3 from "../Component/Desktop3";
import { Link } from "react-router-dom";

const Desktop1 = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [reset, setReset] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setReset(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="desktop-44">
      <div className="rectangle2" />
      <div className="oval4" />
      <div className="oval5" />

      <SideNav />
      <img className="removebg-preview-1-icon1" alt="" src={RESET} />
      <div className="create-acc-parent">
        <div className="create-acc2">
          <div className="create-acc3">
            <div className="forgot-password">Forgot Password?</div>
          </div>
          <div className="lets-get-started1">
            <div className="please-enter-your-container">
              <p className="please-enter-your">{`Please enter your email, we will `}</p>
              <p className="send-you-a">
                send you a link to reset your password
              </p>
            </div>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="emaiil">
          <div className="email">
            <input
              className="e-phone"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div className="create-my-account2">
          <div className="creat-my-account2">
            <div className="create-my-account3">
              <b className="email-phone" onClick={handleSubmit}>
                Send Code
              </b>
            </div>
          </div>
        </div>
      </div>
      <Link to="/login">
        <BsArrowLeft className="arrow-back-icon1" />
      </Link>
      <div className="rectangle3" />
      {reset && <Desktop3 />}
    </div>
  );
};

export default Desktop1;
