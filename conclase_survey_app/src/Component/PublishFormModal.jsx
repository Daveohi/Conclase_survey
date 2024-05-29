import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../Styles/Modals/PublishModal.css";
import { BsLink, BsX } from "react-icons/bs";

const PublishFormModal = ({ onClose }) => {
  //   const navigate = useNavigate();
  const [link, setLink] = useState("");

  const generateLink = () => {
    const formLink = `${window.location.origin}/formpage`; // Generate the form link
    setLink(formLink);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link); // Copy the link to the clipboard
    alert("Link copied to clipboard");
  };

  return (
    <div className="create-survey">
      <div className="create-survey-item" />
      <div className="publish-form">
        <div className="publish-form-parent">
          <div className="publish-form1">Publish Form</div>
          <BsX className="icround-close-icon" onClick={onClose} />
        </div>
        <div className="icbaseline-link-parent">
          <BsLink
            className="icbaseline-link-icon"
            // alt="Link"
            // src="/icbaselinelink.svg"
          />
          <input className="link" placeholder={link} />
        </div>
        <div className="check-box-parent" onClick={generateLink}>
          <input className="check-box" type="checkbox" />

          <div className="check-box-child" />
          <div className="link"> Generate URL</div>
        </div>
        {link && (
          <>
            <div className="generated-link">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </div>
            <div className="login11" onClick={copyLink}>
              <div className="copy">Copy</div>
            </div>
          </>
        )}
        <div className="register8" onClick={onClose}>
          <div className="copy" onClick={onClose}>Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default PublishFormModal;