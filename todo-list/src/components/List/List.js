import React, { useState } from "react";
import "./List.css";
import ListItem from "../List-Item/List-item";

function List({ toDoList, removeFromList }) {
  const [showMessage, setShowMessage] = useState(true);

  // add a block of text that shows when the toDoList array is empty and disappears when the array is not empty

  function handleShowMessage() {
    if (toDoList.length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }

  return (
    <div id="todo-list">
      {/* Taking in the array toDoList and mapping through
    parameters - new toDo and index number
    Creates a new li element eac time
    Displaying the text of toDo 
    button calling removeFromList function
    */}
      <ul>
        {toDoList.map((toDo, index) => (
          <ListItem
            key={index}
            id={index}
            text={toDo}
            removeFromList={removeFromList}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
