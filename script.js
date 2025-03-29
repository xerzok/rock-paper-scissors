console.log("Hi")
function getComputerChoice () {
    let x = Math.random()*100;
    if (x<33){
        return "scissors"
    }
    else if (33<=x && x<66) {
        return "paper"
    }
    else {
        return "rock"
    }
}
