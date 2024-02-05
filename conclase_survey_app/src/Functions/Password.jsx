import { useState } from "react";
import "../Styles/Register/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordStrengthMeter = ({ value, hook }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    hook(e.target.value);
  };

  const calculatePasswordStrength = () => {
    // Implement your password strength logic here
    // Example: Check if the password meets specific criteria
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8;

    if (hasMinLength && hasUpperCase && hasSpecialChar) {
      return "strong";
    } else if (
      (hasMinLength && hasUpperCase) ||
      (hasMinLength && hasSpecialChar)
    ) {
      return "medium";
    } else {
      return "weak";
    }
  };

  const getPasswordStrengthText = () => {
    const strength = calculatePasswordStrength();

    switch (strength) {
      case "strong":
        return "Strong";
      case "medium":
        return "Medium" ;
      case "weak":
      default:
        return "Weak";
    }
  };

  return (
    <div>
      {/* <label>Password:</label> */}
      <div className="password">
        
        {/* <div > */}
          <input className="password-2"
            placeholder="Enter Password"
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={handlePasswordChange}
            
          />
          
          <button className="toggle" type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
      </div>
      <div>
        <p>Password Strength: {getPasswordStrengthText()}</p>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;