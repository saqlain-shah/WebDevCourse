let x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied
let d = 1, y = 3;
console.log( y - d ); // 2, binary minus subtracts values
let name="Shamdun"+"Travel";
console.log(name);
console.log('1' +1);
let output = 2 * 2 + 1;

console.log( output ); // 5
let n = 2;
n = n + 5;
n = n * 2;
console.log(n);
let m = 2;
m += 5; // now n = 7 (same as n = n + 5)
m *= 2; // now n = 14 (same as n = n * 2)

console.log( m ); // 14
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); // 3
let a = (1 + 2, 3 + 4);

console.log( a ); // 7 (the result of 3 + 4)
let f = 1, b = 1;

let c = ++f; // ?
let h = b++; // ?
console.log(c);
console.log(h);