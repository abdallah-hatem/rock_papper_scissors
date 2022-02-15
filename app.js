function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id
    let botChoice = randomChoice();

    let result = decideWinner(humanChoice, botChoice);

    let messages = message(result)

    let colors = color(messages)


    displayFrontend(humanChoice, botChoice, messages, colors);



}

function randomChoice() {
    choices = ['rock', 'papper', 'scissors']
    randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}
function decideWinner(humanChoice, botChoice) {

    var rpsDatabase = {
        'rock': { 'rock': 0.5, 'papper': 0, 'scissors': 1 },
        'papper': { 'rock': 1, 'papper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'papper': 1, 'scissors': 0.5 },
    }

    var yourScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, botScore];

}


function message([yourScore, botScore]) {
    if (yourScore === 0 && botScore === 1) {
        return ("You Lost!");
    }
    else if (yourScore === 1 && botScore === 0) {
        return ("You Won!");
    }
    else {
        return ("Draw!");
    }
}


function color(result) {
    if (result === 'You Won!') {
        return 'green';
    }
    if (result === 'You Lost!') {
        return 'red';
    }
    else {
        return 'yellow'
    }
}


function displayFrontend(yourChoiceImg, botChoiceImg, message, color) {

    document.getElementById('rock').remove();
    document.getElementById('papper').remove();
    document.getElementById('scissors').remove();

    const rps = document.getElementById('rps')

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = `<img src="img/${yourChoiceImg}.png" alt="" id="${yourChoiceImg}" onclick="rpsGame(this)" style="box-shadow: 1px 3px 19px 16px rgba(0,10,255,0.75);
-webkit-box-shadow: 1px 3px 19px 16px rgba(0,10,255,0.75);
-moz-box-shadow: 1px 3px 19px 16px rgba(0,10,255,0.75);">`
    botDiv.innerHTML = `<img src="img/${botChoiceImg}.png" alt="" id="${botChoiceImg}" onclick="rpsGame(this)" style="box-shadow: 1px 3px 19px 16px rgba(255,0,0,0.75);
-webkit-box-shadow: 1px 3px 19px 16px rgba(255,0,0,0.75);
-moz-box-shadow: 1px 3px 19px 16px rgba(255,0,0,0.75);">`
    messageDiv.innerHTML = `<p style="font-size: 50px; color:${color};">${message}</p>`


    rps.appendChild(humanDiv)
    rps.appendChild(messageDiv)
    rps.appendChild(botDiv)



}

