
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

function roPaSc () {

    function capitalize(str) {
        let first =  str.charAt(0);
        let cap = first.toUpperCase();
        let rest = str.slice(1);
        let lower = rest.toLowerCase();
        return cap + lower;
    }
    let compSelec = getComputerChoice();
    let playSelec = capitalize("PaPEr")

     if (playSelec == "Rock" && compSelec == "Scissors") {
        return `You win! ${playSelec} beats ${compSelec}!`
     }
     else if (playSelec == "Scissors" && compSelec == "Rock") {
        return `You lose! ${compSelec} beats ${playSelec}!`
     }


    else if (playSelec == "Paper" && compSelec == "Rock") {
        return `You win! ${playSelec} beats ${compSelec}!`
     }
    else if (playSelec =="Rock" && compSelec =="Paper") {
        return `You lose! ${compSelec} beats ${playSelec}!`
    }

    else if (playSelec == "Scissors" && compSelec == "Paper") {
        return `You win! ${playSelec} beats ${compSelec}!`
    }
    else if (playSelec == "Paper" && compSelec == "Scissors") {
        return `You lose! ${compSelec} beats ${playSelec}!`
    }

    else if (playSelec == compSelec) {
        return `It's a draw! You both chose ${compSelec}`
    }

    else {
        return "Please enter a valid choice"
    }
}



