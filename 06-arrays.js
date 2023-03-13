/**
 * 01 easy
 * Crate an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a function that sums all the numbers of the array
 */
let myLuckyNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumLukyNumbers ( ) {
   let sum = 0
    for ( let i = 0; i < myLuckyNumbers.length; i++){
         sum += myLuckyNumbers[i];
    }
    console.log (sum)
}
sumLukyNumbers();

 
/**
 * 02 easy
 * Write a function toArray that takes 2 values and returns these values in an array.
 * Example: toArray(5, 9) should return the array [5, 9]
 */

function givenNumbers (numA, numB)  {
        return [numA,numB]
}
console.log(givenNumbers(5,9))

/**
 * 03 easy
 * Write a function getFirstElement that takes an array and returns the first element of the array.
 * Example: getFirstElement([1, 2]) should return 1
 */

function getFirstElement  (element) {
    return element[0]
}
console.log(getFirstElement([1, 2]))


/**
 * 04 easy
 * Write a function setFirstElement that takes an array and one variable. 
 * Set the first element of the array with the new variable 
 * The array should be returned
 */
function setFirstElement (array, valueA){
    // for (let i = 0; i < array.length; i++)
    array[0] = valueA
    return array
}

console.log(setFirstElement(['cat', 'bat', 23, ], 15))

function setFirstElement1(array1, value1) {
    return (array1[0] = value1);
  }
  console.log(setFirstElement1(['cat', 'bat', 23, ], 15))

/**
 * 05 easy
 * Write a function getLastElement that takes an array and 
 * returns the last element of the array
 */

function getLastElement (array){
    return array[array.length-1]
}
console.log(getLastElement([1,2,3,4,5]))


/**
 * 06 easy
 * Write a function that accepts an array and a variable. The function should
 * add the variable to the end of the array
 * The function should return the array
 */

function myFunction6 (arrayOne, valueOne){
    arrayOne.push(valueOne)
    return arrayOne 
}
console.log(myFunction6(['cat', 'bat', 23], 25))


/**
 * 07 easy - medium
 * Write a function add that adds an element to the end of an array. 
 * However, the element should only be added if it is not already in the array.
 * Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]
 */

function addElement (arrayTwo, valueTwo){

    if ( !arrayTwo.includes (valueTwo)){
        arrayTwo.push(valueTwo)
        return arrayTwo
    } else {
        return arrayTwo
    }
}
console.log(addElement([1,2,3,4,5], 8))
console.log(addElement([1,2,3,4,5], 3))


/**
 * 08 medium
 * Write a function named list that takes an array of words and returns a string 
 * by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * An empty array should return an empty string.
 * Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'
 */

function list (wordArray) {
    if (wordArray.length === 0){
        return [(' ')]}
    if (wordArray.length === 1){
            return wordArray
        }
    else {
        let frontWords = wordArray.slice([0], [-1])
        let lastWord = wordArray[wordArray.length-1]
       return [frontWords.join(',') + ' and ' + lastWord]
        }

}
console.log(list(['']))
console.log(list(['bat']))
console.log(list(['cat', 'rat']))
console.log(list(['Huey', ' Dewey', 'Louie']))



/**
 * 09 easy
 * Write a function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array
 * The function should accept the array and the number of elements
 */

function numberOfElements ( array9, value9){
     return array9.slice([0], value9)
}
console.log(numberOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))


/**
 * 10 medium
 * Write a function which accepts a string of digits as input and inserts dashes (-) 
 * between each two even numbers. 
 * For example if you accept 025468 the output should be 0-254-6-8
 * The function should return the string output
 */ 
 function stringDigits (numberstring) {
    let addDashString = (' ');
    for ( let i  = 1; i < numberstring.length; i++){
        if ( numberstring[i-1] / 2 === 0 && numberstring[i] / 2 === 0 ){
             addDashString.push('-', numberstring[i]);
            
        } 
        else addDashString.push(numberstring[i])
        
    }  return addDashString.join(' ')
 }
console.log(stringDigits('025468'))


// function addDash(string) {

//     const result = [''];

//     for (let x = 0; x < string.length; x++) {
//         if (string[x - 1] % 2 === 0 && string[x] % 2 === 0) {
//             result.push("-", string[x]);
//         } else {
//             result.push(string[x]);
//         }
//     }

//     return result.join('')
// }

// console.log(addDash('025468'))
 /**
  * 11 medium 
  * Write a function that accepts an array and  strips from it all items that begin from 'a'
  * E.g. the array ['apple','banana','orange'] should become ['banana','orange']
  */
 function arrayEleven (array) {
   
    for (i = 0; i < array.length; i++){
        if (array[i][0] === 'a')
            array.splice([i], 1)  
           { return array
        };
        
    }; 

 }
 console.log(arrayEleven(['apple','banana','orange']))

