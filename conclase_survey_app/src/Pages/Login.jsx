import { Link } from "react-router-dom";
// import Logo from "../assets/Image/Coclase logo.png";
// import Eye from "../assets/Image/crossed-eye.png";
import "../Styles/Login/Login.css";
import Sidebar from "../Component/Sidebar";
import LoginForm from "../Component/LoginForm";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="desktop2">
      <Sidebar />
      
        <div className="frame-2">
          <div className="create-acc">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Login</div>
            </div>
            <div className="lets-get-started">
              <div className="text-wrapper-4">
                Continue with Conclase Survey
              </div>
            </div>
          <br />
          <LoginForm value={email} hook={setEmail} />
          <br />
            {/* <div className="emaiil">
              <input className="email" placeholder="Email" type="email" />
            </div>
            <br/>
            <div className="frame-3">
              <div className="confirm-password">
                <input
                  className="confirm-password-2"
                  placeholder="Enter password"
                  type="password"
                />
                <img className="img" alt="Frame" src={Eye} />
              </div>
            </div>
            <div className="div-wrapper-2">
              <p className="p">The Email or password you typed is incorrect</p>
            </div>
            <div className="terms-and-conditions">
              <Link className="div-wrapper-2" to="/Reset">
                <div className="text-wrapper-6">Forgot password?</div>
              </Link>
            </div>
            <div className="create-my-account">
              <div className="creat-my-account">
                <Link className="div-wrapper-2" to="/dashboardd">
                  <button className="creat-my-account-2">Login</button>
                </Link>
              </div> */}
              <div className="already-have-account?">
                <div className="div-wrapper-2">
                  <div className="text-wrapper-7">New to conclase survey?</div>
                </div>
                <Link className="div-wrapper-2" to="/register">
                  <button className="text-wrapper-8">Register</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="rectangle-4"></div> */}
        </div>
      // </div>
    // </div>
  );
};

export default Login;