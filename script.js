function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    //Math.random() vraca random float od 0 do 1(bez 1), pomnozis ga sa 3 i vraca do 2.7 max
    //Math.flor() broj koji dobije zaokruzi na manji ceo broj, dobije 2.7 zaokruzi na 2
    if(random == 0)
        return "rock";
    else if(random == 1)
        return "paper";
    else
        return "scissors"
}

function getHumanChoice()
{
    let answer = prompt("Rock, Paper or Scissors?");
    answer = answer.toLowerCase(); //stagod unese korisnik pretvoti u lowercase da bi radio lakse poredjenje kasnije
    if(answer == "rock")
        return "rock";
    else if(answer == "paper")
        return "paper";
    else if(answer == "scissors")
        return "scissors";
    else
    {
        console.log("Invalid choice");
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice)
{
    
    if(humanChoice == "paper" && computerChoice == "rock")
    {   
        console.log("You win, paper beats rock!");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("You lose, scissors beats paper!");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("You lose, paper beats rock!");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("You win, rock beats scissors!");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lose, rock beats scissors!");
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("You win, scissors beats paper!");
        humanScore++;
    }
    else if(humanChoice == computerChoice)
        console.log("It's a tie!");

}



//playRound(humanSelection, computerSelection);

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore >= 3)
        console.log("Congratulations, you win!");
    else
        console.log("You lose, better luck next time");
}
