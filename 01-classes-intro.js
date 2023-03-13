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
 Tom.greet()

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
        console.log(currentYear - this.year)
    }
}
let car = new Vehicle (2014, 'civic', 2015)
let currentYear = 2023
car.getAge()


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
        console.log(this.width* this.height)
    }

}
let recOne = new Rectangel(10, 6)
recOne.getArea()

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
    deposit(){
        console.log(this.accountNumber, this.accountHolderName, this.balance + amount)
    }
    withdraw(){
        console.log(this.accountNumber, this.accountHolderName, this.balance - amount)
    }
}

let peter = new BankAccount('123456', 'Peter', 10500)
let amount = 500
peter.deposit()
peter.withdraw()


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
        console.log()
    }

}



/**
 * 06.
 * Create a class called Shape with properties for x and y coordinates, as well as a method called moveTo(x, y) that changes the shape's position. 
 * Then, create an instance of the Shape class and call the moveTo() method on it.
 * 
 */

/**
 * 07.
 * Create a class called Deck that represents a standard deck of playing cards. 
 * It should have properties for cards, which is an array of Card objects, and size, which is the number of cards in the deck. 
 * Add methods called shuffle() and draw() that allow the user to shuffle the deck and draw a card from the top of the deck, respectively. 
 * Then, create an instance of the Deck class and use the shuffle() and draw() methods to simulate a game of cards.
 * 
 */




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
            this.track.slice()
            return track
        }
        console.log(this.track)
    }
}
let newList = new Playlist ('listOne', ['song1', 'song2', 'song3', 'song4' ])