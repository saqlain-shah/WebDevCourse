let a=[4,5,6,9];
let b=a.find((n)=>n%2===0);
console.log(b);
//find an object in an array by one of its properties
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "apples";
  }
  
  console.log(inventory.find(isCherries));
  
  // { name: 'cherries', quantity: 5 }

//Using arrow function and destructuring
  const inven = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result = inven.find(({ name }) => name === "cherries");
  
  console.log(result); // { name: 'cherries', quantity: 5 }