/**
 * 01
 * Create a function that accepts a variable number of arguments and calculates their sum using the REST parameter syntax.
 * 
 * E.g. sum(1, 2, 3, 4, 5)); // Output: 15
 */

const numbers1 = [1, 2, 3, 4, 5]
function sumNumbers (...numbers1){
    let total = 0;
    for(let sum of numbers1){
        total += sum;
    }
    return total
}
console.log(sumNumbers (...numbers1))


/**
 * 02
 * Merge two arrays using spread operator
 * 
 * E.g. mergedArray([1, 2, 3], [4, 5, 6]); // Output: [1, 2, 3, 4, 5, 6]
 * 
 */
const array1 = [1, 2, 3];
const array2 =  [4, 5, 6];

function mergedArray(array1, array2){
    return [...array1, ...array2]
} 

console.log(mergedArray(array1, array2))


/**
 * 03
 *  Create a function that concatenates a variable number of strings using the spread operator.
 * 
 * concatenateStrings(" - ", "Hello", "world", "from", "Rest"); // Output: "Hello - world - from - Rest"
 */

function concatenateStrings (){

}

/**
 * 04
 * Create a function that accepts an arbitrary number of objects as input and combines them into a new object. 
 * Students should use the spread operator to combine properties from all input objects. 
 * If there are conflicting properties, the function should give priority to the properties of the later objects in the argument list.
 * 
 * combinedObject({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }) // Output: { a: 1, b: 3, c: 4, d: 5 } 
 */



/**
 * 05
 * Create a function that accepts a variable number of arguments and returns the highest number using the REST parameter syntax.
 * 
 * findHighest(1, 2, 3, 4, 5); // Output: 5
 */
const findHighest = (1, 2, 3, 4, 5);
function maxNumber (...arg){
   return Math.max(...arg)
}
console.log(maxNumber(findHighest))


/**
 * 06
 * Write a function that takes two arrays as input, merges them using the spread operator, 
 * and removes duplicates from the merged array without modifying the original arrays
 * 
 *  mergeAndRemoveDuplicates([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]) // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 */
 function mergeAndRemoveDuplicates (array1, array2){
    
 }


/**
 * 07
 * Create a function that updates the property of an object without modifying the original object
 * 
 * updateProperty({ a: 1, b: 2 }, 'b', 3) // Output: { a: 1, b: 3 }
 * 
 */



/**
 * 08
 * Write a function that removes duplicates from an array using the REST parameter syntax and the Set data structure
 * 
 * removeDuplicates(1, 2, 3, 1, 2, 3, 4, 5, 6); // Output: [1, 2, 3, 4, 5, 6]
 * 
 * TIP: explore what is a SET is Javascript
 */






