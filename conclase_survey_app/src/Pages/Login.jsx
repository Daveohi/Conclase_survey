const Login = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="oval" />
        <div className="overlap-group">
          <div className="oval-2" />
          <div className="rectangle-3" />
          <div className="CONCLASE-LOGO">
            <img className="image" alt="Image" src="image-1.png" />
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
        <div className="frame-2">
          <div className="create-acc">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Register</div>
            </div>
            <div className="lets-get-started">
              <p className="let-s-get-you">
                Let&#39;s get you started with Conclase Survey
              </p>
            </div>
          </div>
          <div className="names">
            <div className="first-name">
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">Damilare</div>
              </div>
            </div>
            <div className="last-name">
              <div className="div-wrapper-2">
                <div className="text-wrapper-4">Oluwatosin</div>
              </div>
            </div>
          </div>
          <div className="emaiil">
            <input
              className="email"
              placeholder="Damilareoluwa@gmail.com"
              type="email"
            />
          </div>
          {/* <div className="phone-number">
            <div className="phone-number-2">
              <img
                className="twemoji-flag-nigeria"
                alt="Twemoji flag nigeria"
                src="twemoji-flag-nigeria.svg"
              />
              <img className="sort-down" alt="Sort down" src="sort-down.png" />
              <div className="text-wrapper-5">080123456789</div>
            </div>
          </div> */}
          <div className="frame-3">
            <div className="password">
              <div className="password-2">
                <div className="text-wrapper-6">*****</div>
                <img className="img" alt="Frame" src="frame.svg" />
              </div>
            </div>
            {/* <div className="frame-4">
              <div className="confirm-password">
                <div className="confirm-password-2">
                  <div className="text-wrapper-7">**********</div>
                  <img className="img" alt="Frame" src="image.svg" />
                </div>
              </div>
              <div className="div-wrapper-2">
                <p className="p">
                  Your password and confirmation password don’t match
                </p>
              </div>
            </div> */}
          </div>
          {/* <div className="terms-and-conditions">
            <div className="by-clicking">
              <p className="text-wrapper-8">
                By clicking the “Register” button, you agree to Conclase Survey
              </p>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-9">Terms and condition</div>
            </div>
          </div> */}
          <div className="create-my-account">
            <div className="creat-my-account">
              <div className="div-wrapper-2">
                <div className="creat-my-account-2">Register</div>
              </div>
            </div>
            <div className="already-have-account">
              <div className="div-wrapper-2">
                <div className="text-wrapper-10">Already have an account?</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-11">Log In</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;