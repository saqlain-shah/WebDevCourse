let a=[2,3,5,6,4];
let b=a.reduce((acc, cur)=>acc+cur);
console.log(b);


const numbers=[100,40,10]
const output=numbers.reduce(add);
console.log(output);

function add(total, num){
    return total-num;
}
