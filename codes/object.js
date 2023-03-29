let trainee=
    {
       name:"Shehbaz Ali",
       qualification:"BS Computer Science",
       age:24,
       Interest: ['Programming','Reading','Treking','Gaming']
    }
console.log("\n convert obect into JSON using stringify method ");

    //convert obect into JSON using stringify method
    const myJSON = JSON.stringify(trainee);
console.log(myJSON);
console.log("\n convert JSON into object");
  //convert JSON into object 
  const jsonParse = JSON.parse(myJSON);
  console.log(jsonParse);

function Person(first, last, age, height) {
    this.firstName = "Shehbaz";
    this.lastName= "Ali";
    this.age = 24;
    this.height = 5.6;
  }
  const person1=new Person();
  console.log(person1);
  