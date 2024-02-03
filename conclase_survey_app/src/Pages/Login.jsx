import { Link } from "react-router-dom";
import Logo from "../assets/Image/Coclase logo.png";
import Eye from "../assets/Image/crossed-eye.png";
import "../Styles/Login.css";
import Sidebar from "../Component/Sidebar";

const Login = () => {
  return (
    <div className="desktop2">
      <Sidebar />
      {/* <div className="div">
        <div className="rectangle" />
        <div className="oval" />
        <div className="overlap-group">
          <div className="oval-2" />
          <div className="rectangle-2" />
          <div className="CONCLASE-LOGO">
            <img className="image" alt="Image" src={Logo} />
          </div>
          <div className="frame">
            <p className="conclase-survey">
              <span className="text-wrapper">&nbsp;</span>
              <span className="span">Conclase</span>
              <span className="text-wrapper-2">&nbsp;</span>
              <span className="span">Survey!</span>
            </p>
          </div>
          <div className="oval-3" />
          <div className="oval-4" />
        </div> */}
      
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
            <br/>
            <div className="emaiil">
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
                {/* <div className="text-wrapper-5">*****</div> */}
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
                <div className="div-wrapper-2">
                  <button className="creat-my-account-2">Login</button>
                </div>
              </div>
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
      </div>
    // </div>
  );
};

export default Login;