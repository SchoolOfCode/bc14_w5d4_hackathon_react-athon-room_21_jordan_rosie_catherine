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
