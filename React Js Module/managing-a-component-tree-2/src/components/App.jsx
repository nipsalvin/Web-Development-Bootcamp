import React, { useState } from "react";
import ToDoItem from "./ToDo";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    console.log(inputText + " Added");
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    console.log("Deleted");
    setItems((previousItem) => {
      return previousItem.filter((item, index) => {
        console.log(id, index);
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            // we can pass functions as well as text
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
