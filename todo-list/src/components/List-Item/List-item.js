import React, { useState } from "react";
import "./List-item.css";
// import Confetti from "react-confetti";

function ListItem({ id, text, removeFromList, toDoList }) {
  const [isChecked, setIsChecked] = useState(false);
  const [numChecked, setNumChecked] = useState(0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox status
    setNumChecked(numChecked + (isChecked ? -1 : 1)); // Increment or decrement numChecked based on checkbox status
  };

  //   useEffect(() => {
  //     if (numChecked === toDoList?.length) {
  //       <Confetti />;
  //     }
  //   }, [numChecked, toDoList?.length]);

  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked} // Bind checkbox to isChecked state
        onChange={handleCheckboxChange}
      />
      <span
        style={{
          textDecoration: isChecked ? "line-through" : "none", // Apply line-through style when checkbox is checked
        }}
      >
        {text}
      </span>
      <button onClick={() => removeFromList(id)}>🗑️</button>
    </li>
  );
}

export default ListItem;
