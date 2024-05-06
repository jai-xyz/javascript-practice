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


// class Students{
//     studying = true;

//     isReading() {
//         console.log(`${this.name} is reading manga.`);
//     }

//     isWriting(){
//         console.log(`${this.name} is writing about his journal.`);
//     }
// }

// class Student1 extends Students{
//     name = "Mike";
// }


// class Student2 extends Students{
//     name = "Kiel";
// }


// const student1 = new Student1();

// student1.isReading();



// class Motors{
//     isParked = true;

//     isRunning(){
//         console.log(`His ${this.name} was running 160kph`);
//     }

//     isUnderMaintenance(){
//         console.log(`His ${this.name} was on the motorshop since last week.`);
//     }
// }

// class Raider extends Motors{
//     name = "Raider";

// }

// class HondaBeat extends Motors{
//     name = "HondaBeat";

// }

// class PCX extends Motors{
//     name = "PCX";
// }


// const raider = new Raider();
// const hondabeat = new HondaBeat();


// hondabeat.isUnderMaintenance();
// raider.isRunning();


// let timeOutId;

// function start(){
//     timeOutId = setTimeout(() => window.alert("Hello!"), 5000);
//     console.log("Started");
// }

// function clearTimer(){
//     clearTimeout(timeOutId);
//     console.log("Cleared");
// }


// function updateClock(){
//     dateNow = new Date();
//     const hours = dateNow.getHours().toString().padStart();
//     const minutes = dateNow.getMinutes().toString().padStart();
//     const seconds = dateNow.getSeconds().toString().padStart();
//     const displayHours = `${hours}:${minutes}:${seconds}`
//     document.getElementById("displayClock").textContent = displayHours;

// }


// updateClock()
// setInterval(updateClock, 1000);

// const display = document.getElementById("displayTime");
// let timer = null;
// let startTime = 0; 
// let elapsedTime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop(){
//     if(isRunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }

// function reset(){
//     if(isRunning){
//         clearInterval(timer);
//         startTime = 0;
//         elapsedTime = 0;
//         isRunning = false;
//         display.textContent = "00:00:00:00";
//     }
// }


// function update(){
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let second = Math.floor(elapsedTime / (1000 % 60));
//     let millisecond = Math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     second = String(second).padStart(2, "0");
//     millisecond = String(millisecond).padStart(2, "0");

//     display.textContent = `${hours}:${minutes}:${second}:${millisecond}`;
// }


// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     display.value = eval(display.value);
// }


// const welcome = document.getElementById("msg");
// const username = "";

// welcome.textContent += username === "" ? 'Guest' : username;

// const element = document.querySelector('.welcome');

// element.style.backgroundColor = "red"; 


// const msg = document.getElementById("msg");
// const btn = document.getElementById("myBtn");

// btn.addEventListener("click", event => {
//     msg.style.color = "red";
//     msg.style.textTransform = "uppercase";
// });

// btn.addEventListener("mouseover", event => {
//     msg.style.color = "blue";
//     msg.style.textTransform = "lowercase"
// });

// btn.addEventListener("mouseout", event => {
//     msg.style.color = "black";
//     msg.style.textTransform = "capitalize";
// });

// const changer = document.getElementById("changer");
// const hide = document.getElementById("hide-show");

// let buttons = document.querySelectorAll(".myBtn");

// changer.addEventListener("click", event => {
//     buttons.forEach(button => {
//         button.style.color = "white";
//         button.style.backgroundColor = "green";
//     });
// });

// hide.addEventListener("click", event =>{
//     hide.textContent = hide.textContent === "Hide" ? "Show" : "Hide";
//     buttons.forEach(button =>
//         button.style.display = hide.textContent === "Show" ? "Block" : "none");
// })



// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const result = document.getElementById("result");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// const resultDisplay = document.getElementById("result");

// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice){

//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     let result = "";

//     if(playerChoice === computerChoice){
//         result = "It's a TIE!";
//     }
//     else{
//         switch(playerChoice){
//             case "rock":
//                 result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "paper":
//                     result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//                     break;
//             case "scissors":
//                 result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//         }
//     }



//     resultDisplay.style.color = (result === "YOU WIN!") ? "blue" :
//                                 (result === "YOU LOSE!") ? "red" : "black";
 
//     playerDisplay.textContent = `${playerChoice}`;
//     computerDisplay.textContent = `${computerChoice}`;
//     resultDisplay.textContent = `${result}`;

    
//     playerScoreDisplay.textContent = (result === "YOU WIN!") ? playerScore++ : 
//                                      (result === "YOU LOSE!") ? computerScore++ : playerScore;
                             
                                     
//     playerScoreDisplay.textContent = `${playerScore}`;
//     computerScoreDisplay.textContent = `${computerScore}`;

// }


// function jog(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(`Done jogging.`);
//         }, 1500);
//     });
// }

// function changeClothes(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(`Done changing clothes.`)
//         }, 1000);
//     });
// }

// function eatBreakfast(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Done eating breakfast`);
//         }, 2000);
//     });
// }


// jog().then(value => {console.log(value); 
//     return changeClothes().then(value => {console.log(value); 
//     return eatBreakfast().then(value => {console.log(value); 
//         console.log(`Done doing morning routine`);
//     })})});

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//         .then(response => {
//             if (!response.ok) {
//                     throw new Error("Could not fetch resource");
//             }
//             return response.json();
//         })
//         .then(data => console.log(data.id))
//         .catch(error => console.error(error));


async function fetchData(){

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch data.");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const img = document.getElementById("pokemonSprite");

        img.src = pokemonSprite;

        // pokemonSprite.style.display = "block";

        document.getElementById("pokemonNameDisplay").textContent = pokemonName;

    } catch (error) {
        console.error(error);
    }
}