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
    
let sports = ["volleyball", "basketball", "soccer", "baseball"];

for (let sport of sports){
    console.log(sport);
}