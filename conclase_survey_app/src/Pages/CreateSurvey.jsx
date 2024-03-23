import { useState, useCallback } from "react";
// import MenuItem from "../Component/MenuItem";
// import PortalPopup from "../Functions/PortalPopup";
import "../Styles/Dashboard/CreateSurvey.css";

const CREATESURVEY = () => {
  const [isMenuItemOpen, setMenuItemOpen] = useState(false);

  const openMenuItem = useCallback(() => {
    setMenuItemOpen(true);
  }, []);

  const closeMenuItem = useCallback(() => {
    setMenuItemOpen(false);
  }, []);

  return (
    <>
      <div className="create-survey">
        <div className="frame" />
        <div className="frame1" />
        <img className="frame" alt="" src="/frame.svg" />
        <div className="frame1">
          <div className="frame3">
            <div className="frame4">
              <div className="body">
                <div className="form">
                  <div className="frame-parent">
                    <div className="form-title-wrapper">
                      <b className="form-title">Form Title</b>
                    </div>
                    <div className="description-wrapper">
                      <div className="form-title">Description</div>
                    </div>
                  </div>
                  <div className="input-question">
                    <img
                      className="fluentre-order-dots-vertical-icon"
                      alt=""
                      src="/fluentreorderdotsvertical24regular.svg"
                    />
                    <div className="frame-group">
                      <div className="frame5">
                        <div className="frame6">
                          <div className="frame-container">
                            <div className="frame-div">
                              <div className="frame-wrapper">
                                <div className="input-question-wrapper">
                                  <div className="form-title">
                                    Input Question
                                  </div>
                                </div>
                              </div>
                              <div className="time-option">
                                <div className="time">Time</div>
                                <img
                                  className="fearrow-up-icon"
                                  alt=""
                                  src="/fearrowup@2x.png"
                                />
                              </div>
                            </div>
                            <div className="octiconbold-24-parent">
                              <img
                                className="iconoirunderline"
                                alt=""
                                src="/octiconbold24.svg"
                              />
                              <img
                                className="iconoirunderline"
                                alt=""
                                src="/octiconitalic16.svg"
                              />
                              <img
                                className="iconoirunderline"
                                alt=""
                                src="/iconoirunderline.svg"
                              />
                              <img
                                className="iconoirunderline"
                                alt=""
                                src="/mingcuteemojiline.svg"
                              />
                            </div>
                            <div className="input-time-parent">
                              <div className="form-title">Input Time</div>
                              <img
                                className="iconoirunderline"
                                alt=""
                                src="/mingcutetimeline.svg"
                              />
                            </div>
                          </div>
                          <div className="frame-child" />
                        </div>
                      </div>
                      <div className="frame7">
                        <div className="frame8">
                          <div className="add-option-wrapper">
                            <div className="form-title">Add Option</div>
                          </div>
                          <div className="add-other-option-wrapper">
                            <div className="form-title">Add ‘Other’ Option</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame9">
                        <div className="frame10">
                          <div className="required-parent">
                            <div className="form-title">Required</div>
                            <div className="toggle-button">
                              <div className="toggle-button-child" />
                              <div className="toggle-button-item" />
                            </div>
                          </div>
                          <div className="frame11">
                            <img
                              className="icbaseline-add-icon"
                              alt=""
                              src="/icbaselineadd.svg"
                            />
                            <img
                              className="material-symbolsdelete-outlin-icon"
                              alt=""
                              src="/materialsymbolsdeleteoutline.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-item" />
                      <div className="frame-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame12">
              <img className="frame-icon1" alt="" src="/frame.svg" />
              <div className="frame13">
                <div className="sidebars">
                  <div className="image-2-wrapper">
                    <img
                      className="image-2-icon"
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                  <div className="component-2-parent">
                    <div className="component-2">
                      <img
                        className="iconoirunderline"
                        alt=""
                        src="/chart.svg"
                      />
                      <div className="dashboard">Dashboard</div>
                    </div>
                    <div className="component-3">
                      <img
                        className="chatcenteredtext-icon"
                        alt=""
                        src="/chatcenteredtext.svg"
                      />
                      <div className="dashboard">Create survey</div>
                    </div>
                    <div className="component-4">
                      <img
                        className="chatcenteredtext-icon"
                        alt=""
                        src="/chatteardropdots.svg"
                      />
                      <div className="dashboard">Responses</div>
                    </div>
                    <div className="component-5">
                      <img
                        className="chatcenteredtext-icon"
                        alt=""
                        src="/gearsix.svg"
                      />
                      <div className="dashboard">Settings</div>
                    </div>
                    <div className="component-6">
                      <img
                        className="chatcenteredtext-icon"
                        alt=""
                        src="/signout.svg"
                      />
                      <div className="dashboard">Logout</div>
                    </div>
                    <div className="indicator">
                      <div className="wrapper">
                        <div className="dashboard">2</div>
                      </div>
                    </div>
                  </div>
                  <div className="caretleft-wrapper">
                    <img
                      className="caretleft-icon"
                      alt=""
                      src="/caretleft.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame14">
            <img className="frame-icon2" alt="" src="/frame.svg" />
            <div className="frame15">
              <div className="frame16">
                <div className="register-parent">
                  <div className="register">
                    <div className="preview">Preview</div>
                  </div>
                  <div className="frame17">
                    <img
                      className="charmmenu-kebab-icon"
                      alt=""
                      src="/charmmenukebab.svg"
                      onClick={openMenuItem}
                    />
                    <div className="login">
                      <div className="preview">Publish</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame18">
                <div className="header">
                  <div className="elements">
                    <div className="profile">
                      <img
                        className="avatar-icon"
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <div className="text">
                        <div className="john-doe">John Doe</div>
                        <img
                          className="iconoirunderline"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame19">
                <div className="lnk-copied">
                  <div className="publish-form-parent">
                    <div className="publish-form">Publish Form</div>
                    <img
                      className="icround-close-icon"
                      alt=""
                      src="/icroundclose.svg"
                    />
                  </div>
                  <div className="frame20">
                    <div className="frame21">
                      <div className="icbaseline-link-parent">
                        <img
                          className="iconoirunderline"
                          alt=""
                          src="/icbaselinelink.svg"
                        />
                        <div className="input-question-wrapper">
                          <div className="link">Link</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame22">
                      <div className="frame23">
                        <div className="login1">
                          <div className="copy">Copy</div>
                        </div>
                        <div className="register1">
                          <div className="copy">Cancel</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame24">
                      <div className="check-box-parent">
                        <div className="check-box">
                          <div className="check-box-child" />
                          <img
                            className="vector-icon"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="link">Shorten URL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuItemOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuItem}
        >
          <MenuItem onClose={closeMenuItem} />
        </PortalPopup>
      )}
    </>
  );
};

export default CREATESURVEY;