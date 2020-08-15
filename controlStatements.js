// break statements

let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

while (pos < endPos) {
  if (pos % 2 == 1) {
    pos += 2;
    continue; // skips code beneath but doesn't stop code
  }
  pos++;
  if (pos == enemyPos) {
    break; // a return in a function acts as a break
  }
}
