import React from "react";
import ReactDOM from "react-dom";

const fName = "Alvin";
const lName = "Nips";
const lucky_number = 8;

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>
      Hello {fName} {lName}!{" "}
    </p>
    <p>Hello {fName + " " + lName}!</p>
    <p>Hello {`${fName} ${lName} !`}</p>
    <p>My lucky number is {lucky_number}</p>
  </div>,
  document.getElementById("root")
);
