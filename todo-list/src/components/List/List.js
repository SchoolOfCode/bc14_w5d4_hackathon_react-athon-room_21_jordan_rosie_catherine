import React from "react";
import "./List.css";
import ListItem from "../List-Item/List-item";

function List({ toDoList, removeFromList }) {
  //

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
