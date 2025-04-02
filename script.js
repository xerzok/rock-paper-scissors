console.log("Hi");
function getComputerChoice() {
  let x = Math.random() * 100;
  if (x < 33) {
    return "rock";
  } else if (33 <= x && x < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let message = prompt("Type  rock, paper or scissors");
  if (message == "rock") {
    return "rock";
  } else if (message == "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame (){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "rock") {
        console.log("draw, you both picked rock");
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if (computerChoice=="paper" && humanChoice=="paper"){
        console.log("draw, you both picked paper");
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="scissors" && humanChoice=="scissors"){
        console.log("draw, you both picked scissors");
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="rock" && humanChoice=="scissors"){
        console.log("You lose, rock beats scissors");
        computerScore++
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="paper" && humanChoice=="rock"){
        console.log( "You lose, paper beats rock");
        computerScore++
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="scissors" && humanChoice=="paper"){
        console.log( "You lose, scissors beats paper");
        computerScore++
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="paper" && humanChoice=="scissors"){
        console.log( "You Win, scissors beats paper");
        humanScore++
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="rock" && humanChoice=="paper"){
        console.log( "You Win, paper beats rock");
        humanScore++
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    else if  (computerChoice=="scissors" && humanChoice=="rock"){
        console.log( "You Win, rock beats scissors");
        humanScore++
        console.log ("CPU score is", computerScore)
        console.log ("Your score is", humanScore)
    }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

}
