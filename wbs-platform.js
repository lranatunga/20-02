let myVar = 4;
function titi (){
   const myVar = 5
}
titi()
console.log(myVar)

if (1 === true) {
  console.log("OK");
} else {
  console.log("NOK");
}

function graterNum(a, b) {
  if (a > b) {
    console.log(`The greater number of ${a} and ${b} is ${a}`);
  } else {
    console.log(`The greater number of ${a} and ${b} is ${b}`);
  }
}
graterNum(5,10)
graterNum(15,10)
graterNum(-5,10)

/* Using the function in index.js, create a switch with 3 possibilities:
– if the color is blue, return the value “The color is blue”
– if the color is red, return the value “The color is red”
– if it’s another color, return the value “It’s not a color that I know”
*/
function myFavouriteColor(color) {
  switch (color) {
    case "blue":
      console.log("The colour is blue");
      break;
    case "red":
      console.log("The color is red");
      break;
    default:
      console.log(`It's not a color that I know`);
  }
}
(myFavouriteColor("orange"));



// let nameArray = ["Bob", "Jhon", "Sarah"];
// function htmlEl() {
//   for (let i = 0; i < nameArray.length; i++) {
//     document.querySelector(".names").textContent =nameArray[i] + " is here <br>";
//   }
// }
// htmlEl();

let date = new Date
console.log(date)
let day = date.getDate()
let month = date.getMonth()+1
console.log(`Today is ${day}:${month}`)

let hours = date.getHours()
let min = date.getMinutes()
console.log(`Time is ${hours}:${min}`)