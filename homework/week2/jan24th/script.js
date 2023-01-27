// Week 2 - January 24th

// Shopping list exercise

const shoppingList = ["Coffee", "Milk", "Bread", "Cheese", "Butter"];

console.log("List of the ShoppingList = " + shoppingList);
console.log("Length of the ShoppingList = " + shoppingList.length); // the length of the array

// Budget exercise

const budget = [
  {
    name: "Mac Keyboard",
    cost: 80,
    isDiscretionary: false,
  },
  {
    name: "Mouse",
    cost: 100,
    isDiscretionary: false,
  },
  {
    name: "Phone",
    cost: 1000,
    isDiscretionary: true,
  },
  {
    name: "Bike",
    cost: 180,
    isDiscretionary: false,
  },
  {
    name: "Coffe Maker",
    cost: 120,
    isDiscretionary: false,
  },
];

// Cost of the 3rd item
console.log("Cost of the 3rd item = " + budget[2].cost);

// The name of the 1st item
console.log("The name of the 1st item = " + budget[0].name);

// Whether the 5th item is a discretionary purchase
console.log(
  "Whether the 5th item is a discretionary purchase " +
    budget[4].discretionaryPurchase
);

// The lenght of the array
console.log("The lenght of the array = " + budget.length);

// Friends exercise.

const friends = [
  {
    name: {
      firstName: "Carolina",
      lastName: "Trejos",
    },
    age: 24,
    isOver35YearsOld: true,
    hobbies: ["Video Games", "Restaurant", "Soccer"],
  },
  {
    name: {
      firstName: "Jose",
      lastName: "Osorio",
    },
    age: 28,
    isOver35YearsOld: true,
    hobbies: ["Soccer", "League of Legends", "Running"],
  },
  {
    name: {
      firstName: "Felipe",
      lastName: "Garcia",
    },
    age: 23,
    isOver35YearsOld: false,
    hobbies: ["Video Games", "Drawing", "Cinema"],
  },
];

// The age of the 1st friend
console.log("The age of the 1st friend = " + friends[0].age);
// The hobbies of the last friend
console.log("The hobbies of the last friend = " + friends[2].hobbies);
// The first name of the 2nd friend
console.log("The first name of the 2nd friend = " + friends[1].name);

// Rubik's Cube exercise.

const rubikCube = {
  colors: ["Red", "White", "Yellow", "Green", "Blue", "Orange"],
  isItRotates: true,
  nameOfTheGame: "Puzzle",
  record: 3.47,
  worldRecordAverage: 4.86,
};
// Strings
console.log(rubikCube.nameOfTheGame);
// Array
console.log(rubikCube.colors);

// Top 5 muscial artists and describes each of them exercise.

const topMusicArtists = [
  {
    name: "Martin Garrix",
    genre: "Dance/Electronic",
    grossSales: 14000000,
    hasWonAGrammy: true,
    yearBorn: 1996,
    charities: "Dutch Charity",
  },
  {
    name: "Avici",
    genre: "Dance/Electronic",
    grossSales: 850000000,
    hasWonAGrammy: true,
    yearBorn: 1989,
    charities: "Feeding America",
  },
  {
    name: "Calvin Harris",
    genre: "Dance/Electronic",
    grossSales: 300000000,
    hasWonAGrammy: true,
    yearBorn: 1984,
    charities: false,
  },
];
