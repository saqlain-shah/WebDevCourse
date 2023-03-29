let trainee= {

    name:"Tehzeeb",
    qualification:"Computer Science",
    age:24,
    interest: ['Cricket','Reading','Movies']
}
console.log("\n")
console.log("\n Convert object into JSON File")
const myJSON=JSON.stringify(trainee);
console.log("\n")
console.log(myJSON)
console.log("\n Convert JSON into Object ")
const jsonParse=JSON.parse(myJSON);
console.log(jsonParse);