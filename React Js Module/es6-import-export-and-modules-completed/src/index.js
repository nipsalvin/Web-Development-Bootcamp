import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);


// Method 2 ** Not Recomended**
// import React from "react";
// import ReactDOM from "react-dom";
// import * as pie from "./math.js";

// ReactDOM.render(
//   <ul>
//     <li>{pie.default}</li>
//     <li>{pie.doublePi()}</li>
//     <li>{pie.triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
