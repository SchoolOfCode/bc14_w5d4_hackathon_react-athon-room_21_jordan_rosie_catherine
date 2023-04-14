/*
Functionality:
  - checkbox next to each list Item that when ticked will cross out list item ✅
  - press 'enter' on keyboard as well as press 'add' button to add item to to do list
  - create multiple lists - e.g. 'shopping', 'chores', 'to do list' etc. 

Styling: 
  - page layout (App)
      - title/main heading above (stick existing h1 to top)
      - no list style (remove bulletpoints)
      - centered in page completely
      - spacing of delete button
  - colours
      - create colour palette
  - fonts
      - look on google fonts
*/

import React, { useState } from "react";
import "./App.css";
import Input from "../Input/Input";
import List from "../List/List";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");

  function addToList(newToDo) {
    setToDoList([...toDoList, newToDo]);
  }

  function removeFromList(index) {
    setToDoList([...toDoList.slice(0, index), ...toDoList.slice(index + 1)]);
  }

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function handleAddButtonClick() {
    addToList(text);
    setText("");
  }

  return (
    <div className="App">
    <h1>To Do List</h1>
      <Input
        inputText={text}
        onInputChange={handleInputChange}
        onAddButtonClick={handleAddButtonClick}
      />
      <List toDoList={toDoList} removeFromList={removeFromList} />
    </div>
  );
}
export default App;
