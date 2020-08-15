const maxHealth = 100;
var currentHealth = 50;

const heal = (healAmount = 10) => {
  let newHealth = currentHealth + healAmount;
  currentHealth = newHealth > 100 ? maxHealth : newHealth;
};

const percentHealth = () => {
  return (currentHealth / maxHealth) * 100;
};

heal(); // currentHealth = 60 | result = 60%
var result = percentHealth(); // result = 60%
heal(50); // currentHealth = 100
result = percentHealth(); // result = 100%
