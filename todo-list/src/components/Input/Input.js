/*
<input
      type="text"
      onChange={(event) => {
        handleChange(event);
      }}
    /> 
    
<button className="randomBootcamperName" onClick={handleBootcamperClick}>
          Click me for a random bootcamper!
        </button>
        */

// import css file & react stuff
import React from "react";
import "./Input.css";

// make component function skeleton & export as default & import addToList prop
function Input({inputText, onInputChange, onAddButtonClick }) {
  // useState - text & setText

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={onInputChange}
        placeholder="Enter task here"
      />
      <button onClick={onAddButtonClick}>Add</button>
    </div>
  );
  // input field & button ✅
  // onChange/onClick to update state
  // button click will call the addToList function with value of input (text?)
}

export default Input;
