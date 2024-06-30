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
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice.png 1-6
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
    
if (randomNumber1 > randomNumber2) {
    player1.innerHTML = 'PLAYER 1 <span style="color: red;">WINS!</span>';
    player2.innerHTML = "PLAYER 2 LOSES";
} else if (randomNumber1 < randomNumber2) {
    player1.innerHTML = "PLAYER 1 LOSES";
    player2.innerHTML = 'PLAYER 2 <span style="color: red;">WINS!</span>';
} else if (randomNumber1 === randomNumber2) {
    player1.innerHTML = '<span style="color: red;">DRAWS!</span>';
    player2.innerHTML = "TRY AGAIN";
}


}
    
