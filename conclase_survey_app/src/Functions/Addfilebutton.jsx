import React from "react";
import { useState } from "react";
import FormTitle from "../Component/FormTitle";

const Addfilebutton = () => {
  const [showFormTitle, setShowFormTitle] = useState(false); // State to control the visibility of FormTitle

  const handleAddQuestionClick = () => {
    // Toggle the visibility of FormTitle
    setShowFormTitle(!showFormTitle);
  };

  return (
    <>
      {!showFormTitle ? ( // Display the button section if showFormTitle is false
        <div>
          <button className="login-3" onClick={handleAddQuestionClick}>
            <div className="bi bi-plus plus" />
            <span className="add-question">Add Question</span>
          </button>
        </div>
      ) : (
        // Display the FormTitle section if showFormTitle is true
        <FormTitle />
      )}
    </>
  );
};

export default Addfilebutton;
