/**
 *  01
 *  Write a program that has 2 numbers and checks whether both numbers are 
 *  in the range 40..60 or in the range 70..100 inclusive and prints the result.
 */
// let numberArrayOne = (50 , 70);
let numberOne = 20
let numberTwo =31

if ((numberOne >= 40 && numberOne <= 60) && (numberTwo >= 40 && numberTwo <= 60) ){
    console.log('The numbers are in the range of 40-60');
} else if ((numberOne >= 70 && numberOne <= 100) && (numberTwo >= 70 && numberTwo <= 100)){
    console.log('The numbers are in the range of 70-100');
}else {
    console.log('The numbers are  not in the range of 40-60 or 70-100')
}


/**
 * 02
 * Write a program that computes the difference between a specified number and 19. 
 * It should print their difference if the number is less than 19  
 * and triple their absolute difference if the specified number is greater than 19
 * 
 * e.g. if the number is 20, then it should print 3 and if it is 10, it should print 9.
 */

const num2 = 21;
console.log('The difference is:', num2 <= 19 ? 19 - num2 : (num2 - 19) * 3)


/**
 * 03
 * Write a program to check two given numbers 
 * and print true if one of the numbers is 50 or if their sum is 50
 */
const num31 = 40;
const num32 = 10;
console.log(num31 == 50 || num32 == 50 || num31 + num32 == 50 ? 'One of the number or sum of the numbers equal to 50.' : 'None of the numbers or sum of the numbers are not 50.')


/**
 * 04
 * Write a program to check two given integers
 * and print 'Yes' if one is positive and another one is negative
 * or 'No' if both are positive/negative
 */

const num41 = -22;
const num42 = 32;
console.log((num41 < 0 && 0 < num42) ||( num41 > 0 &&  0 > num42 )? 'yes': 'no')

/**
 * 05
 * Write a program that prints a given string. 
 * If the given string begins with "Py" then print the original string.
 * Else print the string adding "Py" in front of it. 
 */

const string5 = 'JS is a programe'

console.log(string5 === null || string5 === undefined || string5.substring(0, 2) === 'Py' ?
string5 : 'Py'+string5)



/**
 * 06
 * Write a program to create a new string from a given string taking the last 3 characters 
 * and added at both the front and back. 
 * The string length must be 3 or more
 */

const string6 = 'ban'

console.log(string6.length > 3 ? string6.slice(-3)+string6+string6.slice(-3) : 'The string length must be 3 or more')

/**
 * 07
 * Write a program that has 3 numbers and prints the biggest of them
 * without using Math.max()
 */

/**
 * 08
 * Write a program that finds the number which is nearest to 100 
 * from two different given integer values
 */

const num81 = 90, num82 = 200
const difference1 = Math.abs(num81 - 100);
const difference2 = Math.abs (num82 -100);
console.log(difference1 < difference2 ? num81 : num82)

/**
 * 9 - could be challenging
 * Write a program that checks whether the last digit of three given positive integers 
 * is the same
 */