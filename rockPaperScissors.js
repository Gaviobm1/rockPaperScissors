const container = document.querySelector('#container');
const buttons = document.createElement('div');
buttons.classList.add('buttons')

const button1 = document.createElement('button');
button1.classList.add("btn");
button1.style.backgroundColor = '#F2C6DE';
button1.textContent = 'Rock'

const button2 = document.createElement('button');
button2.classList.add("btn");
button2.style.backgroundColor = '#DBCDF0';
button2.textContent = 'Paper';

const button3 = document.createElement('button');
button3.classList.add("btn");
button3.style.backgroundColor = '#FAEDCB';
button3.textContent = 'Scissors';

const results = document.createElement('div');
results.classList.add("info");
results.style.backgroundColor = '#C9E4DE';

const scoring = document.createElement('div');
scoring.classList.add("info");
scoring.style.backgroundColor = '#F7D9C4';




container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(buttons);
buttons.appendChild(button1);
buttons.appendChild(button2);
buttons.appendChild(button3);
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












   











