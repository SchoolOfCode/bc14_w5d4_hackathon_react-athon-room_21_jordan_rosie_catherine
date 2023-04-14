import React, { useState } from "react";
import "./App.css";

function App() {
  // useState to create toDoList state - array or string?
  const [toDoList, setToDoList] = useState([]);

  // function to add an item to the toDoList
  function addToList() {
    // add item to toDoList
    // setToDoList
    setToDoList = [...toDoList, newToDo];
  }
  // function to grab the text input
  function inputText(event) {
    setText(event.target.value);
  }

  // function to remove an item from the toDoList
  function removeFromList(index) {
    // remove last from toDoList
    // setToDoList
    setToDoList = [...toDoList.slice(0, index), ...toDoList.slice(index + 1)];
  }

  return (
    <div className="App">
      {/* add Input and List as components*/}
      {/* Props - add function  */}
      <Input addToList={addToList} />
      {/* Props - toDoList (array), delete function */}
      <List inputText={inputText} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
