var items = ["Axe", "Shirt", "Knife"];
var finalString = "In my inventory, I have ";

for (let i = 0; i < items.length; i++) {
  var itemName = items[i];
  finalString += itemName + " ";
}

items.forEach((element) => {
  finalString += element + " ";
});

var name = "Doug";

for (let i = 0; i < 5; i++) {
  console.log(name);
}

var finalList = "I have to buy ";
var groceryList = ["Butter", "Milk", "Eggs", "Cheese"];

groceryList.forEach((element) => {
  if (element != "Milk") {
    finalList += element + " ";
  } else {
    continue;
  }
});
