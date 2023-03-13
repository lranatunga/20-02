/**
 * Exercise 01
 * Name: String length
 * Write a program that has a string and prints the number of characters in it
 */


 let stringOne = 'I am learning web development.'
 console.log(stringOne.length)



/**
 * Exercise 02
 * Write a program that has a string and prints it in lowercase and uppercase 
 * with "-"" as delimiter.
 * Example: 'Mthatha' should print 'mthatha-MTHATHA'.
 */

 let stringTwo = 'I want to be a web developer'
 console.log(stringTwo.toLowerCase(stringTwo) + '-' + stringTwo.toUpperCase(stringTwo))


/**
 * Exercise 03
 * Write a program that has two strings and prints the initial letters of theses strings.
 * Example: 'Amnesty', 'International' should print 'AI'
 */

let stringThree = [ 'Amnesty', 'International' ]
let newStringThree = [ ]
for (let i = 0; i < stringThree.length; i++){
    newStringThree.push(stringThree[i][0])
    
}
console.log(newStringThree.join(''))


/**
 * Exercise 04
 * Write a program that has a string and prints the first character of the string that is not a space 
 * Example: ' Rosa Parks ' should print 'R'.
 */

let stringFour = 'Rosa Parks'
console.log(stringFour.charAt(0))


/**
 * Exercise 05
 * Write a program that has two strings and prints the 
 * first occurrence of the second string in the first string. 
 * Ignore the case sensitivity.
 * Example: Two strings: 'bit','it' should print 1
 */
let firstStringFive =  'bit';
let secondStringFive = 'it';
let lower





/**
 * Exercise 06
 * Write a program that has a string and prints the first word in that string. 
 * The first word are all characters up to the first space.
 * Example: String: 'see and stop' should print 'see'
 */

 let stringSix = 'see and stop';
 let firstWord = stringSix.split( ' ')[0];
 console.log(firstWord)

/**
 * Exercise 07
 * Write a program that replaces '-' with '/' in a date string.
 * Example: Given string '20-05-2017' should return '20/05/2017'
 */

let givenDateFormat = '20-05-2017';
 console.log(givenDateFormat.replaceAll('-', '/'))

/**
 * Exercise 08
 * Write a program to split a given string and convert it into an array of words
 */

let stringEight = 'We are learning JavaScript';
let nweArrayEight = stringEight.split(' ')
console.log(nweArrayEight)


/**
 * Exercise 09
 * What would following code return?
 * console.log(typeof typeof 1);
 * Explain your answer
 */

/*It will console string. typeof 1  returns string 'number' sa 1 is a numaric value. 
Then, 'typeof 'number' ' returns string, because 'number' is a string value.*/

/**
 * Exercise 10
 * Write a program that has string that contains a filename
 * and prints the extension of that filename
 * Example: 'file.txt' should print 'txt'
 */
let fileName ='first_project.txt'
console.log(fileName.slice(fileName.indexOf('.')+1))
