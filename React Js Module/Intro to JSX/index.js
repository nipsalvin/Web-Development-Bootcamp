// Old method
// var React = require("react");
// var ReactDom = require("react-dom");
//New method
import React from "react";
import ReactDom from "react-dom"

// ReactDom.render(WhatToShow*, WhereToShow*, WhenItHasBeenCalled);
ReactDom.render(
  <div>
    <h1> Hello World </h1>
    <p>Lorem Ipsum</p>
  </div>,
  document.getElementById("root")
);

