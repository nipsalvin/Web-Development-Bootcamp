// import React, { useState } from "react";

// Method 1
// function App() {
//   const [name, setName] = useState("");
//   const [fName, setFName] = useState("");
//   const [lName, setLName] = useState("");

//   function handleFirstName(event) {
//     console.log(event.target.value);
//     setFName(event.target.value);
//   }

//   function handleLastName(event) {
//     console.log(event.target.value);
//     setLName(event.target.value);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fName} {lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           placeholder="First Name"
//           onChange={handleFirstName}
//         />
//         <input name="lName" placeholder="Last Name" onChange={handleLastName} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// Method 2
import React, { useState } from "react";
function App() {
  // use fullName as an object with fName and lName when destructuring
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const { value, name } = event.target;
    console.log(value, name);

    // useState 'Remembers' the previous state is was in and that is what we want to tap into
    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
