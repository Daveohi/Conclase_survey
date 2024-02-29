import "../Styles/Reset/ResetPasswordForm.css";

const ResetPasswordForm = ({ showEnterCode = true }) => {
  return (
    <div className="desktop-reset">
      <div className="resetrectangle2" />
      {/* <div className="oval4" /> */}
      {/* <div className="oval5" /> */}
      <div className="desktop-45-child" />
      <div className="conclase-logo1">
        <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
      </div>
      <div className="conclase-survey-container">
        <b className="conclase-survey1">
          <span className="span2">{` `}</span>
          <span>Conclase</span>
          <span className="span3">{` `}</span>
          <span>Survey!</span>
        </b>
      </div>
      <div className="oval6" />
      <div className="oval7" />
      <img
        className="removebg-preview-1-icon1"
        alt=""
        src="/5500661removebgpreview-1@2x.png"
      />
      <div className="resetcreate-acc-group">
        <div className="create-acc2">
          <div className="create-acc3">
            {showEnterCode && <div className="enter-code">Enter Code</div>}
          </div>
          <div className="lets-get-started1">
            <div className="please-enter-the">
              Please enter the code sent to you email to reset your password
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="rectangle-div" />
          <div className="rectangle-div" />
          <div className="rectangle-div" />
          <div className="rectangle-div" />
        </div>
        <div className="resetcreate-my-account2">
          <div className="resetcreat-my-account2">
            <div className="resetcreate-my-account3">
              <b className="resend-code">Reset password</b>
            </div>
          </div>
          <div className="resetalready-have-account">
            <div className="resetcreate-my-account3">
              <div className="didnt-get-a">Didn’t get a code?</div>
            </div>
            <div className="login2">
              <b className="resend-code">Resend code</b>
            </div>
          </div>
        </div>
      </div>
      <img className="resetarrow-back-icon1" alt="" src="/arrow-back.svg" />
      <div className="resetrectangle3" />
    </div>
  );
};

export default ResetPasswordForm;
