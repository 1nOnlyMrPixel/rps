function getComputerChoice()
{
let cmove=Math.floor(Math.random()*3)+1;
if(cmove===1)
    return "Rock";
if(cmove===2)
    return "Paper";
if(cmove===3)
    return "Scissor"
}
//console.log(getComputerChoice());
function gameRound(playerSelection,computerSelection)
{
    const ps=playerSelection.toUpperCase();
    const cs=computerSelection.toUpperCase();
console.log(`You Selected:${playerSelection}\nComputer Selected:${computerSelection}`);

    if(ps===cs)
    return ("t");

        //v2


    if(ps==="ROCK" && cs==="SCISSOR")
        return ("w");
    if(ps==="PAPER" && cs==="ROCK")
        return ("w");
    if(ps==="SCISSOR" && cs==="PAPER")
        return ("w");



    //ROCK PAPER PC
    if(ps==="ROCK" && cs==="PAPER")
      return("l");
    if(ps==="PAPER" && cs==="SCISSOR")
        return("l");
    if(ps==="SCISSOR" && cs==="ROCK")
        return("l");

    // ROCK PAPER PLAYER
    // if(ps==="ROCK" && cs==="SCISSOR")
    //     return (`You Won ! ${ps} beats ${cs}`);
    // if(ps==="PAPER" && cs==="ROCK")
    //     return (`You Won ! ${ps} beats ${cs}`);
    // if(ps==="SCISSOR" && cs==="PAPER")
    //     return (`You Won ! ${ps} beats ${cs}`);



    // ROCK PAPER PC
    // if(ps==="ROCK" && cs==="PAPER")
    //   return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    // if(ps==="PAPER" && cs==="SCISSOR")
    //     return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    // if(ps==="SCISSOR" && cs==="ROCK")
    //     return(`You Lose! ${computerSelection} beats ${playerSelection}`);




    
}   
function playGame()
{   
    let us,pc,t;
    us=pc=t=0;
    let r=" ";
    
    
    console.log("Round #1");

    r=gameRound(prompt("Enter your choice !!"),getComputerChoice());
    (r==="w")?us+=1:((r==="l")?pc+=1:t+=1);
    console.log(r);
    console.log("Round #2");
    
    r=gameRound(prompt("Enter your choice !!"),getComputerChoice());
    (r==="w")?us+=1:((r==="l")?pc+=1:t+=1);
    console.log(r);
    
    
    console.log("Round #3");
    
    r=gameRound(prompt("Enter your choice !!"),getComputerChoice());
    (r==="w")?us+=1:((r==="l")?pc+=1:t+=1);
    console.log(r);
    
    
    console.log("Round #4");
    
    r=gameRound(prompt("Enter your choice !!"),getComputerChoice());
    (r==="w")?us+=1:((r==="l")?pc+=1:t+=1);
    console.log(r);
    
    
    
    console.log("Round #5");
    
    r=gameRound(prompt("Enter your choice !!"),getComputerChoice());
    (r==="w")?us+=1:((r==="l")?pc+=1:t+=1);
    console.log(r);


    if(us>pc)
    {
    console.log(`You are the Winner \(:\nYour Score=${us}\nComputer\'s Score=${pc}`);
    }
    else if(pc>us){
    console.log(`You are the Loser \): \nComputer\'s Score=${pc}\nYour Score=${us}`);
    }
    else if(pc===us){
         console.log(`Its a tie \): \nComputer\'s Score=${pc}\nYour Score=${us}`);
    }
    else
        console.log(`Some Values improper cant determine`);
}
playGame();





