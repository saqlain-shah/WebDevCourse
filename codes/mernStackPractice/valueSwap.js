function showMessage() {
    console.log( 'Hello everyone!' );
  }
  showMessage();
  let name="ali";
  let number=2;
  if(name===number)
  {
    console.log("value are identical ")
  }
else {
 console.log("value are not identical ")
}
 let x=4;
  let y=2;
  if(x!=y)
  {
    console.log("Numbers are not equal ")
  }
else {
 console.log("Numbers are not equal  ")
}
let num1=2;
let num2= 4;
if(num1!==num2){
  console.log(true)
}
else{
  console.log(false);
}
let val1=3;
let val2=5;
let output=val1+val2;
console.log(`The sum of ${val1} and ${val2} is` +output);
let f = 5;
let h = 2;
let k = f % h;
console.log("Modulus of f and h is "+k);
let q = 5;
let w = 2;
let r = f / h;
console.log("the Division of q and w is "+r);
let uu = 5;
uu++;
let o = uu;
console.log(o);

let tt = 5;
tt--;
let p = tt;
console.log(p);
let aa = 5;
let yy = aa ** 2;
console.log(yy);

// let pre=(1 + ( (2 ** 3) * 9 / 5) ) >> 6
// console.log(pre);
// let aaa=2**4;
// console.log(aaa);
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

// Expected output: 5
const bb = 4 ** 3 ** 2;
console.log(bb);
// program to generate a multiplication table

// take input from the user
console.log("Table of Three")
let j=3;
let n;
    for (let i=1; i<=8; i++)
    {
      n=j*i;
      console.log(`${j} x ${i}=${n}`)
    }
    let g = 5
    let e = 9;
    
    //create a temporary variable
    let temp;
    
    //swap variables
    temp = g;
    g = e;
    e = temp;
    
    console.log(`The value of g after swapping: ${g}`);
    console.log(`The value of e after swapping: ${e}`);
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    
    console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
    // Expected output: "The index of the first "dog" from the end is 52"
    function Sum(num1, num2) {
			return num1 + num2;
		};

		var result = Sum(10,20);
    console.log(result);
    