import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";
import App from "./components/App";

// const date = new Date();
// const currentTime = date.getHours();

// let greeting;

// const customStyle = {
//   color: "",
// };

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

ReactDOM.render(<App />, document.getElementById("root"));
