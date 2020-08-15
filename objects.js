var gameCharacter = {
  name: "Doug",
  class: "Human",
  health: 100,
  get title() {
    var result = this.name + " the " + this.class;
    return result;
  },
  set maxHealth(h) {
    this.health = h;
  },
  xPos: 0,
  items: ["Knife", "Food"],
  move: (x) => {
    this.xPos += x;
  },
};

var name = gameCharacter.name;
// name = gameCharacter["name"]

gameCharacter.maxHealth = 150;

gameCharacter.items = ["Axe", "Bread"];
gameCharacter.move(5);

gameCharacter.yPos = 0;

gameCharacter.move = (x, y) => {
  this.xPos += x;
  this.yPos += y;
};

// Getters and Setters
// Object Functions

const gameChar = (name, xPos, health) => {
  name,
    xPos,
    health,
    (this.move = (x) => {
      this.xPos += x;
    }),
    (this.class = "Human");
};

var gc1 = new gameChar("Doug", 0, 100);
var gc2 = new gameChar("Lucy", 5, 45);

// Object Prototypes

gameChar.prototype.class = "Human";
gc1.class = "Dwarf";
gc2.class; // Human

var heal = (amount) => {
    this.health += amount
}

gameChar.prototype.heal = heal