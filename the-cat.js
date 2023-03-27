// Write yourself a virtual cat – animals with a CLI are so much nicer than ones with fur.

// Create a class that represents a cat. It should have properties for tiredness, hunger, loneliness, and happiness
// Next, write methods that increase and decrease those properties.
//  Call them something that actually represents what would increase or decrease these things, like “feed”, “sleep”, or “pet”.
// Last, write a method that prints out the cat’s status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts



class VirtualCat {
    constructor (name, tiredness=10, hunger=10, happiness=10, loneliness = 10){
        this.name =name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }

    feed(amount){
        
            this.hunger -=amount;
            console.log(`My hunger is ${this.hunger}.`);
        }
        
    sleep(hours){
        // let tiredness = this.tiredness -= hours;
         {
            this.tiredness -= hours;
            console.log(`Mt tiredness is ${this.tiredness}`)}
        
    }
    play(time){
        this.happiness += time
        console.log(`That was fun! My happiness is now ${this.happiness}.`);
    }


    pet(amount){
        if (this.tiredness > 8){
            console.log(`Don't touch me!`)
        } else if (this.loneliness >5){
            console.log(`I'm not really in the mood for cuddles right now.`);
        } else {
            this.loneliness -= amount;
            console.log(`Cuddle me!`);
          }
    }
    status() {
        console.log(`${this.name} has a hunger level of ${this.hunger}, a tiredness level of ${this.tiredness}, a loneliness level of ${this.loneliness}, and a happiness level of ${this.happiness}.`);
      }
}
const pow = new VirtualCat ('Inee')

pow.feed(3);
pow.sleep(5);
pow.pet(2);
pow.play(3);
pow.status();

console.log(`==================================================================`)

class Cat {
    constructor(name) {
        this.tiredness = 50;
        this.hunger = 50;
        this.lonliness = 50;
        this.happiness = 50;
        this.name = name;
        console.log("Your name is: ", this.name)
    }

    feed(amount) {
        this.hunger -= amount;
        console.log('My hunger is:', this.hunger)
    }

    sleep(amount) {
        this.tiredness -= amount;
        console.log('My Tiredness is:', this.tiredness)
    }

    pet(amount) {
        if (this.tiredness < 40) {
            console.log(`Don't touch me you #@!$`)
        } else {
            this.lonliness -= amount;
        }
    }

}

const jim = new Cat('Jim');
jim.feed(10)
jim.sleep(30);
jim.pet(20)

console.log(jim.name)
const jane = new Cat('Jane');

