function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    //Math.random() vraca random float od 0 do 1(bez 1), pomnozis ga sa 3 i vraca do 2.7 max
    //Math.flor() broj koji dobije zaokruzi na manji ceo broj, dobije 2.7 zaokruzi na 2
    if(random == 0)
        return "Rock";
    else if(random == 1)
        return "Paper";
    else
        return "Scissors"
}

function getHumanChoice()
{
    let answer = prompt("Rock, Paper or Scissors?");
    if(answer == "Rock")
        return "Rock"
    else if(answer == "Paper")
        return "Paper"
    else 
        return "Scissors"
}

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "Paper" && computerChoice == "Rock")
    {
        console.log("You win, Paper beats Rock!");
        humanScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Scissors")
    {
        console.log("You lose, Scissors beats Paper!");
        computerScore++;
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper")
    {
        console.log("You lose, Paper beats Rock!");
        computerScore++;
    }
    else if(humanChoice == "Rock" && computerChoice == "Scissors")
    {
        console.log("You win, Rock beats Scissors!");
        humanScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Rock")
    {
        console.log("You lose, Rock beats Scissors!");
        computerScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper")
    {
        console.log("You win, Scissors beats Paper!");
        humanScore++;
    }
    else if(humanChoice == computerChoice)
        console.log("It's a tie!");

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
