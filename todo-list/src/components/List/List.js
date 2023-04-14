import React from "react";
import "./List.css";

function List({ toDoList, removeFromList }) {
//


return (
<div id="todo-list">
    <h1>To Do List</h1>
    {/* Taking in the array toDoList and mapping through
    parameters - new toDo and index number
    Creates a new li element eac time
    Displaying the text of toDo 
    button calling removeFromList function
    */}
    <ul>
        {toDoList.map((toDo, index) => (    
            <li key={index}>
                {toDo}
                <button onClick={() => removeFromList(index)}>X</button>
            </li>))}
    </ul>
</div>


)
}

export default List;