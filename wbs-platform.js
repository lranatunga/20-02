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

// display “hello” in the console after 2 seconds (so 2000ms).

let timeout;
function myGreeting(){
timeout = setTimeout(grreting, 2000)
}

function grreting(){
  console.log('Hello!')
}
myGreeting();

function myGreeting2() {
  return 'Hello!';
}

setTimeout(function() {
  console.log(myGreeting2());
}, 4000);

//Write a script that displays "hello" in the console every 2 seconds.


let myInterval;
function myGreatInterval (){
  myInterval = setInterval(great, 2000)
}
function great(){
  console.log('Hello!')
}
myGreatInterval()
clearInterval(myInterval)

// Function 1
function notify(name) {
  console.log(`${name} is here`);
}

notify = (name) => console.log(`${name} is here`);
// Function 2)
setTimeout(function() {
  console.log("1000ms == 1 second");
}, 1000);
setTimeout(() => {console.log("1000ms == 1 second");1000})
// Do no edit
notify("BOB");

const finalGrade = (arg1, arg2, arg3) => {
  
  if ((arg1 < 0 || arg1 > 100)|| (arg2 < 0 || arg2 > 100) || (arg3 < 0 ||  arg3 > 100)){
  console.log(`You have entered an invalid grade.`)
  } 
  let average = (arg1 + arg2 + arg3)/3
  if( average <=59){
    return 'F'
  }else if(average <=69){
    return 'D'
  }else if(average <=79){
    return 'c'
  }else if(average <=89){
    return 'B'
  }else {
   return 'A'
  } 
}
console.log(finalGrade(99, 92, 95))


// const finalGrade = (midterm, final, homework) => {
//   if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
//       return 'You have entered an invalid grade.'
//   }
//   let average = (midterm + final + homework) / 3
//   if (average < 60) {
//       return 'F'
//   }
//   else if (average < 70) {
//       return 'D'
//   }
//   else if (average < 80) {
//       return 'C'
//   }
//   else if (average < 90) {
//       return 'B'
//   } else {
//       return 'A'
//   }
// }



const number = [];
const newNumber = [];
function fizzbuzz(number) {

for (let i = 0; i < number.length; i++){
if (number[i] % 3 === 0 && number[i] % 5 === 0){
 newNumber.push('Fizz Buzz')
} else if(number[i] % 3 === 0){
  newNumber.push('Fizz')
}else if (number[i] % 5 === 0){
   newNumber.push('Buzz')
}else{
 newNumber.push(number[i])
}

}}
fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20]);
console.log(newNumber)

console.log(newNumber.join())
console.log(newNumber.join([' ']))



// Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

// Return the tip, as a number, based on the following:
// ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%

const tipCalculator = (quality, total) => {
  if(quality === 'bad'){
    return total*0.05
  } else if(quality === 'ok'){
    return total * 0.15
  } else if (quality === 'good'){
    return total * 0.20
  } else if (quality === `excellent`){
    return total * 0.30
  } else{
    return total * 0.18
  }
  }

  console.log(tipCalculator('good', 100))
  console.log(tipCalculator('excellent', 100))
  console.log(tipCalculator('bad', 100))
  console.log(tipCalculator('not', 100))


//   Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

// 'shrug' should return '|_{"}_|'
// 'smiley face' should return ':)'
// 'frowny face' should return':('
// 'winky face' should return ';)'
// 'heart' should return '<3'
// any other input should return '|_(* ~ *)_|'

const toEmoticon = feeling => {
  switch(feeling){
    case 'shrug':
    return '|_{"}_|';
    break;
    case 'smiley face':
    return ':)';
     break;
    case 'frowny face':
    return ':(';
     break;
    case 'winky face':
    return ';)';
     break;
    case 'heart':
    return '<3';
     break;
    default:
    return '|_(* ~ *)_|'
  }
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(toEmoticon("whatever")) 
  console.log(toEmoticon("smiley face")) 