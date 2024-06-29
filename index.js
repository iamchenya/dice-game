window.addEventListener('load', main);

//add function to button
function main() {
    document.querySelector("button").addEventListener('click', function() {
     roll();   
    });
}

//add action  to button
function roll() {

//first dice
var randomNumber = Math.floor(Math.random() * 6) + 1; //random 1-6
var randomDiceImage = "dice" + randomNumber + ".png"; //dice.png 1-6
var randomImageSource = "images/" + randomDiceImage; //change img src
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

//second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

//display winner
var player1 = document.querySelectorAll("h2")[0];
var player2 = document.querySelectorAll("h2")[1];
    
if (randomNumber > randomNumber2) {
    player1.innerHTML = 'PLAYER 1 WINS! <img class="emoji" src="./images/win.png" alt="win Image">';
    player2.innerHTML = 'PLAYER 2 LOSES <img class="emoji" src="./images/cry.png" alt="win Image">';
} else if (randomNumber < randomNumber2) {
    player1.innerHTML = 'PLAYER 1 LOSES <img class="emoji" src="./images/cry.png" alt="win Image">';
    player2.innerHTML = 'PLAYER 2 WINS! <img class="emoji" src="./images/win.png" alt="win Image">';
} else {
    player1.innerHTML = 'DRAWS!';
    player2.innerHTML = 'TRY AGAIN';
}

}

    