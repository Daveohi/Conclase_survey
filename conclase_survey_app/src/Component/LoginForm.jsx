
import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import "../Styles/Login/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const LoginForm = ({value, hook}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Ensure axios includes credentials with requests
  axios.defaults.withCredentials = true;

  const data = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4005/auth/login", data);
      //console.log(response.data.result);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("genToken", response.data.result.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("An error occurred while logging in");
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="toggle"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
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
        <br />
      </div>
      <div className="create-my-account">
        <div className="creat-my-account" to="/dashboard">
          <button className="creat-my-account-2" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
