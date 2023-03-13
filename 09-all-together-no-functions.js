/**
 * 1. Write a program that takes in two numbers and prints the larger of the two
 * 
 * E.g. Given the numbers 5 and 7, the program should print 7
 */
let numberOne = 8;
let numberTwo = 23;

if (numberOne > numberTwo) {
    console.log (numberOne);
} else {
    console.log(numberTwo);
};


/**
 * 2. Write a program that takes in a number and prints whether it is even or odd.
 * 
 * e.g. given the number 3, it should print Odd
 */
let selectedNumber= 3; 
 if (selectedNumber % 2 == 1 ) {
    console.log(`The number ${selectedNumber} is an odd number`);
 } else {
    console.log(`The number ${selectedNumber} is an even number`);
 }



/**
 * 3. Write a program that takes in an array of numbers and prints the sum of all even numbers in the array.
 * 
 * e.g. given the array [1, 2, 3, 4, 5, 6] should print 12
 */
  let givenNumbers = [1, 2, 3, 4, 5, 6];
  let sumOfEvenNumbers = 0;
  
  for (let i = 0; i < givenNumbers.length; i++){
    if (givenNumbers[i] % 2 === 0){
        sumOfEvenNumbers += (givenNumbers[i]);
    }
  };
 console.log(sumOfEvenNumbers)
  

/**
 * 4. Write a program that takes in a string and prints the number of vowels in the string.
 * 
 * E.g. given the string 'hello', the program should print 2
 */
let givenWord = 'hello';
let vowelnInWord = [];

for(let i = 0; i < givenWord.length; i++){
    if (givenWord[i] === 'a' || givenWord[i] === 'e' || givenWord[i] === 'i' || givenWord[i] === 'o'|| givenWord[i] === 'u'){
        vowelnInWord.push(givenWord[i])
    }

};
console.log(vowelnInWord.length)




/**
 * 5. Write a program that takes in an array of strings and prints the longest string in the array.
 * 
 * E.g. for given array ['apple', 'banana', 'cherry'] the program should print banana
 */
 let wordsArray = ['apple', 'banana', 'cherry', 'strowberry']; 
 let longestWord = '';
 for(let i = 0; i < wordsArray.length; i++){
   if (wordsArray[i].length > longestWord.length ){
    longestWord = wordsArray[i];
   }
 };
 console.log(longestWord);




/**
 * 6. Write a program that takes in an array of numbers and prints a new array with all numbers multiplied by 2.
 * 
 * e.g. given an array [1, 2, 3] it should print [2, 4, 6]
 */

let numberLine = [1, 2, 3];
let multipliedLine = [];

for (let i = 0; i < numberLine.length; i++){
    multipliedLine.push(numberLine[i]*2)
};
console.log(multipliedLine)



/**
 * 7. Write a program that takes in a string and prints a new string with all vowels replaced by the letter 'o'.
 * 
 * e.g. given string 'hello' it should print 'hollo'
 */
let wordChoice = 'hello';
let newString = '';

for (let i = 0; i < wordChoice.length; i++){
    if ('aeiouAEIOU'.includes(wordChoice[i]) ){
        newString += 'o';
    } else {
        newString +=  wordChoice[i];
    }
};

console.log(newString)




/**
 * 8. Write a program that takes in a string and prints the number of words in the string. You can assume that words are separated by spaces.
 * 
 * e.g. given string 'Hello world, how are you?' it should print 5
 * 
 */
let myLabel = 'Hello world, how are you?';
let wordsCountMyLabel = 1;

for (let i = 0; i < myLabel.length; i++){
    if (myLabel[i] === ' '){
        wordsCountMyLabel++;
    }
    
};
console.log(wordsCountMyLabel);



/**
 * 9. Write a program that takes in an array of strings and prints a new array with all strings in uppercase.
 * 
 * e.g. given array ['apple', 'banana', 'cherry'] it should print [ 'APPLE', 'BANANA', 'CHERRY' ]
 */
let lowerArray = ['apple', 'banana', 'cherry'];
let upperArray = [ ];

for ( let i = 0; i < lowerArray.length; i++){
    upperArray.push(lowerArray[i].toUpperCase());
}
console.log(upperArray);




/**
 * 10. Write a program that takes in a number and prints a new array with all the numbers from 1 to that number.
 * 
 * e.g. given number 5 it should print [1, 2, 3, 4, 5]
 */

let numberTakeen = 5;
let numberArrayNew = [ ];
for ( let i = 1; i <= numberTakeen; i++){
    numberArrayNew.push(i)
};
console.log(numberArrayNew);