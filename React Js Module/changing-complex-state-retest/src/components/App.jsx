
// Task 1: Import { useState }
import React, { useState } from "react";

function App() {
  // Task 2: Get Initial Values
  // // fullName needs to be an array of 'fName' and 'lName'
  const [fullName, setFullName] = useState({ fName: "", lName: "" });
  // Task 3: Create a function to handle the changes
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    // Task 5: Change the names using useState
    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
        };
      }
    });
  }
  return (
    <div className="container">
      {/* Task 4: Display the names */}
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
