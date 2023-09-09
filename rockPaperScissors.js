


function getComputerChoice(a) {
     switch (a) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors" 
}
}

function capitalize(str) {
    let first =  str.charAt(0).toUpperCase();
    let rest = str.slice(1);
    let lower = rest.toLowerCase();
    return first + lower;
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
let randomNumber = ~~(Math.random() * (3 - 1 + 1) + 1)
let compSelection = getComputerChoice(randomNumber);
let playSelection = capitalize(userInput);
playRound(playSelection, compSelection);


if (playRound(playSelection, compSelection).includes("win")) {
        n++
        alert (`${playRound(playSelection, compSelection)} \n
        Your score: ${n} \n
        Computer score: ${c}`)
    }
    
else if (playRound(playSelection, compSelection).includes("lose")) {
        c++
        alert (`${playRound(playSelection, compSelection)} \n
        Your score: ${n} \n
        Computer score: ${c}`)
    }

else if (playRound(playSelection, compSelection).includes("draw")) {
    alert (`${playRound(playSelection, compSelection)}. \n
    Your score: ${n} \n
    Computer score: ${c}`);
}

else {
    alert (`Please enter "Rock", "Paper" or "Scissors"`);
    i--
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





   











