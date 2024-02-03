import Logo from "../assets/Image/Coclase logo.png";
import Arrow from "../assets/Image/arrow_back.png";
import { Link } from "react-router-dom";
import Reset from "../assets/Image/resetpassword.png";
import "../Styles/Reset.css";

const Resetpswd = () => {
  return (
    <div className="desktop3">
      <div className="div">
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
        </div>
        <img className="element-removebg" alt="Element removebg" src={Reset} />
        <div className="frame-2">
          <div className="create-acc">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Forgot password?</div>
            </div>
            <div className="lets-get-started">
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-4">
                    Please enter your phone number or email, we will <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-4">
                    send you a code to reset your password
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="emaiil">
            <input className="email" placeholder="Email" type="email" />
          </div>

          <div className="create-my-account">
            <div className="creat-my-account">
              <button className="creat-my-account-wrapper">
                <div className="creat-my-account-2">Send code</div>
              </button>
            </div>
          </div>
          <Link className="arrowback" to="/login">
          <img className="arrow-back" alt="Arrow back" src={Arrow} />
          </Link>
          <div className="rectangle-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Resetpswd;
