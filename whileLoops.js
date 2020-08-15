let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

// while (pos < endPos) {
//     pos++
// }

while (!isGameOver) {
  pos++;
  if (pos == enemyPos || pos >= endPos) {
    isGameOver = !isGameOver;
  }
}
