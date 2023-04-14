import "./List.css";
import ListItem from "../List-Item/List-item";

function List({ toDoList, removeFromList }) {

  // add a block of text that shows when the toDoList array is empty and disappears when the array is not empty

  return (
    <div id="todo-list">
      {/* Taking in the array toDoList and mapping through
    parameters - new toDo and index number
    Creates a new li element eac time
    Displaying the text of toDo 
    button calling removeFromList function
    */}
    {toDoList.length === 0 ? (
        <p>Looks like you've got nothing to do!</p>
      ) : (
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
      )}
    </div>
  );
}

export default List;
