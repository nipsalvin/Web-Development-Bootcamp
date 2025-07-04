import React from "react";
import Login from "./Login";

console.log(Login);
var isLoggedIn = true;
const currentTime = new Date(2025, 10, 10, 11).getHours();
console.log(currentTime > 12);

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const header1 = "Good Morning. Start Working";
const header2 = "Good Evening. Stop Working";

// Using a Ternary Operator in the html tags
// You can only use an EXPRESSION and not a STATEMENT
function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello World</h1> : <Login />}
      {/* if you want to skip rendering when the EXPRESSION is false */}
      {/* {isLoggedIn === true ? <h1>Hello</h1> : null} */}
      {/* if currentTime > 12 then render <h1> */}
      {currentTime > 12 && <h1>{header2}</h1>}
      {/* Concatenating an && operator */}
      {currentTime > 0 && currentTime < 12 && <h1>{header1}</h1>}
    </div>
  );
}

export default App;
