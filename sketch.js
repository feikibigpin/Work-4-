function trans() {
  translate(width / 2, height / 2);
}

var rot = 0;
var s = second();
var m = minute();
var h = hour();

/*function fil(c) {
  fill(color(c))
}
*/
/*function flow() {
  stroke(color("#cc00ff"));
  strokeWeight(5);
  translate(width / 2, height / 2);
  for (var i = 0; i < 10; i++) {
    line(0, 0, 0, 127);
    rotate(PI / 5);
  }
}
var colorList = ["#ffbf00", "#f4b2b2", "#f4f1b2", "#dbf4b2", "#b2f4b9", "#b2f4e9", "#b2c1f4", ""]
*/
function setup() {
  createCanvas(800, 600);
  background(100);
  angleMode(DEGREES);
   // rotate(-90)


}

function draw() {
  fill(100);
  noStroke
  quad(0, 0, 70,0 , 70, 70, 0, 70);
var s = second();
var m = minute();
var h = hour();
  

text(h + ":" + m + ":" + s, 5, 50);
  trans();
  push();
  minseg(minute(),'#ea0043','#0fefca',300,300);
  minseg(second(),'#700020','#500060',250,250);
  //minseg(hour(),'#ff7f00','#cece00',30,30);
    pop();
  hora();

}

function minseg(rot,col1,col2,posx,posy){
  
  noStroke();
  rotate((rot * 6)-90);
  fill(lerpColor(color(col1), color(col2), (frameCount % 120) / 120));
  arc(0, 0, posx,posy, 0, 6);
}

function hora(){
 strokeWeight(2);
 if( h > 12){
  horaql = ( h - 12);
  rotate(horaql * 30);
  stroke(lerpColor(color('#ff7f00'), color('#cece00'), (frameCount % 120) / 120));
  line(0, 0, 30, 30);
 }
 else{
   rotate( h * 30);
  stroke(lerpColor(color('#ff7f00'), color('#cece00'), (frameCount % 120) / 120));
  line(0, 0, 30, 30);
 }
}

