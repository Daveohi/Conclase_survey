// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import PasswordStrengthMeter from "../Functions/Password"; // Assuming you have a PasswordStrengthMeter component
// import Flag from "../assets/Image/flag-nigeria.png";
// import Arrowdown from "../assets/Image/Sort Down.png";
// // import Eye from "../assets/Image/crossed-eye.png";
// import "../Styles/Register/Register.css";

// const RegistrationForm = ({ first, last }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [termsAgreed, setTermsAgreed] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

// //   const [showPassword, setShowPassword] = useState(false);

// //   const togglePasswordVisibility = () => {
// //     setConfirmPassword(!showPassword);
// //   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     };
    
//     const handleTermsAgreeChange = () => {
//       setTermsAgreed(!termsAgreed);
//     };

//   const handleRegistration = () => {
//     // Validation logic
//     const emailRegex = /^[\w-]+(\.[\w-]+)*@conclase\.com$/;
//     const phoneNumberRegex = /^\d{11}$/;

//     if (!emailRegex.test(email)) {
//       setErrorMessage("Invalid email. Must be @conclase.com");
//       return;
//     }

//     if (!phoneNumberRegex.test(phoneNumber)) {
//       setErrorMessage("Invalid phone number. Must be 11 digits");
//       return;
//     }

//     // Additional validation logic for password, if needed

//     // Perform registration logic (send data to server or handle as needed)

//     // Reset error message
//     setErrorMessage("");
//   };

//   return (
//     <div>
//       <div className="names">
//         <div className="first-name">
//           <input
//             className="input"
//             placeholder="First Name"
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>
//         <div className="last-name">
//           <input
//             className="input"
//             placeholder="Last Name"
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="emaiil">
//         <input
//           className="email"
//           placeholder="Email"
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </div>
//       <div className="phone-number">
//         <img
//           className="twemoji-flag-nigeria"
//           alt="Twemoji flag nigeria"
//           src={Flag}
//         />
//         <img className="sort-down" alt="Sort down" src={Arrowdown} />
//         <input
//           className="phone-number-2"
//           placeholder="Phone number"
//           type="tel"
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </div>
//       <div className="frame-3">
//         <PasswordStrengthMeter value={password} hook={setPassword} />
//         {/* Password strength and requirements UI here */}
//         <div className="confirm-password">
//           <input
//             className="confirm-password-2"
//             placeholder="Confirm Password"
//             type="password"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//           />
//           <button
//             className="toggle"
//             type="button"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </button>
//         </div>
//       </div>
//       {errorMessage && (
//         <div className="div-wrapper-2">
//           <p className="p">{errorMessage}</p>
//         </div>
//       )}
//       <div className="terms-and-conditions">
//         <div className="by-clicking">
//           <p className="p">
//             By clicking the “Register” button, you agree to Conclase Survey
//           </p>
//         </div>
//         <div className="div-wrapper-2">
//           <div className="text-wrapper-10">Terms and condition</div>
//         </div>
//       </div>
//       <div className="create-my-account">
//         <div className="creat-my-account">
//           <div className="div-wrapper-2">
//             <button className="creat-my-account-2" onClick={handleRegistration}>
//               Register
//             </button>
//           </div>
//         </div>
//         <div className="already-have-account">
//           <div className="div-wrapper-2">
//             <div className="text-wrapper-11">Already have an account?</div>
//           </div>
//           <Link className="div-wrapper-2" to="/Login">
//             <div className="text-wrapper-12">Log In</div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;
