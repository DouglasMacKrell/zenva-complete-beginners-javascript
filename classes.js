class GameCharacter {
  constructor(name, xPos, health) {
    (this.name = name), (this.xPos = xPos), (this.health = health);
  }

  move(x) {
    this.xPos += x;
  }
}

var gc1 = new GameCharacter("Doug", 0, 100);
gc1.move(5);
console.log(gc1.name);
console.log(gc1.xPos);

class HumanCharacter extends GameCharacter {
  constructor(name, xPos, health) {
    super(name, xPos, health);
    this.classification = "Human";
  }
}

var hc1 = new HumanCharacter("Steve", 2, 150)

