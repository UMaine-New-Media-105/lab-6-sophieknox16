[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/P4o6z4mW)
For this assigmnet I created two sprites with their own functions. where one of them would move oto the other and the color of it would change.
I created a mouse and cheese. 
Outside of all the functions I defined spriteX, spriteY and cheeseX, cheeseY. And used them in setup to choose where the sprites would show up on my canvas. 
I set parameters in both the mouse and the cheese to make them easier to work with. For the cheese I used mroe parameters for color of the cheese and the color of the cheese cutouts. This is seen here.
```Javascript
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
```
Using the function keyPressed I defined actions for the arrow keys and associated them with my sprite which made the sprite move when they were clicked. 
``` Javascriot
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
```
The next steps are where I ran into trouble. I tried to use distance to create collision and a change in the color of the mouse. Here is the code I wrote for this attempt. 
```Javascript
  let x1 = spriteX + 10;
  let y1 = spriteY + 50;
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
```
My issue was that mouse and the cheese, when they collided, were not showing that htey were colliding because the cheese would not change color. I changed the values of spriteX, spriteY, cheeseX, and cheeseY multiple times but nithing would work. I also changed what d was set equal to and it would only change colors when it was at 15 no higher or lower. 
