import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordStrengthMeter from "../Functions/Password";
import Flag from "../assets/Image/flag-nigeria.png";
import axios from "axios";


const RegisterForm =  ({ value, hook }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Pass the user data to the parent component for storage
  //   onSignup(userData);
  //   // Reset the form or perform other actions
  //   setUserData({});
  // };

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // const { name, value } = e.target;
    // setUserData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handlePasswordChange = ({}) => {
  //   setPassword(e.target.value);
    
  // };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // const { name, value } = e.target;
    // setUserData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const handleTermsAgreeChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleRegistration = async () => {
    // Validate email, phone number, password, and termsAgreed
    if (!email.includes('conclase')) {
      setErrorMessage('Email must have keyword "conclase"');
      return;
    }

    if (phoneNumber.length !== 11) {
      setErrorMessage("Phone number must be 11 digits");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must contain at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!termsAgreed) {
      setErrorMessage("Please agree to the terms and conditions");
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword 
    };

    try {
      const response = await axios.post("https://conclase-app-api.onrender.com/auth/register", JSON.stringify(data), {headers});
      //console.log(response);
      console.log("Registration successful:", response.data.result);
      if(response.data.success === true){
        console.log(response.data.result);
        //save users data to session
        sessionStorage.setItem('firstname', response.data.result.firstname); 
        sessionStorage.setItem('lastname', response.data.result.lastname);
        sessionStorage.setItem('phoneNumber', response.data.result.phoneNumber);
        sessionStorage.setItem('id', response.data.result.userId);
      }
      navigate('/login'); // Navigate to login after successful registration
    } catch (error) {
      console.error("Error registering user:", error.message);
      setErrorMessage("Error registering user. Please try again later.");
    }
  };


  return (
    <div>
      <div className="names">
        <div className="first-name">
          <input
            className="input"
            placeholder="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="last-name">
          <input
            className="input"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="emaiil">
        <input
          className="email"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          // value={userData.email || ""}
          // onChange={handleEmailChange}
        />
      </div>
      <br />
      <div className="phone-number">
        <img
          className="twemoji-flag-nigeria"
          alt="Twemoji flag nigeria"
          src={Flag}
        />
        <i className="bi bi-chevron-down arrow1" />
        <input
          className="phone-number-2"
          placeholder="Phone number"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>      
      <br />
      <div className="frame-3">
        
        <PasswordStrengthMeter value={password} hook={setPassword} />
        {/* Password strength meter can be integrated here */}

        <div className="frame-7">
          <div className="frame-8">
            <div className="text-wrapper-7">Must contain at least</div>
          </div>
          <div className="frame-4">
            <div className="frame-9">
              <div className="ellipse" />
              <div className="text-wrapper-8">8 Characters</div>
            </div>
            <div className="frame-9">
              <div className="ellipse" />
              <div className="text-wrapper-8">1 Upper case character</div>
            </div>
            <div className="frame-9">
              <div className="ellipse" />
              <div className="text-wrapper-8">1 Special character</div>
            </div>
          </div>
        </div>

        <br />
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}

        <br />
        <div className="confirm-password">
          <input
            className="confirm-password-2"
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            //name="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            // value={userData.confirmPassword || ""}
            // onChange={handleConfirmPasswordChange}
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
      <div className="terms-and-conditions">
        <div className="by-clicking">
          <p className="p">
            I confirm that I have read and accept the terms and conditions and
            privacy policy.
          </p>
        </div>
        <div className="div-wrapper-2">
          <input
            type="checkbox"
            id="termsAgree"
            checked={termsAgreed}
            onChange={handleTermsAgreeChange}
          />
          <label htmlFor="termsAgree" className="text-wrapper-10">
            Terms and conditions
          </label>
        </div>
      </div>
      <div className="create-my-account">
        <div className="creat-my-account">
          <div className="div-wrapper-2">
            <button className="creat-my-account-2" onClick={handleRegistration}>
              Register
            </button>
          </div>
        </div>
        <div className="already-have-account">
          <div className="div-wrapper-2">
            <div className="text-wrapper-11">Already have an account?</div>
          </div>
          <Link
            style={{ textDecoration: "none" }}
            className="div-wrapper-2"
            to="/login"
          >
            <div className="text-wrapper-8">Log In</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
