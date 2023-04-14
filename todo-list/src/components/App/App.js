/*
Styling: 
  - page layout (App)
      - title/main heading above (stick existing h1 to top) ✅
      - no list style (remove bulletpoints) ✅
      - centered in page completely ✅
      - bin emoji for delete button ✅
      - spacing of delete button ✅
      - Shia LeBoeuf meme added ✅
  - colours
      - create colour palette
  - fonts
      - look on google fonts ✅
*/

/*Functionality:
  - checkbox next to each list Item that when ticked will cross out list item ✅
  - press 'enter' on keyboard as well as press 'add' button to add item to to do list ✅
  - create multiple lists - e.g. 'shopping', 'chores', 'to do list' etc. 
  - Have a message when there are no items in the list ✅
*/

import React, { useState } from "react";
import Confetti from 'react-confetti';
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
      <img
        src="https://media.tenor.com/ZpWIgnTC1dQAAAAM/shia-la-beouf-just-do-it.gif"
        alt="Shia Labeouf gif"
      />
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
