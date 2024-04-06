//kisses from brazil, sorry for the shity code <3 <3

//Computer picks between(paper, rock and scissor)

function GetComputerAnswer(){
    let ComputerAnswer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (ComputerAnswer == 1){
        return ComputerAnswer  = "rock"
    }
    if(ComputerAnswer == 2){
        return ComputerAnswer = "paper"
    }
    else {
        return ComputerAnswer = "scissor"
    }
}

//Players answer

const PlayerPlay = "rock"
let ComputerPlay = GetComputerAnswer()

//plays the game and compare both machine answer and player answer
function PlayGame(PlayerPlay,ComputerPlay){
     for (let i = 0; i <= 5; i++){
        if (PlayerPlay == "paper" && ComputerPlay == "scissor"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
        }
        if (PlayerPlay == "scissor" && ComputerPlay == "rock"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
        }
        if (PlayerPlay == "rock" && ComputerPlay == "paper"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
        }
        if (PlayerPlay == "paper" && ComputerPlay == "scissor"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
        }
        if (PlayerPlay == "scissor" && ComputerPlay == "paper"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} Human victory, Humans reing supreme`)
        }
        if (PlayerPlay == "rock" && ComputerPlay == "scissor"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} Human victory, Humans reing supreme`)
        }
        if (PlayerPlay == "paper" && ComputerPlay == "rock"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} Human victory, Humans reing supreme`)
        }
        else{
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} its a tie`)
        }
    }
}

//the result of the match appears on the console

console.log(PlayGame(PlayerPlay,ComputerPlay))