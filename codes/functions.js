// Function to print trainees' names
function printTrainees(names) {
  console.log("Trainees: ");
 // for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
 // }
 names.forEach(name => {
  console.log(name);
 }
);
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
  if(names.includes(name)){
    return console.log(name + "name is already exist");
  }

  names.unshift(name);
  return console.log(name + " added to the trainees list.");
 
}

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
  
];


isTrainee("johar", traineesList);
addTrainee("johar", traineesList);
printTrainees(traineesList);



  
 


