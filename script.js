let choices = ['R', 'P', 'S'];
let winAlert = 'You win!';
let lostAlert = 'You lost!';
let drawAlert = 'Draw!';
let playAgain = true;

let stats = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

// R and P - P win
// R and S - R win
// P and S - S win
// R,S,P and R,S,P - ties

while (playAgain) { // if play again equal to true than continue playing. Otherwise stop playing.
    let userChoice = prompt('Enter R, P, or S to signify of rock, paper, or scissors');
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Draw
    if (userChoice === computerChoice) {
        stats.draws++; // Increase draws count by 1
        console.log('Draw');
        alert(drawAlert);
    }

    // User wins
    if (userChoice === 'R' && computerChoice === 'P') {
        stats.wins++; // Increase wins count by 1
        console.log('User R > Computer P');
        alert(winAlert);
    }

    if (userChoice === 'R' && computerChoice === 'S') {
        stats.wins++; // Increase wins count by 1
        console.log('User R > Computer S');
        alert(winAlert);
    }

    if (userChoice === 'S' && computerChoice === 'P') {
        stats.wins++; // Increase wins count by 1
        console.log('User S > Computer P');
        alert(winAlert);
    }

    // Computer wins
    if (userChoice === 'P' && computerChoice === 'R') {
        stats.losses++; // Increase losses count by 1
        console.log('User P < Computer R');
        alert(lostAlert);
    }

    if (userChoice === 'S' && computerChoice === 'R') {
        stats.losses++; // Increase losses count by 1
        console.log('User S < Computer R');
        alert(lostAlert);
    }

    if (userChoice === 'P' && computerChoice === 'S') {
        stats.losses++; // Increase losses count by 1
        console.log('User P < Computer S');
        alert(lostAlert);
    }

    stats.games++; // Increase games count by 1

    playAgain = confirm('Do you want to play again?');
}

alert('Final stats:\n games: '
    + stats.games
    + '\n wins: '
    + stats.wins
    + '\n losses: '
    + stats.losses
    + '\n draws: '
    + stats.draws
); // The \n character is used to find a newline character (set new line)
