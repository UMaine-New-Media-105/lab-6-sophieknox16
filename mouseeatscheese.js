let spriteX, spriteY;
let cheeseX, cheeseY;

function setup() {
  createCanvas(400, 400);
  spriteX = 50;
  spriteY = 80;
  cheeseX = 100;
  cheeseY = 250;
}

function draw() {
  background(220);

  let x1 = spriteX+10;
  let y1 = spriteY+50;
  let x2 = cheeseX - 30;
  let y2 = cheeseY - 40;

  let d = dist(x1, y1, x2, y2);

  drawSprite(spriteX, spriteY, 1);
  drawCheese(cheeseX, cheeseY, 1.5, "gold", 220);

  if (d <= 15) {
    drawCheese(cheeseX, cheeseY, 1.5, "olivedrab", 220);
  }
  console.log("The d is : " + d);
}

function drawSprite(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("burlywood");
  ellipse(20, 30, 15);
  ellipse(0, 30, 15);
  ellipse(10, 50, 40);
  fill("mistyrose");
  ellipse(0, 30, 10);
  ellipse(20, 30, 10);
  fill("black");
  ellipse(10, 55, 5);
  fill("black");
  stroke("white");
  strokeWeight(2);
  ellipse(5, 40, 8); //left pupil
  ellipse(15, 40, 8); //right pupil
  pop();
}

function drawCheese(x, y, size, color, cutout) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill(color);
  triangle(30, 40, 30, 20, 60, 40);
  fill(cutout);
  ellipse(30, 35, 8);
  ellipse(40, 40, 8);
  ellipse(50, 32, 7);
  pop();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    spriteY -= 5;
  }
  if (keyCode == DOWN_ARROW) {
    spriteY += 5;
  }
  if (keyCode == LEFT_ARROW) {
    spriteX -= 5;
  }
  if (keyCode == RIGHT_ARROW) {
    spriteX += 5;
  }
}
