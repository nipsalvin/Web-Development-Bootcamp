import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
import { add, multiply, subtract, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

//Method 2
// import * as Calculator from "./calculator";

// ReactDOM.render(
//   <ul>
//     <li>{Calculator.add(1, 2)}</li>
//     <li>{Calculator.multiply(2, 3)}</li>
//     <li>{Calculator.subtract(7, 2)}</li>
//     <li>{Calculator.divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );
