import Logo from "../assets/Image/Coclase logo.png";
import Flag from "../assets/Image/flag-nigeria.png";
import Arrowdown from "../assets/Image/Sort Down.png";
import Eye from "../assets/Image/crossed-eye.png";
import "../Styles/Register35.css";

const Register = () => {
  return (
    <div className="desktop1">
      <div className="div">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="oval" />
        <div className="overlap-group">
          <div className="oval-2" />
          <div className="rectangle-3" />
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
          <div className="names">
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
            <div className="phone-number-2">
              <img
                className="twemoji-flag-nigeria"
                alt="Twemoji flag nigeria"
                src={ Flag}
              />
              <img className="sort-down" alt="Sort down" src={Arrowdown} />
              <div className="text-wrapper-4">Phone number</div>
            </div>
          </div>
          <div className="password">
            <div className="password-2">
              <div className="text-wrapper-5">Password</div>
              <img className="img" alt="Frame" src={Eye} />
            </div>
          </div>
          <div className="confirm-password">
            <div className="confirm-password-2">
              <div className="text-wrapper-5">Confirm Password</div>
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
              <div className="text-wrapper-6">Terms and condition</div>
            </div>
          </div>
          <div className="create-my-account">
            <div className="creat-my-account">
              <div className="div-wrapper-2">
                <div className="creat-my-account-2">Register</div>
              </div>
            </div>
            <div className="already-have-account">
              <div className="div-wrapper-2">
                <div className="text-wrapper-7">Already have an account?</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-8">Log In</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;