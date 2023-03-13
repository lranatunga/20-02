# Exercise - The Cart


### Create a page with a header.
The header should contain a cart icon. 
The cart icon should include the number of products that are currently in it.

Create the following functionalities:

1. If the cart is empty then it should display the number "0". This number should be in a round container.
2. Below the header, add a product card with "+" and "-" buttons at the sides of an input element.
3. When the user clicks on the "+" button, then the number at the cart icon in the header along with the number inside the input element should increase accordingly.
4. Similarly, when the user clicks the "-" button, then the number at the cart icon in the header along with the number inside the input element should decrease accordingly.

### **N.B. You should not allow negative numbers in both the cart and the input**

<hr/>

# Exercise DOM


### Create using JS an unordered list with 4 items.

The items should contain the following texts:

1. "What is your favorite song?"
2. "What is your favorite drink?"
3. "What is your favorite food?"
4. "What is your favorite hobby?"
 
When each one of them is clicked, a textbox should appear and prompt the user to enter his/her choice.

The program has the following favorites predefined for each corresponding list item:
1. "Birdie song"
2. "Soda"
3. "Pasta"
4. "Scuba"

if user's answer is the same with the program's predefined favorite for the same list item, 
then the program should display an alert or anything else to congratulate the user.

If user's answer is different from the predefined program favorite, then the program should display the message:
"It seems that we have different taste but we still can be friends!"

In any of these two last scenarios, the program should display button/link which when clicked the user should be able to start over.

### **N.B. The program should be able to recognize user's input regardless of letter casing.**

==============================================================================================================
// Find the input field and cart icon elements
let inputField = document.querySelector('input');
let cartIcon = document.querySelector('#totalItems');

// Add event listeners to the "+" and "-" buttons
document.querySelectorAll('button').forEach(function(button) {
  button.addEventListener('click', function() {
    let currentValue = parseInt(inputField.value);

    // Increment or decrement the value based on which button was clicked
    if (button.textContent === '+') {
      currentValue++;
    } else {
      currentValue--;
    }

    // Don't allow negative numbers
    if (currentValue < 0) {
      currentValue = 0;
    }

    // Update the input field value and cart icon value
    inputField.value = currentValue;
    cartIcon.textContent = currentValue.toString();
  });
});

======================================================================================================
// let itemsInCart = document.getElementById('totalItems')
// document.querySelectorAll('button').forEach(function(button) {
//   button.addEventListener('click', function() {
//     let currentValue = 0;

//     if (button.textContent === '+') {
//       currentValue++;
//     } else {
//       currentValue--;
      
//     }

//     if (currentValue <= 0) {
//       currentValue = 0;
//     }
//     itemsInCart.textContent = currentValue
//   });
// });