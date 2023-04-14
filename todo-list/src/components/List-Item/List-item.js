import React, { useState } from "react";
import "./List-item.css";

function ListItem({ id, text, removeFromList }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox status
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked} // Bind checkbox to isChecked state
        onChange={handleCheckboxChange} // Add event handler for checkbox change
      />
      <span
        style={{
          textDecoration: isChecked ? "line-through" : "none", // Apply line-through style when checkbox is checked
        }}
      >
        {text}
      </span>
      <button onClick={() => removeFromList(id)}>X</button>
    </li>
  );
}

export default ListItem;
