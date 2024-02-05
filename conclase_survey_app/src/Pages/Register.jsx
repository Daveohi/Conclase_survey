// import Flag from "../assets/Image/flag-nigeria.png";
// import Arrowdown from "../assets/Image/Sort Down.png";
// import Eye from "../assets/Image/crossed-eye.png";
import "../Styles/Register/Register.css";
// import PasswordStrengthMeter from "../Component/RegisterationForm";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
// import { Link } from "react-router-dom";
import RegisterForm from "../Functions/RegisterForm.jsx";

const Register = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <div className="desktop1">
      <Sidebar />
      <div className="frame-2">
        <div className="create-acc">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Register</div>
          </div>
          <div className="lets-get-started">
            <p className="let-s-get-you">
              Let&#39;s get you started with Conclase Survey
            </p>
          </div>
        </div>
        <RegisterForm first={firstName} last={setFirstName} />
        {/* <div className="names">
          <div className="first-name">
            <input className="input" placeholder="First Name" type="text" />
          </div>
          <div className="last-name">
            <input className="input" placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="emaiil">
          <input className="email" placeholder="Email" type="email" />
        </div>
        <div className="phone-number">
          <img
            className="twemoji-flag-nigeria"
            alt="Twemoji flag nigeria"
            src={Flag}
          />
          <img className="sort-down" alt="Sort down" src={Arrowdown} />
          <input
            className="phone-number-2"
            placeholder="Phone number"
            type="phone number"
          />
        </div>
        <div className="frame-3">
          
          <PasswordStrengthMeter value={password} hook={setPassword} />
          <div className="frame-4">
            <div className="password-strength">
              <div className="overlap-group">
                <div className="frame-5">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-7">Password strength</div>
                  </div>
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-7">Weak</div>
                  </div>
                </div>
                <img
                  className="frame-6"
                  alt="Frame"
                  src="frame-1000004360.svg"
                />
              </div>
            </div>
            <div className="frame-7">
              <div className="frame-8">
                <div className="text-wrapper-7">Must contain at least</div>
              </div>
              <div className="frame-4">
                <div className="frame-9">
                  <div className="ellipse" />
                  <div className="text-wrapper-8">8 Characters</div>
                </div>
                <div className="frame-9">
                  <div className="ellipse" />
                  <div className="text-wrapper-8">1 Upper case character</div>
                </div>
                <div className="frame-9">
                  <div className="ellipse" />
                  <div className="text-wrapper-8">1 Special character</div>
                </div>
              </div>
            </div>
          </div>
          <div className="confirm-password">
            <input
              className="confirm-password-2"
              placeholder="Confirm Password"
              type="password"
            />
            <img className="img" alt="Frame" src={Eye} />
          </div>
        </div>
        <div className="terms-and-conditions">
          <div className="by-clicking">
            <p className="p">
              By clicking the “Register” button, you agree to Conclase Survey
            </p>
          </div>
          <div className="div-wrapper-2">
            <div className="text-wrapper-10">Terms and condition</div>
          </div>
        </div>
        <div className="create-my-account">
          <div className="creat-my-account">
            <div className="div-wrapper-2">
              <Link className="creat-my-account-2" to="/dashboardd">
                Register
              </Link>
            </div>
          </div>
          <div className="already-have-account">
            <div className="div-wrapper-2">
              <div className="text-wrapper-11">Already have an account?</div>
            </div>
            <Link className="div-wrapper-2" to="/Login">
              <div className="text-wrapper-12">Log In</div>
            </Link>
       </div> 
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Register;
