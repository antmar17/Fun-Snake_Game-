let s;
function setup() {
  createCanvas(800, 800);
  s = new Snake(0, 0);
}
function draw() {
  background(0, 255, 0);
  s.update();
  s.show();
}


//changes direction of snake
function keyPressed() {
  //up
  if (key == 'w') {
    s.xdir = 0;
    s.ydir = -1;

  }
  //right
  else if (key == 'd') {
    s.xdir = 1;
    s.ydir = 0;

  }
  //left
  else if (key == 'a') {
    s.xdir = -1;
    s.ydir = 0;

  }
  //down
  else if (key == 's') {
    s.xdir = 0;
    s.ydir = 1;
  }

}
class Snake {

  constructor() {

    //Keep track of all vectors in snake (have them reference vector in front of them)
    this.body = [];
    this.body[0] = createVector(0, 0);

    //keep track of the direction the snake is moving in
    this.xdir = 1;
    this.ydir = 0;

  }

  update() {
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;



  }

  show() {
    rect(this.body[0].x, this.body[0].y, 20, 20)

  }




}
