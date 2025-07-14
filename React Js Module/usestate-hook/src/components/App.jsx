import React, { useState } from "react";
// useState is a method from "react" you can use React.useState or import useState on it's own
import ReactDOM from "react-dom";

function App() {
  // var count = 0;

  //// We are using useState() (line 11)because that is how 
  //// it is imported otherwise we would use React.useState().
  //// useState returns 2 objects, the input and a function
  // const state = useState(12345);
  // console.log(state[0]);

  // Destructuring
  const rgb = [9, 123, 255];
  // Turns to
  const [red, green, blue] = [9, 123, 255];

  // Instead of using state, we destructure
  const [count, setCount] = useState(0);
  console.log(count, setCount);

  function increase() {
    // count++;
    // console.log("I got clicked and count is now" + " " + count);
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      {/* <h1>{count}</h1> */}
      {/* <h1>{state[0]}</h1> */}
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
