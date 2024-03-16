const choices = ["rock", "paper", "scissors"];

function computerChoice(){
    const choice = Math.floor(Math.random() * choices.length);  
    return choices[choice];
}

function userChoice(){
    const input = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (! (choices.includes(input)) ) {
        console.log("Please reply with a proper choice:");
        userChoice();
    }
    else {
        return input;
    }
}

function main() {
    var computer_choice = computerChoice();
    var user_choice = userChoice();

    if (computer_choice == user_choice) {
        console.log("Draw")
    }
    else if (computer_choice == "rock" && user_choice == "paper") {
        console.log("You Win!")
    }
    else if (computer_choice == "paper" && user_choice == "scissors") {
        console.log("You Win!")
    }
    else if (computer_choice == "scissors" && user_choice == "rock") {
        console.log("You Win!")
    }
    else {
        console.log("You Lost!")
    }

    const input = prompt("Would you like to play again").toLowerCase()
    if (input == "yes") {
        main()
    }
    else {
        console.log("Have a good day")
    }
}

main()