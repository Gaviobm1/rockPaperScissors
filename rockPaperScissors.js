const container = document.querySelector('#container');

const button1 = document.createElement('button');
button1.classList.add("btn1");
button1.style.backgroundColor = 'grey';
button1.textContent = 'Rock'

const button2 = document.createElement('button');
button2.classList.add("btn2");
button2.style.backgroundColor = 'white';
button2.textContent = 'Paper';

const button3 = document.createElement('button');
button3.classList.add("btn3");
button3.style.backgroundColor = 'red';
button3.textContent = 'Scissors';

const results = document.createElement('div');
results.style.backgroundColor = 'green';

const scoring = document.createElement('div');
scoring.style.backgroundColor = 'hotpink';




container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(results);
container.appendChild(scoring);


button1.addEventListener('click', () => { 
    let compSelection = ~~(Math.random() * (3 - 1 + 1) + 1);
    playRound(button1.textContent, compSelection);
   
});
button2.addEventListener('click', () => {
    let compSelection = ~~(Math.random() * (3 - 1 + 1) + 1);
    playRound(button2.textContent, compSelection)
    
});
button3.addEventListener('click', () => {
    let compSelection = ~~(Math.random() * (3 - 1 + 1) + 1);
    playRound(button3.textContent, compSelection)
    
});

let n=0
let c=0


function playRound (a, b) {

 
    if (a == "Rock" && b == 3 && n < 5 && c < 5) {
    results.textContent = `You win! ${a} beats Scissors!`;
    scoring.textContent = `Your score: ${++n} \n Computer score: ${c}`;
    }
    else if (a == "Scissors" && b == 1 && n < 5 && c < 5) {
    results.textContent = `You lose! Rock beats ${a}!`;
    scoring.textContent = `Your score: ${n} \n Computer score: ${++c}`;
    }
   else if (a == "Paper" && b == 1 && n < 5 && c < 5) {
    results.textContent = `You win! ${a} beats Rock!`;
    scoring.textContent = `Your score: ${++n} \n Computer score: ${c}`;
    }
   else if (a =="Rock" && b ==2 && n < 5 && c < 5) {
    results.textContent = `You lose! Paper beats ${a}!`;
    scoring.textContent = `Your score: ${n} \n Computer score: ${++c}`;
   }
   else if (a == "Scissors" && b == 2 && n < 5 && c < 5) {
    results.textContent = `You win! ${a} beats Paper!`;
    scoring.textContent = `Your score: ${++n} \n Computer score: ${c}`;
   }
   else if (a == "Paper" && b == 3 && n < 5 && c < 5) {
    results.textContent = `You lose! Scissors beats ${a}!`;
    scoring.textContent = `Your score: ${n} \n Computer score: ${++c}`;
   }
   else {
    results.textContent = `It's a draw! You both chose ${a}`;
    scoring.textContent = `Your score: ${n} \n Computer score: ${c}`;
   }
   if (n == 5) {
    scoring.textContent = `Game over! You win! Your score: ${n} \n Computer score: ${c}`
    n = 0;
    c = 0; 
   }
   else if (c == 5) {
    scoring.textContent = `Game over! You lose! Your score: ${n} \n Computer score: ${c}`
    n = 0;
    c = 0; 
   }
   

  

}

/*function capitalize(str) {
    let first =  str.charAt(0).toUpperCase();
    let rest = str.slice(1);
    let lower = rest.toLowerCase();
    return first + lower;
}
const userInput = document.getElementsByTagName('button');
let playSelection = userInput
function getComputerChoice(a) {
     switch (a) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors" 
}








//for (i = 0; i < 5; i++) {


/*playRound(playSelection, compSelection);


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
*/





   











