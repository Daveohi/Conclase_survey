// import Logo from "../assets/Image/Coclase logo.png";
import Eye from "../assets/Image/crossed-eye.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login/Login.css";

const LoginForm = ({value, hook}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Your authentication logic goes here
    // For simplicity, let's assume the correct credentials are hardcoded
    const correctEmail = "user@conclase.com";
    const correctPassword = "password";

    if (email === correctEmail && password === correctPassword) {
      // Successful login - navigate to the dashboard
      window.location.href = "/dashboardd"; // Change this based on your routing mechanism
    } else {
      // Incorrect credentials - display error message
      setErrorMessage("The email or password you typed is incorrect");
    }
  };

  return (
    <div>
      <div className="emaiil">
        <input
          className="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <br />
      <div className="frame-3">
        <div className="confirm-password">
          <input
            className="confirm-password-2"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <img className="img" alt="Frame" src={Eye} />
        </div>
      </div>
      {errorMessage && (
        <div className="div-wrapper-2">
          <p className="p">{errorMessage}</p>
        </div>
      )}
      <div className="terms-and-conditions">
        <Link className="div-wrapper-2" to="/Reset">
          <div className="text-wrapper-6">Forgot password?</div>
        </Link>
      </div>
      <div className="create-my-account">
        <Link className="creat-my-account" to="/dashboardd">
          <button className="creat-my-account-2" onClick={handleLogin}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
