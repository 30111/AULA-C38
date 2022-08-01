var canvas;
var car1
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState = 0;
var car_red, car_white;
var pista;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_red = loadImage("./assets/car red.png");
  car_white = loadImage("./assets/car white.png");
  pista = loadImage("./assets/pista.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
