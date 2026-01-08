function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    //Math.random() vraca random float od 0 do 1(bez 1), pomnozis ga sa 3 i vraca do 2.7 max
    //Math.flor() broj koji dobije zaokruzi na manji ceo broj, dobije 2.7 zaokruzi na 2
    if(random == 0)
        return "Rock!";
    else if(random == 1)
        return "Paper!";
    else
        return "Scissors!"
}