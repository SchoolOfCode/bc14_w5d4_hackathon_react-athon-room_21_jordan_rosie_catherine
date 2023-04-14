// import css file & react stuff
import React from "react";
import "./Input.css";

// make component function skeleton & export as default & import addToList prop
function Input({ inputText, onInputChange, onAddButtonClick }) {
  // useState - text & setText

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Check if "Enter" key is pressed
      onAddButtonClick(); // Call the onAddButtonClick function to add the item
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={onInputChange}
        placeholder="Enter task here"
        onKeyPress={handleKeyPress}
      />
      <button onClick={onAddButtonClick}>Add</button>
    </div>
  );
  // input field & button ✅
  // onChange/onClick to update state
  // button click will call the addToList function with value of input (text?)
}

export default Input;
