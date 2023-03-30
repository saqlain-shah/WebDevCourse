// Example usage
let traineesList = [
  "aliya",
  "malika",
  "mehmooda",
  "mudeera",
  "shahina",
  "fatima",
  "qamar",
  "akbar",
  "zakir",
  "shehbaz",
  "javed",
  "tehzeeb",
];

// Function to print trainees' names
function printTrainees(names) {
  console.log("Trainees: ");
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// Function to check if a name is in the trainees list
function isTrainee(name, names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === name) {
      return console.log(name + " is already in the trainees list.");
    }
  }
  return console.log(name + " is not in the trainees list.");
}

// Function to add a new trainee
function addTrainee(name, names) {
  names.push(name);
  console.log(name + " added to the trainees list.");
}

let naam = "Abbas";
printTrainees(traineesList);
isTrainee("Shehbaz", traineesList);
addTrainee("Ali", traineesList);
