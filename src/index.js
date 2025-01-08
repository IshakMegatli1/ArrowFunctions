import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

function square(x) {
  return x * x;
}

//arrow functions permettent de remplacer function par =>
//on peut meme enlever () autour du x, le return statement et {}
const nNum = numbers.map((x) => x * x);
console.log(nNum);

////Map -Create a new array by doing something with each item in an array.
const nNumb = numbers.map((x) => x * 2);
console.log(nNumb);

//////Filter - Create a new array by keeping the items that return true.
const nNumbe = numbers.filter((num) => num < 10);
console.log(nNumbe);

//Reduce - Accumulate a value by doing something to each item in an array.
var nNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(nNumber);

////Find - find the first item that matches from an array.
const newN = numbers.find((num) => num > 10);
console.log(newN);

////FindIndex - find the index of the first item that matches.
const newNu = numbers.findIndex((num) => num > 10);
console.log(newNu);
