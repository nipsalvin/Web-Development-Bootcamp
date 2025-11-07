// 1. Import useState
import React, { useState } from "react";

function App() {
  // 2. Define value to be used for the input text
  const [inputText, setInputText] = useState("");
  // 5. Create a new useState scenario to handle the items in the list
  const [items, setItems] = useState([]);

  function handleChange(event) {
    // 4. Pass the event object and get value. In this case we do not need the name
    const newValue = event.target.value;
    setInputText(newValue);
    console.log(newValue);
  }

  function addItem() {
    setItems((previousItems) => {
      return [...previousItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* 3. Add a value to tie the input element to the function */}
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
