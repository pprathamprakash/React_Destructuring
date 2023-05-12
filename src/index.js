import animals, { useAnimals } from "./data";

// console.log(animals);

const [cat, dog] = animals;

// the names used for destructuring can't be used again as they have already
// been used, so u can't declare another var as cat

/* above code is same as: 
   const cat = animals.[0]
   const dog = animals.[1] */

// console.log(cat);
// console.log(dog);

const {
  name,
  sound,
  color = "white",
  foodRequirements: { food, water }
} = cat; // giving custom values in an object
// the custom values can only be given for keys not in the object or the key has no value

// const {name: catName, sound: catSound} = cat;
// names different than the actual object keys

/* above code is same as: 
   const name = cat.name
   const dog = cat.sound*/

console.log(food);

const [animal, makeSound] = useAnimals(cat); // this useAnimals function is like useState function of react
console.log(animal); // like useState func. gives an array as output, it also gives an array as output
makeSound(); // and the first array item is simple value while the second item is a function

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
