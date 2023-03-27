/**
 * 01. 
 * 
 * Create a class called Person with properties for name and age. 
 * Add a method called greet() that prints a message to the console greeting the person by name. 
 * Then, create an instance of the class and call the greet() method on it.
 * 
 */
class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello', this.name)
    }
}
 let Tom = new Person( 'Tom', 20)
 let nick = new Person('Nick', 40)
 Tom.greet()
 nick.greet()

/**
 * 02.
 * Create a class called Vehicle with properties for make, model, and year. 
 * Add a method called getAge() that calculates and returns the age of the vehicle based on the current year and the year it was made. 
 * Then, create an instance of the class and call the getAge() method on it.
 * 
 */

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getAge(){
        let currentYear = new Date().getFullYear()
        // console.log(currentYear - this.year)
        return currentYear - this.year
    }
}
let car = new Vehicle ('Honda', 'civic', 2015)
console.log(car.getAge())
// let currentYear = 2023
// car.getAge()


/**
 * 03.
 * Create a class called Rectangle with properties for width and height. 
 * Add a method called getArea() that calculates and returns the area of the rectangle. 
 * Then, create an instance of the class and call the getArea() method on it.
 * 
 */

class Rectangel {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        // console.log(this.width* this.height)
        return this.width * this.height
    }

}
let recOne = new Rectangel(10, 6)
console.log(recOne.getArea())
// recOne.getArea()

/**
 * 04.
 * Create a class called BankAccount with properties for accountNumber, accountHolderName, and balance. 
 * Add methods called deposit() and withdraw() that allow the user to add or subtract money from the account balance. 
 * Then, create an instance of the class and use the deposit() and withdraw() methods to modify the account balance.
 * 
 */

class BankAccount{
    constructor(accountNumber, accountHolderName, balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
       ;
    }
    deposit(amount){
         this.balance += amount
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log('Insufficient Funds')
        } else
        {this.balance -= amount}
    }
}

let peter = new BankAccount('123456', 'Peter', 10500)
console.log(peter.balance)
peter.deposit(500)
console.log(peter.balance)
peter.withdraw(12000)
// console.log(peter.balance)
peter.withdraw(1000)
console.log(peter.balance)
// peter.deposit()
// peter.withdraw()


/**
 * 05.
 * Create a class called Animal with properties for name and type. 
 * Add a method called speak() that prints a message to the console representing the sound the animal makes. 
 * Then, create a subclass called Dog that inherits from the Animal class and adds a method called bark() that prints a message to the console representing the sound a dog makes. 
 * Create an instance of the Dog class and call both the speak() and bark() methods on it.
 * 
 */

class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    speak(){
        console.log(`This is a ${this.type} and its make a sound.`)
    }
    bark(){
        console.log(`This is a ${this.type} named ${this.name}. It is barking.`)
    }
}
const Rover = new Animal ('Rover', 'dog')
Rover.speak()
Rover.bark()


/**
 * 06.
 * Create a class called Shape with properties for x and y coordinates, 
 * as well as a method called moveTo(x, y) that changes the shape's position. 
 * Then, create an instance of the Shape class and call the moveTo() method on it.
 * 
 */

class Shape {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    moveTo(x,y){
        this.x = x;
        this.y = y;
    }
}
const shape =new Shape(0,0)
console.log(shape.x, shape.y)
shape.moveTo(10,4)
console.log(shape.x, shape.y)


/**
 * 07.
 * Create a class called Deck that represents a standard deck of playing cards. 
 * It should have properties for cards, which is an array of Card objects, and size, which is the number of cards in the deck. 
 * Add methods called shuffle() and draw() that allow the user to shuffle the deck and draw a card from the top of the deck, respectively. 
 * Then, create an instance of the Deck class and use the shuffle() and draw() methods to simulate a game of cards.
 * 
 */

class Deck {
    constructor(type, rank){
        this.type = type;
        this.rank = rank;
    }
    shuffle(cards){
        return this.cards()
    }
    draw(){

    }
}


/**
 * 08.
 * Create a class called Playlist with properties for name and tracks, which is an array of track objects. 
 * Add methods called addTrack(track) and removeTrack(track) that allow the user to add or remove a track from the playlist, respectively. 
 * Then, create an instance of the Playlist class and use the addTrack() and removeTrack() methods to modify the playlist.
 * 
 */
class Playlist{
    constructor(name,track){
        this.name = name;
        this.track = [ ];
    }
    addTrack(track){
            this.track.push(track)
        }
        
    
    removeTrack(track){
        for(let i = 0; i< track.length; i++){
            this.track.findIndex('')
            this.track.shift()
            return track
        }
        console.log(this.track)
    }
}
let newList = new Playlist ('listOne', ['song1', 'song2', 'song3', 'song4' ])



/*You are a college student and you want to stream a movie over one of the campus’s Wi-Fi networks. Based on the number of users, some networks won’t have the data to stream a movie.

Use the following Network class to track how much total data and how many users each network has:
The properties of the Network class are:
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
}

data: Total units of data supplied by the network
users: Total numbers of users currently on the network
Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.*/
class Network1 {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime(){
      let remainingData = this.data-(5* this.users) 
      if (remainingData >= 10){
        console.log( true);
      } else{
        console.log ( false);
      }
    }
  }
  const library1 = new Network1(10, 9) 
  library1.movieTime()

  class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime(){
      let userData = 5* this.users
      if (this.data - userData  >= 10){
        return true
      } else{
        return false
      }
    }
  }
  const library = new Network(50, 5) 
  library.movieTime()
  console.log(library.movieTime())


/*A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}
Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your function.
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
balloonAttack(p1, p2);
Feel free to use the status() method to output each player’s balloon count at any given time.
*/

class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  const balloonAttack = (player1, player2) => {
    for (let i = 1; i <= 10; i++){
      player2.balloonCount -= player1.hitsPerMinute
      player1.balloonCount -= player2.hitsPerMinute
    //   player1.status();
    //   player2.status();
    }
    if (player1.balloonCount > player2.balloonCount) {
      return player1.name;
    }else if (player2.balloonCount > player1.balloonCount)
      return player2.name
  
    return 'Tie'
  }
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
balloonAttack(p1, p2);
console.log(balloonAttack(p1, p2))

/*A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.*/


