import { useState } from "react";
import "../Styles/Register/Register.css";
import { FaEye, FaEyeSlash, FaMinus } from "react-icons/fa";

const PasswordStrengthMeter = ({ value, hook }) => {
  const [showPassword, setShowPassword] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = () => {
    hook(e.target.value);
  };

  const calculatePasswordStrength = (value) => {
    
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

  const getPasswordStrengthText = (value) => {
    const strength = calculatePasswordStrength(value);

    switch (strength) {
      case "strong":
        return <FaMinus style={{ color: "green" }} />;
      case "medium":
        return <FaMinus style={{ color: "blue" }} />;
      case "weak":
      default:
        return <FaMinus style={{ color: "red" }} />;
    }
  };

  return (
    <div>
      <div className="password">
        <input
          className="password-2"
          placeholder="Enter Password"
          type={showPassword ? "text" : "password"}
          value={value}
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
      <div>
        <p>Password Strength: {getPasswordStrengthText(value)}</p>
        
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
