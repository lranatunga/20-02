/**
 * 01 Create a function printArrayElements that takes an array as a parameter and prints each element to the console using forEach.
* 
* Example usage: printArrayElements([1, 2, 3, 4, 5]); // Output: 1 2 3 4 5
*
*/
function printArrayElements ( array){
  array.forEach((element) => {
    console.log(element);
  })
}
printArrayElements([1, 2, 3, 4, 5]);


/**
 * 
 * 02 Create a function doubleArrayElements that takes an array as a parameter and doubles each element using forEach.
 * 
 * 
 * Example usage: doubleArrayElements([1, 2, 3, 4, 5]); // Output: [2, 4, 6, 8, 10]
 * 
 */
// let doubleArrayElements = [1, 2, 3, 4, 5];

 function doubleArrayElements(array){
  array.forEach((array, index) => {
    array[index] = array * 2;
  });
  return array
}
console.log(doubleArrayElements([1, 2, 3, 4, 5]))

/**
 * 
 * 03 Create a function countWords that takes an array of strings and counts the number of words in each string using forEach.
 * 
 * Example usage: countWords(["hello world", "goodbye", "how are you?"]); // Output: [2, 1, 3]
 * 
 */

// let countWords = ["hello world", "goodbye", "how are you?" ]
// let numberOfWords = countWords.forEach((words) => words.length(words))

function countWords(array){
  let wordCount = [];
  array.forEach((arrayelement) =>{
     let words = arrayelement.split(' ');
     wordCount.push(words.length);
  });
  return wordCount;
}
console.log(countWords(["hello world", "goodbye", "how are you?"]));

/**
 * 04 Create a function filterEvens that takes an array of numbers and returns a new array with only the even numbers using filter
 * 
 * Example usage: filterEvens([1, 2, 3, 4, 5]); // Output: [2, 4]
 * 
 */

function evenNumberArray(number){
  return number.filter((number) => 
    number % 2 === 0
  ); 
}
console.log(evenNumberArray([1, 2, 3, 4, 5]));

/**
 * 05 Create a function filterLongWords that takes an array of strings and returns a new array with only the strings that have more than 5 characters using filter
 * 
 * Example usage: filterLongWords(["hello", "world", "goodbye", "hi"]); // Output: ["goodbye"]
 * 
 */

function filterLongWords(wordarray){
  return wordarray.filter((wordarray) => wordarray.length > 5);
};
console.log(filterLongWords(["hello", "world", "goodbye", "hi"]));


/**
 * 06 Create a function squareArrayElements that takes an array of numbers and returns a new array with the squared values using map
 * 
 * Example usage: squareArrayElements([1, 2, 3, 4, 5]); // Output: [1, 4, 9, 16, 25]
 * 
 */

function squareArrayElements(numbers){
 return numbers.map((numbers) => numbers * numbers)
};

console.log(squareArrayElements([1, 2, 3, 4, 5]))


/**
 * 07 Create a function capitalizeWords that takes an array of strings and returns a new array with each word capitalized using map
 * 
 * Example usage: capitalizeWords(["hello", "world", "goodbye"]); // Output: ["Hello", "World", "Goodbye"]
 * 
 */

// function capitalizeWords(wordsarray){
//   return wordsarray.map((wordsarray) => wordsarray.toUpperCase(wordsarray))
// };
// console.log(capitalizeWords(["hello", "world", "goodbye"]));

function capitalizeWords(wordsarray){
  return wordsarray.map((elements) =>
   {let firstLetter = elements.charAt(0).toUpperCase();
    let otherLetters = elements.slice(1).toLowerCase();
    return firstLetter + otherLetters;
   });
};
console.log(capitalizeWords(["hello", "world", "goodbye"]));


/**
 * 08 Create a function calculatePrices that takes an array of products with a price and quantity property and returns a new array with the total cost of each product using map
 * 
 * Example usage: calculatePrices([
  { name: "apple", price: 0.5, quantity: 3 },
  { name: "banana", price: 0.25, quantity: 5 }]); 
  // Output: [{ name: "apple", totalCost: 1.5 }, { name: "banana", totalCost: 1.25 }]
 * 
 */



/**
 * 09 Create a function sumArrayElements that takes an array of numbers and returns the sum of all the elements using reduce
 * 
 * 
 * Example usage: sumArrayElements([1, 2, 3, 4, 5]); // Output: 15
 * 
 */

function sumArrayElements(number){
  return number.reduce((accumulator, currentValue) => accumulator + currentValue);
};
console.log(sumArrayElements([1, 2, 3, 4, 5]))


/**
 * 10 Create a function countWords that takes an array of strings and returns the total number of words using reduce
 * 
 * Example usage: countWords(["hello world", "goodbye", "how are you?"]); // Output: 6
 * 
 */

function stringArray(countWords){
  return countWords.reduce((countWords, currentWord) => countWords + currentWord)
};
console.log(stringArray(["hello world", "goodbye", "how are you?"]))

/**
 * 11 Create a function calculateAverage that takes an array of numbers and returns the average value using reduce
 * 
 * 
 * Example usage: calculateAverage([1, 2, 3, 4, 5]); // Output: 3
 * 
 */

function calculateAverage(avg){
   let total =  avg.reduce((accumulator, currentValue) => accumulator + currentValue);
   return total / avg.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5]));


/**
 * 12 Create a function findIndexGreaterThan that takes an array of numbers and a number n as parameters and returns the index of the first element that is greater than n using findIndex
 * 
 * Example usage: findIndexGreaterThan([1, 2, 3, 4, 5], 3); // Output: 3
 * 
 */

function findIndexGreaterThan(array12, n){
 return array12.findIndex((array12) => array12 > n);
};

console.log(findIndexGreaterThan([1, 2, 3, 4, 5], 3));


/**
 * 13 Create a function findIndexByProperty that takes an array of objects and a property p and value v as parameters and 
 * returns the index of the first object that has the property p equal to v using findIndex
 * 
 * Example usage:
findIndexByProperty(
  [
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.25 },
    { name: "orange", price: 0.75 },
  ],  "price", 0.25 ); // Output: 1
 * 
 */

function findIndexByProperty(objects, property, value){
  return objects.findIndex((objects) => objects[property] === value);
};
console.log(findIndexByProperty( [
  { name: "apple", price: 0.5 },
  { name: "banana", price: 0.25 },
  { name: "orange", price: 0.75 },
],  "price", 0.25  ))


/**
 * 14 Create a function findIndexBySubstring that takes an array of strings and a substring s as parameters and returns the index of the first string that contains the substring s using findIndex
 * 
 * Example usage: findIndexBySubstring(["hello", "world", "goodbye"], "llo"); // Output: 0
 * 
 */
function findIndexBySubstring (string, s){
  return string.findIndex((string) => string.includes(s));
};
console.log(findIndexBySubstring(["hello", "world", "goodbye"], "llo"))