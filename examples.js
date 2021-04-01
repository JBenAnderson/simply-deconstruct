// simple 2d array of delicious flavors!
const selection = ["strawberry", ["grape", "peanut butter"], "chocolate"];

// deconstruct 2d array using principles from ES6.
const [strawberry, [grape, peanutButter], chocolate] = selection;

//check that variables are assigned to correct placement in array.
console.log(strawberry);
console.log(grape);
console.log(peanutButter);
console.log(chocolate);

// another example using an object.
const pet = {
  name: "Spot",
  age: 4 + "yrs",
  weight: 45 + "lbs",
  ownerName: "Andrew",
};

// deconstruct object
const { name, age, weight, ownerName } = pet;

// check our work
console.log(name);
console.log(age);
console.log(weight);
console.log(ownerName);
