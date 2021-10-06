var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(1000,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("lightblue");

}
