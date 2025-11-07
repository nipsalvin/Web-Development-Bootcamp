import animals, { useAnimals } from "./data";

console.log(animals);

//// Destructuring Arrays
// we are using [] for destructuring because animals is an array of objects
const [cat, dog] = animals;

////Destructuring Objects
// we are using {} for destructuring because cat is an object
// When destructuring an object you have to use names that are 'keys' in the object
// const { name, sound } = cat;
// If you want to use personalized variable names in the JSON, you can change it as below
// const { name:animalName, sound:animalSound } = cat;
// You can also provide default values. Incase there are missing values
// const { name = "Fluffy", sound = "Purr" } = cat;
// You can also destructure an object that is in another object
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

console.log(useAnimals(cat));
const [name, makeSound] = useAnimals(cat);
console.log(name);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
