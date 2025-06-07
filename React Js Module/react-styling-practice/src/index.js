//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const today = new Date();
const hour = today.getHours();

let salutation;
let customStyle = { color: "red" };

if (hour >= 0 && hour <= 11) {
  salutation = "Good Morning";
  customStyle.color = "red";
} else if (hour >= 12 && hour <= 17) {
  salutation = "Good Afternoon";
  customStyle.color = "green";
} else {
  salutation = "Good Evening";
  customStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {salutation}
    </h1>
  </div>,
  document.getElementById("root")
);
