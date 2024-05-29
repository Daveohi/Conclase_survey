import React from 'react';
// import "../Styles/Dashboard/Form.css";
import "../Styles/Dashboard/FormPage.css";
import { Link } from 'react-router-dom';

const FormPage = ({formData}) => {
  return (
    <div className="main-formpage">
      <div className="formoval" />
      <div className="formbody">
        <div className="formheader">
          <div className="formframe">
            <div className="ic-baseline-arrow-back" />
            <Link
              style={{ textDecoration: "none" }}
              className="bi bi-arrow-left back"
              to="/addfile"
            >
              Back
            </Link>
          </div>
          <button className="formlogin">
            <span className="print">Print</span>
          </button>
        </div>
      </div>
      <div className="formpg">
        <div className="formframe-1">
          <span className="form-titlepg">Form Title{formData.FormTitle}</span>
        </div>

        <div className="formframe-2">
          <span className="formdescription1">
            Description{formData.Description}
          </span>
        </div>
        <div className="question">
          <div className="formframe-3">
            <div className="formframe-4">
              <span className="question-5">Question{formData.question}</span>
              <div className="mdi-required" />
            </div>
            <div className="div-frame">
              <div className="div-ellipse" />
              <span className="span-option-1">Option1{formData.question}</span>
            </div>
            <div className="div-frame-6">
              <div className="div-group" />
              <span className="span-option-2">Option2{formData.inpuType}</span>
            </div>
            <div className="div-frame-7">
              <div className="div-ellipse-8" />
              <span className="span-option-3">Option 3{formData.inpuType}</span>
            </div>
            <div className="div-frame-9">
              <div className="div-ellipse-a" />
              <span className="span-option-4">Option 4{formData.inpuType}</span>
            </div>
          </div>
        </div>
        <div className="div-question">
          <div className="div-frame-b">
            <div className="div-frame-c">
              <span className="span-input-question">
                Input Question{formData.question}
              </span>
            </div>
            <div className="div-frame-d">
              <span className="your-answer">
                Your answer{formData.inpuType}
              </span>
            </div>
          </div>
        </div>
        <div className="question-e">
          <div className="formframe-f">
            <div className="formframe-10">
              <span className="question-11">Question{formData.question}</span>
              <div className="mdi-required-12" />
            </div>
            <div className="formframe-13">
              <div className="check-box" />
              <span className="option-1">Option 1{formData.inpuType}</span>
            </div>
            <div className="formframe-14">
              <div className="check-box-15" />
              <span className="option-2">Option 2{formData.inpuType}</span>
            </div>
            <div className="formframe-16">
              <div className="check-box-17" />
              <span className="option-3">Option 3{formData.inpuType}</span>
            </div>
            <div className="frame-18">
              <div className="check-box-19" />
              <span className="option-4">Option 4{formData.inpuType}</span>
            </div>
          </div>
        </div>
        <div className="formframe-1a">
          <div className="formframe-1b">
            <span className="question-1c">Question{formData.question}</span>
          </div>
          <div className="select-option">
            <span className="select">Select</span>
            <div className="fe-arrow-up" />
          </div>
        </div>
        <div className="question-1d">
          <div className="formframe-1e">
            <div className="formframe-1f">
              <span className="question-20">Question</span>
            </div>
            <div className="formframe-21">
              <span className="mm-dd-yyy">mm/dd/yyy</span>
              <div className="solar-calendar-linear" />
            </div>
          </div>
        </div>
        <div className="question-22">
          <div className="formframe-23">
            <div className="formframe-24">
              <span className="question-25">Question</span>
            </div>
            <div className="flex-row">
              <div className="formframe-26" />
              <div className="formframe-27" />
              <div className="time-am-option">
                <span className="am">AM</span>
                <div className="fe-arrow-up-28" />
              </div>
              <div className="fad-digital-colon" />
            </div>
          </div>
        </div>
        <div className="flex-row-29">
          <div className="login-2a">
            <span className="submit">Submit</span>
          </div>
          <div className="formregister">
            <span className="clear-form">Clear form</span>
          </div>
        </div>
      </div>
      <div className="formgroup" />
      <div className="group-2b">
        <div className="oval-2c" />
        <div className="oval-2d" />
      </div>
    </div>
  );
}

export default FormPage;

// import React from "react";
// import "../Styles/Dashboard/FormPage.css";
// import { Link } from "react-router-dom";

// const FormPage = ({ formData }) => {
//   return (
//     <div className="main-formpage">
//       <div className="formoval" />
//       <div className="formbody">
//         <div className="formheader">
//           <div className="formframe">
//             <div className="ic-baseline-arrow-back" />
//             <Link
//               style={{ textDecoration: "none" }}
//               className="bi bi-arrow-left back"
//               to="/addfile"
//             >
//               Back
//             </Link>
//           </div>
//           <button className="formlogin">
//             <span className="print">Print</span>
//           </button>
//         </div>
//       </div>
//       <div className="formpg">
//         <div className="formframe-1">
//           <span className="form-titlepg">Form Title</span>
//         </div>

//         <div className="formframe-2">
//           <span className="formdescription1">Description</span>
//         </div>
//         <div className="question">
//           <div className="formframe-3">
//             <div className="formframe-4">
//               <span className="question-5">Question</span>
//               <div className="mdi-required" />
//             </div>
//             <div className="div-frame">
//               <div className="div-ellipse" />
//               <span className="span-option-1">{formData.question}</span>
//             </div>
//             <div className="div-frame-6">
//               <div className="div-group" />
//               <span className="span-option-2">{formData.inputType}</span>
//             </div>
//           </div>
//         </div>
//         <div className="div-question">
//           <div className="div-frame-b">
//             <div className="div-frame-c">
//               <span className="span-input-question">Input Question</span>
//             </div>
//             <div className="div-frame-d">
//               <span className="your-answer">Your answer</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex-row-29">
//         <div className="login-2a">
//           <span className="submit">Submit</span>
//         </div>
//         <div className="formregister">
//           <span className="clear-form">Clear form</span>
//         </div>
//       </div>
//       <div className="formgroup" />
//       <div className="group-2b">
//         <div className="oval-2c" />
//         <div className="oval-2d" />
//       </div>
//     </div>
//   );
// };

// export default FormPage;