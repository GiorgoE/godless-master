
console.log("Loaded game.js");


//Variables

/*
let narrator;

function Narrator(content) {
  this.content = content;
}
*/


var narrator = [
  '<p id="A1">Your character is a young man.</p><p id="A1">What is his name? Enter in the field below.</p>',
  '<p id="A1">OK, so your name is '+player.playerName+'.</p><p id="A1">What would you say are your strengths and weaknesses?</p>'
]


//Save, Load

function saveLoad() {
  var save = document.getElementById("save-game");
  button.addEventListener("click", saveGame, false);
}

function saveGame() {

}
