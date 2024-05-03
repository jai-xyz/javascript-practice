console.log(`Hello JS!`);
console.log(`More Improvement!!!`);

// window.alert(`Alerttt!`);

// document.getElementById("h1").textContent = "Hello World!";
// document.getElementById("p").textContent = "Try something new!";

// let age = 25;

// console.log(`You're ${age} years old.`);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("username").value;
//     document.getElementById("myH1").textContent = `Welcome, ${username}`;
// }

// let age = window.prompt("Age: ");

// age = Number(age);
// age+=1;

// console.log(age);

// TODO: COUNTER PROGRAM 

// const decrease = document.getElementById('decreaseBtn');
// const reset = document.getElementById('resetBtn');
// const increase = document.getElementById('increaseBtn');
// const num = document.getElementById('countNum');
// let count = 0;

// increase.onclick = function(){
//     count++;
//     num.textContent = count;
// }

// decrease.onclick = function(){
//     count--;
//     num.textContent = count;
// }

// reset.onclick = function(){
//     count = 0;
//     num.textContent = count;
// }


// const min = 100;
// const max = 200;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

//    function add() {
//       // Get references to input elements
//       const firstNum = document.getElementById("firstnum").value;
//       const secondNum = document.getElementById("secondnum").value;

//       // Calculate sum (assuming numbers are valid)
//       const sum = Number(firstNum) + Number(secondNum);

//       // Display the result
//       const displayResult = document.getElementById("displayResult");
//       displayResult.textContent = sum;
//     }


    //  document.getElementById("myButton").onclick = function(){

    //    let age = document.getElementById("age").value;
    //    age = Number(age);

    //  display = age >= 18 ? "You're an adult" : "You're an minor";

    //     document.getElementById("display").innerHTML = display;
    // }


// Method Chaining
    // let username = window.prompt("Enter your username: ");

    // username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); 

    // console.log(username);

    // const min = 1;
    // const max = 100;
    // const answer = Math.floor(Math.random() * (max - min + 1)) + min;

    // // console.log(answer);

    // let attempts = 0;
    // let guess;
    // let running = true;

    // while(running){
    //     guess = window.prompt(`Guess a number between ${min} - ${max}`);
    //     guess = Number(guess);
    //     // console.log(typeof guess, guess);

    //     if(isNaN(guess)){
    //         window.alert("Please enter a valid number")
    //     }
    //     else if (guess < min || guess > max){
    //         window.alert("Please enter a valid number")
    //     } 
    //     else {
    //         attempts++;
    //         if (guess < answer){
    //             window.alert("Your answer is too low! Try again!");
    //         } 
    //         else if (guess > answer){
    //             window.alert("Your answer is too high! Try again!");
    //         }
    //         else if (guess){
    //             window.alert(`You get it! The answer is ${answer}. Congratulations!`);
    //             running = false;
    //         }
    //     }

    // }


    // function isLegal(age){
    //     let message = age >= 18 ? "your age is legal" : "your are an minor";
    //      return message;
    // }

    // console.log(isLegal(18));

    // const userInput = document.getElementById("userInput");
    // const toFarenheit = document.getElementById("toFarenheit");
    // const toCelsius = document.getElementById("toCelsius");
    // const displayResult = document.getElementById("displayResult");
    // let temp;

    // function convert(){
    //     if(toFarenheit.checked){
    //         temp = Number(userInput.value);
    //         temp = temp * 9 / 5 + 32;
    //         displayResult.textContent = temp.toFixed(1) + "°F";
    //     }
    //     else if (toCelsius.checked){
    //         temp = Number(userInput.value);
    //         temp = (temp - 32) * (5 / 9);
    //         displayResult.textContent = temp.toFixed(1) + "°C";
    //     }
    //     else {
    //         displayResult.style.color="red";
    //         displayResult.textContent = "Please select a unit";
    //     }
    // }

    // TODO: enhanced for loop
    
// let sports = ["volleyball", "basketball", "soccer", "baseball"];

// for (let sport of sports){
//     console.log(sport);
// }

// function rollDice(){
//         const numDice = document.getElementById("numDice").value;
//         const diceImages = document.getElementById("diceImages");
//         const result = document.getElementById("result");
//         const values = [];
//         const images = [];

//         for(let i = 0; i < numDice; i++){
//             const value = Math.floor(Math.random() * 6 ) + 1;
//             values.push(value);
//             images.push(`<img src="imgs/${value}.png" alt="Dice ${value}">`);
//         }

//         result.textContent = `${values.join(', ')}`;
//         diceImages.innerHTML = images.join('');

// }



// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "banana", "watermelon", "strawberry"];

// fruits.forEach(upperCase);
// fruits.forEach(display);


// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function display(element){
//     console.log(element);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNums = numbers.filter(isEven);

// console.log(isEven);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }



// const prices = [200, 120, 150, 210, 216];

// const total = prices.reduce(sum);


// console.log(`P${total}`);



// function sum(accumulation, elements){
//     return accumulation + elements;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numCube = numbers.map(function (element){
//     return Math.pow(element, 4);
// });

// console.log(numCube);

// const yourName = (name, age) =>  {console.log(`My name is ${name}`)
//                             console.log(`I'm ${age} years old.`)};    
// yourName("Jairo", 23);

// function greetWithDelay(name, delay) { setTimeout(() => console.log(`Hello! ${name}`), delay)};


// greetWithDelay("Jairo", 3000);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let cubes = nums.map((element) => Math.pow(element, 4));

// console.log(cubes);


// const student1 = {
//     firstName: "Mike",
//     course: "BSIT",
//     sayYourName: function(){console.log(`Hi! My name is ${this.firstName}`)}
// }

// student1.sayYourName();


// function Player(name, position, team){
//     this.name = name;
//     this.position = position;
//     this.team = team;
// }

// const player1 = new Player("Kyrie", "Point Guard", "Mavericks");
// const player2 = new Player("Luka", "Small Forward", "Mavericks");
// const player3 = new Player("Edwards", "Shooting Guard", "Timberwolves");

// console.log(`My player is ${player1.name} with the position of ${player1.position}`);


class Students{
    studying = true;

    isReading() {
        console.log(`${this.name} is reading manga.`);
    }

    isWriting(){
        console.log(`${this.name} is writing about his journal.`);
    }
}

class Student1 extends Students{
    name = "Mike";
}


class Student2 extends Students{
    name = "Kiel";
}


const student1 = new Students();

student1.isReading();