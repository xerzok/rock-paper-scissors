console.log("Hi")
function getComputerChoice () {
    let x = Math.random()*100;
    if (x<33){
        return "rock"
    }
    else if (33<=x && x<66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}
function getHumanChoice (){let message = prompt ("Type 1 for rock, 2 for paper or 3 for scissors")
    if (message == 1){
        return "rock";
    }
    else if (message == 2){
        return "paper";
    }
    else {return "scissors";}
}
