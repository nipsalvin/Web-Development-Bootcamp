import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setIsMousedOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function mouseOver() {
    console.log("Mouse Over");
    setIsMousedOver(true);
  }

  function mouseOut() {
    console.log("Mouse Out");
    setIsMousedOver(false);
  }

  // Method 1
  const buttonStyle = {
    backgroundColor: isMousedOver ? "black" : "white",
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        //// Method 2
        // style={{backgroundColor: isMousedOver ? "black" : "white",}}
        style={buttonStyle}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        {headingText}
      </button>
    </div>
  );
}

export default App;
