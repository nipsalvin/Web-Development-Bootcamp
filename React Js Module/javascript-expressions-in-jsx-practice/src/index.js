//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

const fName = "Nips";
const lName = "Alvin";
const thisYear = new Date().getFullYear();

ReactDom.render(
  <div>
    <h1>
      Created By {fName} {lName}
    </h1>
    <p>Copyright {thisYear}</p>
  </div>,
  document.getElementById("root")
);
