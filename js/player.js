//Confirm player.js is Loaded
console.log("Loaded player.js");


//Variables
let player;

function Player(playerName, attributePoints, maxHP, strength, accuracy, charisma, dexterity, melee, ranged, evasion, luck, critical, speed) {
  this.playerName = playerName;
  this.attributePoints = attributePoints;
  this.maxHP = maxHP;
  this.strength = strength;
  this.accuracy = accuracy;
  this.charisma = charisma;
  this.dexterity = dexterity;
  this.melee = melee;
  this.ranged = ranged;
  this.evasion = evasion;
  this.luck = luck;
  this.critical = critical;
  this.speed = speed;
}


function minusAP(){
  playBleep();
  player.attributePoints = player.attributePoints - 1;
  console.log("-1 from Attribute Points")
  updateStats();
}

function addAP(){
  playBleep();
  player.attributePoints = player.attributePoints + 1;
  console.log("+1 to Attribute Points")
  updateStats();
}

function addStrength(){
  if (player.attributePoints > 0 && player.strength < 20) {
  playBleep();
  player.strength = player.strength + 1;
  minusAP();
  console.log("+1 to strength")
}
}

function minusStrength(){
  if (player.strength > 1) {
  playBleep();
  player.strength = player.strength - 1;
  addAP();
  console.log("-1 from strength")
}
}

function addAccuracy(){
  if (player.attributePoints > 0 && player.accuracy < 20) {
  playBleep();
  player.accuracy = player.accuracy + 1;
  minusAP();
  console.log("+1 to accuracy")
}
}

function minusAccuracy(){
  if (player.accuracy > 1) {
  playBleep();
  player.accuracy = player.accuracy - 1;
  addAP();
  console.log("-1 from accuracy")
}
}

function addCharisma(){
  if (player.attributePoints > 0 && player.charisma < 20) {
  playBleep();
  player.charisma = player.charisma + 1;
  minusAP();
  console.log("+1 to charisma")
}
}

function minusCharisma(){
  if (player.charisma > 1) {
  playBleep();
  player.charisma = player.charisma - 1;
  addAP();
  console.log("-1 from charisma")
}
}

function addDexterity(){
  if (player.attributePoints > 0 && player.dexterity < 20) {
  playBleep();
  player.dexterity = player.dexterity + 1;
  minusAP();
  console.log("+1 to dexterity")
}
}

function minusDexterity(){
  if (player.dexterity > 1) {
  playBleep();
  player.dexterity = player.dexterity - 1;
  addAP();
  console.log("-1 from dexterity")
}
}

function addMelee(){
  if (player.attributePoints > 0 && player.melee < 20) {
  playBleep();
  player.melee = player.melee + 1;
  minusAP();
  console.log("+1 to melee")
}
}

function minusMelee(){
  if (player.melee > 1) {
  playBleep();
  player.melee = player.melee - 1;
  addAP();
  console.log("-1 from melee")
}
}

function addRanged(){
  if (player.attributePoints > 0 && player.ranged < 20) {
  playBleep();
  player.ranged = player.ranged + 1;
  minusAP();
  console.log("+1 to ranged")
}
}

function minusRanged(){
  if (player.ranged > 1) {
  playBleep();
  player.ranged = player.ranged - 1;
  addAP();
  console.log("-1 from ranged")
}
}

function addEvasion(){
  if (player.attributePoints > 0 && player.evasion < 20) {
  playBleep();
  player.evasion = player.evasion + 1;
  minusAP();
  console.log("+1 to evasion")
}
}

function minusEvasion(){
  if (player.evasion > 1) {
  playBleep();
  player.evasion = player.evasion - 1;
  addAP();
  console.log("-1 from evasion")
}
}

function addLuck(){
  if (player.attributePoints > 0 && player.luck < 20) {
  playBleep();
  player.luck = player.luck + 1;
  minusAP();
  console.log("+1 to luck")
}
}

function minusLuck(){
  if (player.luck > 1) {
  playBleep();
  player.luck = player.luck - 1;
  addAP();
  console.log("-1 from luck")
}
}
