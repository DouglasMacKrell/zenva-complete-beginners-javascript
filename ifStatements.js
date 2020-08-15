var keyPressed = "l";
var xPos = 0;
let endPos = 5;
let startPos = -5;

if (keyPressed == "r") {
  if (xPos <= endPos) {
    console.log("move to the right");
    xPos += 1;
  }
} else if (keyPressed == "l" && xPos > startPos) {
  console.log("move to the left");
  xPos -= 1;
} else {
  console.log("back to start");
  xPos = startPos;
}
