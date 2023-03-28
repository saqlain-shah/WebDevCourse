let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log( i );
    i++;}
    let condition = 3;
while (condition) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( condition );
  condition--;
}
let value = 0;
do {
  console.log( value );
  value++;
} while (value < 3);
for (let k = 0; k < 3; k++) { // shows 0, then 1, then 2
    console.log(k);
  }