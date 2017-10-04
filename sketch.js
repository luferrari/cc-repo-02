  var a = 2;
  var b = 3;
  var r = 200;

function setup() {
  createCanvas(500,500);
  // background(13,17,32);
  angleMode(DEGREES);
  frameRate(30);

  setGradient(0, 0, width, height, color(232,65,149), color(65,46,140), 2);

    function setGradient(x, y, w, h, c1, c2, axis) {
      noFill();
      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var b = lerpColor(c1, c2, inter);
        stroke(b);
        line(x, i, x+w, i);
      }
    } // https://p5js.org/examples/color-linear-gradient.html

  noStroke();
  fill(255,255,255,15);
  ellipse(width/2,height/2,2*r,2*r);
  noFill();
}

function draw() {
  translate(width/2,height/2);
  rotate(90);

  strokeWeight(2);
  stroke(lerpColor(color(13,17,32),color(255,255,255),frameCount/(360/b)));
  line(r*cos(frameCount*b),r*sin(frameCount*b),r,0);

  if (frameCount == 360/b) {
    noLoop();
  }
}

// PALETTE
// white      color(255,255,255)
// pink       color(232,65,149)
// purple     color(65,46,140)
// black      color(13,17,32)