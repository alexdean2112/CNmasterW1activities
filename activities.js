// create an object called pet with the key values of:
// name, typeOfPet, age, colour,
// and methods called eat and drink.
// They should return a string saying [Your Pet Name] is eating/drinking

const pet = {
    name: "Paddy",
    typeOfPet: "Labrador",
    age: 4,
    colour: "Yellow",
    eat() {
        console.log(`${this.name} is eating!`)
    },
    drink() {
        console.log(`${this.name} is drinking!`)
    },
}

pet.eat()
pet.drink()

// generate a random number between 1 - 30 six times
// for each random number check if the number is divisible by 7 or not.
// log out a message to the console if it is divisble by 7 or not

let numbers = []

for (i = 0; i < 6; i++) {
    let num = Math.floor((Math.random() *30 + 1))
    numbers.push(num)
}

for (i = 0; i < 6; i++) {
    if (numbers[i] % 7 == 0){
        console.log(`This number is divisble by 7 - ${numbers[i]}`)
    }
    else console.log(`This number is not divisble by 7 - ${numbers[i]}`)
}

// edit a person object to include a function called sayHi and when it is called
// it returns "Hello my name is ${name}"

const person = {
    name: "Alex",
    age: 26,
    sayHi() {
        console.log(`Hello my name is ${this.name}`)
    }
}

person.sayHi()

// generate 6 random numbers between 1-50 and log them to the console
let numbers2 = []

for (let i = 0; i < 6; i++) {
    let num = Math.floor((Math.random() * 50 + 1))
    numbers2.push(num)
}

for (i = 0; i < 6; i++) {
    console.log(numbers2[i])
}

// create a loop that console logs 9-0 to the screen
for (let i = 9; i > -1; i--) {
    console.log(i)
}

// create a program that stores what you ate today for breakfast
// lunch and dinner. Log these to the console.
let breakfast = "Pancakes";
let lunch = "Beans on Toast";
let tea = "Sunday Roast";

console.log(`Breakfast = ${breakfast} \nLunch = ${lunch} \nTea = ${tea}`)

// create an array that lists your favourite films, up to 5 elements.
// add 2 more using a method and then use a loop to cycle through the array
let favouriteSongs = ["Tom Sawyer", "Limelight", "Red Barchetta"]

favouriteSongs.push("Witch Hunt", "Vital Signs")
for (i = 0; i < favouriteSongs.length; i++) {
    console.log(favouriteSongs[i])
}