let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

// while (pos < endPos) {
//     pos++
// }

while (!isGameOver) {
  if (pos < enemyPos || pos < endPos) {
    pos++;
  } else {
    isGameOver = !isGameOver;
  }
}
