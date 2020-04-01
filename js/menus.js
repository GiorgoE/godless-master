
console.log("Loaded menus.js");

//Define variables
var bleep = new Audio();
bleep.src = "http://test.efesop.com/godless-2/sounds/bleep.mp3";


//make it easier to select game sections
let getHeader = document.querySelector("#header");
let getArea1 = document.querySelector("#area-1");
let getArea2 = document.querySelector("#area-2");
let getFooter = document.querySelector("#footer");

//define player variable with default name and base stats
player = new Player("Henry", 0, 100, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5);

//Reload the game.js to update with new values
function reloadGame_js()
{
  var head= document.getElementsByTagName('head')[0];
  var script= document.createElement('script');
  script.src= 'js/game.js';
  head.appendChild(script);

  console.log("game.js reloaded");
}

//Initialize beep function
function playBleep() {
  //Sets the beep back to start before playing again. Fixes bug where bleep doesnt play every time it's pressed.
  bleep.currentTime = 0;
  bleep.play();
}

//Transition Effects -"Fades out".. then "fades back in." - There is no fade.
function fadeOut() {

  var getHeader = document.querySelector("#header");
  var getArea1 = document.querySelector("#area-1");
  var getArea2 = document.querySelector("#area-2");
  var getFooter = document.querySelector("#footer");

  //getHeader.style.opacity = 0;
  getArea1.style.opacity = 0;
  getArea2.style.opacity = 0;
  //getFooter.style.opacity = 0;
  console.log("Opacity reduced to 0");
  setTimeout(fadeIn,200);
}


function fadeIn() {
  var getHeader = document.querySelector("#header");
  var getArea1 = document.querySelector("#area-1");
  var getArea2 = document.querySelector("#area-2");
  var getFooter = document.querySelector("#footer");

  //getHeader.style.opacity = 1;
  getArea1.style.opacity = 1;
  getArea2.style.opacity = 1;
  //getFooter.style.opacity = 1;
  console.log("Opacity increased to 1");
}


function newGame() {
  console.log("You chose new game")
  fadeOut();
  chooseDifficulty();
}


//create MainMenu constant
let MainMenu = {

  menuSelection: function(option){
    bleep.play();
    fadeOut();
    this.setMenuChoice(option);
    //fadeIn();
  },

    setMenuChoice: function(option) {
      switch (option) {
        case "newGame":
          console.log("You chose new game")
          chooseDifficulty();
          break;

        case "loadGame":
          console.log("You chose load game")
          chooseLoadGame();
          break;

        case "settings":
            console.log("You chose settings")
            chooseSettings();
            break;
          }
    }
}



//Main Menu Choices
function chooseDifficulty() {
  bleep.play();
  console.log("Choose your difficulty");
  let getArea2 = document.querySelector("#area-2");
  //Change the HTML for the buttons from the first page to display difficulty settings
  getArea2.innerHTML = '<div id="button-area"><a onclick='+"yourName()"+' href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">EASY MODE</h3></button></a><a onclick='+"yourName()"+' href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">NORMAL MODE</h3></button></a><a onclick='+"yourName()"+' href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">HARD MODE</h3></button></a><a onclick='+"mainMenu()"+' href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">BACK</h3></button></a></div>';
}

function chooseLoadGame() {
  console.log("Choose a game to load");
}

function chooseSettings() {
  console.log("Change your settings");
}

// Return to Main Menu
function mainMenu() {
  bleep.play();
  let getHeader = document.querySelector("#header");
  let getArea1 = document.querySelector("#area-1");
  let getArea2 = document.querySelector("#area-2");
  let getFooter = document.querySelector("#footer");
  console.log("Returned to the main menu")

  getHeader.innerHTML = '<span id="title-header"><h1>GODLESS</h1></span>';

  getArea1.innerHTML = '<img id="logo-img" src="http://test.efesop.com/godless-2/images/cross2.png"></img>';

  getArea2.innerHTML = '<div id="button-area"><a onclick='+'chooseDifficulty()'+' href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">NEW GAME</h3></button></a><a onclick="MainMenu.menuSelection('+'loadGame'+')" href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">LOAD GAME</h3></button></a><a onclick="MainMenu.menuSelection('+'settings'+')" href="#" class="button-link"><button class="main-menu-button"><h3 class="button-text">SETTINGS</h3></button></a></div>';

  getFooter.innerHTML = '<h4>CREATED BY GIORGO EFESOPOULOS</h4>';
}

//What is your name?
// Add the HTML for the name screen.
function yourName() {
  bleep.play();
  console.log("What is your name?");
  let getHeader = document.querySelector("#header");
  let getArea1 = document.querySelector("#area-1");
  let getArea2 = document.querySelector("#area-2");
  let getFooter = document.querySelector("#footer");

  //narrator = "<p id='A1'>Your Character is a young man.</p><p id='A1'>What is his name? Enter in the field below.</p>";

  getHeader.innerHTML = '<span id="title-header"><h1>GODLESS</h1></span>';

  getArea1.innerHTML = '<div id="narrator">'+ narrator[0] +'</div>';

  getArea2.innerHTML = '<div id="input-area"><form id="name-input"><input id="name-input-box" type="text" name="name" value="Henry" required><input type="button" class="main-menu-button button-text submit" id="submit" onclick="return nameConfirmed()" value="SUBMIT"></form></div>';

  getFooter.innerHTML = '<h4>CREATED BY GIORGO EFESOPOULOS</h4>';

  // Prevent the enter key from submitting the form and reloading the page
  document.getElementById("name-input").onkeypress=function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      alert("Press the submit button to continue");
      e.preventDefault();
    }
  }
}

function nameConfirmed() {

  //Grabs player name from HTML form and sets it to the playerName value of the Player object. .elements[0].value grabs the first piece of data from the form.
  //Player.playerName = document.getElementById("name-input").elements[0].value;
  player.playerName = document.getElementById("name-input").elements[0].value;
  console.log(player);
  console.log("Player's name is " + player.playerName);
  //reload game.js to update player name before narrator displays old one
  reloadGame_js();
  //set time out so that js has time to load before name is recalled
  setTimeout(function() {nameConfirmed2();}, 500);
  //setTimeout(nameConfirmed2(), 5000);
}

function nameConfirmed2() {

  let getHeader = document.querySelector("#header");
  let getArea1 = document.querySelector("#area-1");

  let getFooter = document.querySelector("#footer");

  getHeader.innerHTML = '<div id="spacer"></div>';

  getArea1.innerHTML = '<div id="narrator">'+ narrator[1] +'</div>';

  updateStats();

  getFooter.innerHTML = '<h4>CREATED BY GIORGO EFESOPOULOS</h4>';
}

//insert Attributes menu, colour numbers. Still need to make the + and - buttons work.
function updateStats(){
  let getArea2 = document.querySelector("#area-2");
  getArea2.innerHTML = '<div id="input-area"><form id="stats"><br><h3 class="instruction-text">YOU HAVE <span class="highlighted">'+player.attributePoints+'</span> POINTS LEFT TO SPEND</h3><ul><li class ="attribute-text"><span class="attribute-name">STRENGTH </span><span class="highlighted">'+player.strength+'</span> <input type="button" class="attribute-button" onClick="minusStrength()" id="" value="-"><input type="button" class="attribute-button" onClick="addStrength()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">ACCURACY </span><span class="highlighted">'+player.accuracy+'</span> <input type="button" class="attribute-button" onClick="minusAccuracy()" id="" value="-"><input type="button" class="attribute-button" onClick="addAccuracy()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">CHARISMA </span><span class="highlighted">'+player.charisma+'</span> <input type="button" class="attribute-button" onClick="minusCharisma()" id="" value="-"><input type="button" class="attribute-button" onClick="addCharisma()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">DEXTERITY </span><span class="highlighted">'+player.dexterity+'</span> <input type="button" class="attribute-button" onClick="minusDexterity()" id="" value="-"><input type="button" class="attribute-button" onClick="addDexterity()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">MELEE </span><span class="highlighted">'+player.melee+'</span> <input type="button" class="attribute-button" onClick="minusMelee()" id="" value="-"><input type="button" class="attribute-button" onClick="addMelee()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">RANGED </span><span class="highlighted">'+player.ranged+'</span> <input type="button" class="attribute-button" onClick="minusRanged()" id="" value="-"><input type="button" class="attribute-button" onClick="addRanged()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">EVASION </span><span class="highlighted">'+player.evasion+'</span> <input type="button" class="attribute-button" onClick="minusEvasion()" id="" value="-"><input type="button" class="attribute-button" onClick="addEvasion()" id="" value="+"></li><li class ="attribute-text"><span class="attribute-name">LUCK </span><span class="highlighted">'+player.luck+'</span> <input type="button" class="attribute-button" onClick="minusLuck()" id="" value="-"><input type="button" class="attribute-button" onClick="addLuck()" id="" value="+"></li></ul><input type="button" class="main-menu-button button-text submit" id="start" onclick="return startGame()" value="START"></form></div>';
  console.log("Updated Stats");
}
