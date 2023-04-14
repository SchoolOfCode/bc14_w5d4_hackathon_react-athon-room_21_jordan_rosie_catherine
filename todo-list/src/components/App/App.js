import React, { useState } from "react";
import "./App.css";
import Input from '../Input/Input';
// import List from '../List';

function App() {
  // useState to create toDoList state - array or string?
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");

  // function to add an item to the toDoList
  function addToList(newToDo) {
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
      <Input inputText={inputText} addToList={addToList} />
      {/* Props - toDoList (array), delete function */}
      {/* <List inputText={inputText} removeFromList={removeFromList} /> */}
    </div>
  );
}

export default App;
