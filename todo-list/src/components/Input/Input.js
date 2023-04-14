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
import React, { useState } from "react";
import "./Input.css";

// make component function skeleton & export as default & import addToList prop
function Input({ addToList, inputText }) {
  // useState - text & setText
  const [text, setText] = useState("");

  return (
    <div id="input">
    {/*save input box text as 'newToDo'*/}
      <input
        type="text"
        onChange={(event) => {
          inputText(event);
        }}
      ></input>
      <button className="addtodo-button" onClick={addToList}>
          Add To Do
        </button>
    </div>
  );

  // input field & button ✅
  // onChange/onClick to update state
  // button click will call the addToList function with value of input (text?)
}

export default Input;
