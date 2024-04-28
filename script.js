// let mode = ''; // Variable to store the selected mode ('cpu' or 'user')
// let user1Choice = '';
// let user2Choice = '';
// let cpuChoice = '';

// function setMode(selectedMode) {
//     mode = selectedMode;
//     document.getElementById('options').style.display = 'none'; // Hide mode selection buttons
//     document.getElementById(mode + '-options').style.display = 'block'; // Show options for selected mode
//     document.getElementById('exit-btn').style.display = 'inline-block'; // Show exit button
// }

// function play(choice, player) {
//     if (mode === 'user') {
//         if (player === 'User 1') {
//             user1Choice = choice;
//             document.getElementById('user-options').innerHTML = `<p>User 2, choose your option:</p>
//                 <button class="option" onclick="play('rock', 'User 2')">Rock</button>
//                 <button class="option" onclick="play('paper', 'User 2')">Paper</button>
//                 <button class="option" onclick="play('scissors', 'User 2')">Scissors</button>
//                 <button class="option" onclick="play('lizard', 'User 2')">Lizard</button>
//                 <button class="option" onclick="play('spock', 'User 2')">Spock</button>`;
//         } else {
//             user2Choice = choice;
//             determineWinner('User 1', user1Choice, 'User 2', user2Choice);
//         }
//     } else if (mode === 'cpu') {
//         cpuChoice = choice;
//         determineWinner('User', choice, 'CPU', getRandomChoice());
//     }
// }

// function getRandomChoice() {
//     const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
//     return choices[Math.floor(Math.random() * choices.length)];
// }

// function determineWinner(player1, choice1, player2, choice2) {
//     let result;
//     if (choice1 === choice2) {
//         result = "It's a tie!";
//     } else if (
//         (choice1 === 'rock' && (choice2 === 'scissors' || choice2 === 'lizard')) ||
//         (choice1 === 'paper' && (choice2 === 'rock' || choice2 === 'spock')) ||
//         (choice1 === 'scissors' && (choice2 === 'paper' || choice2 === 'lizard')) ||
//         (choice1 === 'lizard' && (choice2 === 'spock' || choice2 === 'paper')) ||
//         (choice1 === 'spock' && (choice2 === 'rock' || choice2 === 'scissors'))
//     ) {
//         result = `${player1} wins!`;
//     } else {
//         result = `${player2} wins!`;
//     }
//     document.getElementById('result').innerText = `${player1} chose ${choice1}. ${player2} chose ${choice2}. ${result}`;
//     document.getElementById('exit-btn').style.display = 'block'; // Show exit button
// }

// function exitGame() {
//     mode = ''; // Reset mode
//     document.getElementById('options').style.display = 'block'; // Show mode selection buttons
//     document.getElementById('user-options').style.display = 'none'; // Hide user options
//     document.getElementById('cpu-options').style.display = 'none'; // Hide CPU options
//     document.getElementById('exit-btn').style.display = 'none'; // Hide exit button
//     document.getElementById('result').innerText = ''; // Clear result
//     user1Choice = ''; // Reset user 1's choice
//     user2Choice = ''; // Reset user 2's choice
//     cpuChoice = ''; // Reset CPU's choice
// }






let mode = ''; // Variable to store the selected mode ('cpu' or 'user')
let user1Choice = '';
let user2Choice = '';
let cpuChoice = '';

function setMode(selectedMode) {
    mode = selectedMode;
    document.getElementById('options').style.display = 'none'; // Hide mode selection buttons
    document.getElementById(mode + '-options').style.display = 'block'; // Show options for selected mode
    document.getElementById('exit-btn').style.display = 'inline-block'; // Show exit button
}

function play(choice, player) {
    if (mode === 'user') {
        if (player === 'User 1') {
            user1Choice = choice;
            document.getElementById('user2-options').style.display = 'block'; // Show options for User 2
        } else {
            user2Choice = choice;
            determineWinner('User 1', user1Choice, 'User 2', user2Choice);
        }
    } else if (mode === 'cpu') {
        cpuChoice = choice;
        determineWinner('User', choice, 'CPU', getRandomChoice());
    }
}

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player1, choice1, player2, choice2) {
    let result;
    if (choice1 === choice2) {
        result = "It's a tie!";
    } else if (
        (choice1 === 'rock' && (choice2 === 'scissors' || choice2 === 'lizard')) ||
        (choice1 === 'paper' && (choice2 === 'rock' || choice2 === 'spock')) ||
        (choice1 === 'scissors' && (choice2 === 'paper' || choice2 === 'lizard')) ||
        (choice1 === 'lizard' && (choice2 === 'spock' || choice2 === 'paper')) ||
        (choice1 === 'spock' && (choice2 === 'rock' || choice2 === 'scissors'))
    ) {
        result = `${player1} wins!`;
    } else {
        result = `${player2} wins!`;
    }
    document.getElementById('result').innerText = `${player1} chose ${choice1}. ${player2} chose ${choice2}. ${result}`;
    document.getElementById('exit-btn').style.display = 'block'; // Show exit button
}

function exitGame() {
    mode = ''; // Reset mode
    document.getElementById('options').style.display = 'block'; // Show mode selection buttons
    document.getElementById('user-options').style.display = 'none'; // Hide user options
    document.getElementById('user2-options').style.display = 'none'; // Hide User 2 options
    document.getElementById('cpu-options').style.display = 'none'; // Hide CPU options
    document.getElementById('exit-btn').style.display = 'none'; // Hide exit button
    document.getElementById('result').innerText = ''; // Clear result
    user1Choice = ''; // Reset user 1's choice
    user2Choice = ''; // Reset user 2's choice
    cpuChoice = ''; // Reset CPU's choice
}
