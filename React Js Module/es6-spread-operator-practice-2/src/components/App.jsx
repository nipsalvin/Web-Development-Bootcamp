import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItem] = useState([]);

  function handleInputText(event) {
    const newValue = event.target.value;
    console.log(newValue);
    setInputText(newValue);
  }

  function handleSubmittion() {
    setItem((previousItems) => {
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
        <input type="text" value={inputText} onChange={handleInputText} />
        <button onClick={handleSubmittion}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
