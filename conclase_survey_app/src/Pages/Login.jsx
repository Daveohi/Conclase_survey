import { useState } from "react";
import SideNav from "../Component/SideNav";
import "../Styles/Login/LoginForm.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const errors = {};
    // Email validation
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    // Password validation
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    // Display errors if any
    setErrors(errors);
    // If there are no errors, proceed with registration
    if (Object.keys(errors).length === 0) {
      // Perform registration logic here
      // console.log("Login successful");
      navigate("/dashboard");
    }
    
  };
  return (
    <div className="desktop-50">
      <SideNav />
      <div className="create-acc-parent5">
        <div className="create-acc20">
          <div className="create-acc21">
            <div className="login6">Login</div>
          </div>
          <div className="lets-get-started10">
            <div className="continue-with-conclase">
              Continue with Conclase Survey
            </div>
          </div>
        </div>
        <div className="emaiil6">
          <div className="email7">
            <input
              className="email8"
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <div className="password19">
          <div className="password20">
            <input
              className="email8"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        {errors.password && <div className="error">{errors.password}</div>}
        <div className="terms-and-conditions5">
          <Link
            to="/desktop1"
            style={{ textDecoration: "none" }}
            className="terms-and-condition10"
          >
            <div className="forgot-password1">Forgot password?</div>
          </Link>
        </div>
        <div className="create-my-account20">
          <div className="creat-my-account20">
            <div
              className="terms-and-condition10"
            >
              <b className="email8" onClick={handleLogin}>
                Login
              </b>
            </div>
          </div>
          <div className="already-have-account12">
            <div className="terms-and-condition10">
              <div className="new-to-conclase">New to conclase survey?</div>
            </div>
            <Link
              to="/register"
              style={{ textDecoration: "none" }}
              className="login7"
            >
              <b className="email8">Register</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
