function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random()*10);
    
    if (randomNumber <=3) {
        return "Rock"
    }
   
    else if (randomNumber > 3 && randomNumber <=6) {
        return "Paper"
    }
   
    else  if (randomNumber > 6 && randomNumber<=9) {
        return "Scissors"
    }
}

function capitalize(str) {
    let first =  str.charAt(0);
    let cap = first.toUpperCase();
    let rest = str.slice(1);
    let lower = rest.toLowerCase();
    return cap + lower;
}


function playRound (a, b) {

 
    if (a == "Rock" && b == "Scissors") {
       return `You win! ${a} beats ${b}!`
    }
    else if (a == "Scissors" && b == "Rock") {
       return `You lose! ${b} beats ${a}!`
    }
   else if (a == "Paper" && b == "Rock") {
       return `You win! ${a} beats ${b}!`
    }
   else if (a =="Rock" && b =="Paper") {
       return `You lose! ${b} beats ${a}!`
   }
   else if (a == "Scissors" && b == "Paper") {
       return `You win! ${a} beats ${b}!`
   }
   else if (a == "Paper" && b == "Scissors") {
       return `You lose! ${b} beats ${a}!`
   }
   else if (a == b) {
       return `It's a draw! You both chose ${b}`
   }
   else {
       return "Please enter a valid choice"
   }

}


let n=0
let c=0

for (i = 0; i < 5; i++) {
let userInput = window.prompt("Rock, paper or scissors?")

let compSelection = getComputerChoice();
let playSelection = capitalize(userInput);
playRound(playSelection, compSelection);


if (playRound(playSelection, compSelection).includes("win")) {
        n++
        alert (`${playRound(playSelection, compSelection)} \n
        Your score: ${n} \n
        Computer score: ${c}`)
    }
    
if (playRound(playSelection, compSelection).includes("lose")) {
        c++
        alert (`${playRound(playSelection, compSelection)} \n
        Your score: ${n} \n
        Computer score: ${c}`)
    }

if (playRound(playSelection, compSelection).includes("draw")) {
    alert (`${playRound(playSelection, compSelection)}. \n
    Your score: ${n} \n
    Computer score: ${c}`);
}

if (i === 4 && n > c) {
    alert (`Game over! You win! \n
    Your score: ${n} \n
    Computer score: ${c}`)
}
else if (i === 4 && n < c) {
    alert (`Game over! You lose! \n
    Your score: ${n} \n
    Computer score: ${c}`)
}

else if (i === 4 && n === c) {
    alert (`Game over! It's a draw! \n
    Your score: ${n} \n
    Computer score: ${c}`)
}

}


   











