import Logo from "../assets/Image/Coclase logo.png";
import Arrow from "../assets/Image/arrow_back.png";
import { Link } from "react-router-dom";
import Reset from "../assets/Image/resetpassword.png";
import "../Styles/Reset/Reset.css";
import "../Styles/Reset/Entercode.css";
import { useState } from "react";
// import ResetPassword from "../Component/Resetpassword";
// import Entercode from "../Functions/Entercode";
import ResetPasswordForm from "../Functions/ResetPasswordForm";

const Resetpswd = () => {
  // const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [showEnterCode, setShowEnterCode] = useState(false);

    const handleSendCode = () => {
      // Perform logic to send code to the entered email address
      // For simplicity, let's just log the email and display the EnterCode component
      console.log("Sending code to:", email);
      setShowEnterCode(true);
    };
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
          <img
            className="element-removebg"
            alt="Element removebg"
            src={Reset}
          />
          <div className="frame-2">
            <div className="create-acc">
              <div className="div-wrapper">
                <div className="text-wrapper-3">For
                got password?</div>
              </div>
            </div>
            <div>
              {!showEnterCode ? ( // Display email input and send code button if EnterCode component is not shown
                <div>
                  <div className="lets-get-started">
                    <div className="flexcontainer">
                      <p className="textemail">
                        <span className="text-wrapper-4">
                          Please enter your email, we will{" "}
                        </span>
                      </p>
                      <br/>
                      <p className="textemail">
                        <span className="text-wrapper-4">
                          send you a code to reset your password
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="emaiil">
                    <input
                      className="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="create-my-account">
                    <div className="creat-my-account">
                      <button
                        className="creat-my-account-wrapper"
                        onClick={handleSendCode}
                      >
                        <div className="creat-my-account-2">Send code</div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Display EnterCode component if EnterCode component is shown
                <ResetPasswordForm title={email} subtitle={setEmail} />
              )}
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
// };
export default Resetpswd;
