let num1 = 5;
let num2 = 10;
let str1 = "saqlain";
let str2 = "shah";
let bool1 = true;
let bool2 = false;
let bigNum1 = 9999999999999999999n;
let bigNum2 = 10000000000000000000n;
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Assignment operators
console.log(" Assignment operators ");
num1 += 5;
str1 += " syed";

// Comparison operators
console.log("\n Using Comparison operators ");
let isNum1EqualNum2 = num1 === num2;
console.log(isNum1EqualNum2);

let isNum1NotEqualNum2 = num1 !== num2;
console.log(isNum1NotEqualNum2);

let isNum1LessThanNum2 = num1 < num2;
console.log(isNum1LessThanNum2);

let isNum1GreaterThanNum2 = num1 > num2;
console.log(isNum1GreaterThanNum2);

// Arithmetic operators
console.log("\n Using Arithmetic operators");
let sumOfNum1AndNum2 = num1 + num2;
console.log(sumOfNum1AndNum2);

let differenceOfNum1AndNum2 = num1 - num2;
console.log(differenceOfNum1AndNum2);

let productOfNum1AndNum2 = num1 * num2;
console.log(productOfNum1AndNum2);

let quotientOfNum1AndNum2 = num1 / num2;
console.log(quotientOfNum1AndNum2);

let remainderOfNum1AndNum2 = num1 % num2;
num1++; // num1 is now 11
num2--; // num2 is now 9
console.log(remainderOfNum1AndNum2);

// Bitwise operators
console.log("\n Using Bitwise operators");

let bitwiseAndOfNum1AndNum2 = num1 & num2;
console.log(bitwiseAndOfNum1AndNum2);

let bitwiseOrOfNum1AndNum2 = num1 | num2;
console.log(bitwiseOrOfNum1AndNum2);

let bitwiseXorOfNum1AndNum2 = num1 ^ num2;
console.log(bitwiseXorOfNum1AndNum2);

let bitwiseNotOfNum1 = ~num1;
console.log(bitwiseNotOfNum1);

let leftShiftOfNum1By2 = num1 << 2;
console.log(leftShiftOfNum1By2);

let rightShiftOfNum1By2 = num1 >> 2;
console.log(rightShiftOfNum1By2);

let zeroFillRightShiftOfNum1By2 = num1 >>> 2;
console.log(zeroFillRightShiftOfNum1By2);

// Logical operators
console.log("\n Using Logical operators");

let andOfBool1AndBool2 = bool1 && bool2;
console.log(andOfBool1AndBool2);

let orOfBool1AndBool2 = bool1 || bool2;
console.log(orOfBool1AndBool2);

let notOfBool1 = !bool1;
console.log(notOfBool1);

// BigInt operators
console.log("\n Using BigInt operators");

let sumOfBigNum1AndBigNum2 = bigNum1 + bigNum2;
console.log(sumOfBigNum1AndBigNum2);

let differenceOfBigNum1AndBigNum2 = bigNum1 - bigNum2;
console.log(differenceOfBigNum1AndBigNum2);

let productOfBigNum1AndBigNum2 = bigNum1 * bigNum2;
console.log(productOfBigNum1AndBigNum2);
let quotientOfBigNum1AndBigNum2 = bigNum1 / bigNum2;
console.log(quotientOfBigNum1AndBigNum2);
let remainderOfBigNum1AndBigNum2 = bigNum1 % bigNum2;
console.log(remainderOfBigNum1AndBigNum2);

// String operators
console.log("\n Using String operators");

let concatenatedStr1AndStr2 = str1.concat(" ", str2);
let trimmedStr1 = str1.trim();
let slicedStr2 = str2.slice(1, 4);
let replacedStr1 = str1.replace("q", "Q");

// Conditional (ternary) operator
console.log("\n Using Conditional (ternary) operator ");

let maxOfNum1AndNum2 = num1 > num2 ? num1 : num2;
console.log(maxOfNum1AndNum2);

// Comma operator
let resultOfCommaOperator = (num1++, num2++, num1 + num2); // num1 is now 12, num2 is now 10
console.log(resultOfCommaOperator);

// Unary operators
console.log("\n Using Unary operator ");
let negationOfNum1 = -num1;
console.log(negationOfNum1);
let incrementOfNum2 = ++num2;
console.log(incrementOfNum2);
let typeofStr1 = typeof str1;
console.log(typeofStr1);

// Relational operators
console.log("\n Using Relational operator ");
let isArrayArr1 = Array.isArray(arr1);
console.log(isArrayArr1);
let lengthOfArr2 = arr2.length;
console.log(lengthOfArr2);

// Using String Operators
console.log("\n Using String Operators ");
console.log(str1.concat("!", " Welcome to the program"));
console.log(str1 + " is " + str2);

// Using Conditional Operator
console.log("\n Using Conditional Operator ");
console.log(num1 > num2 ? "num1 is greater" : "num2 is greater");

// Using Comma Operator
console.log("\n Using Comma Operator ");
let i, j;
for (i = 0, j = 10; i < j; i++, j--) {
  console.log(`i is ${i} and j is ${j}`);
}

// Using a Loop with Operators
console.log("\n Using a Loop with Operators \n ");
let result = "";
let trainees = [
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
for (let i = 0; i < trainees.length; i++) {
  result += trainees[i] + " ";
}
console.log(result);

// Using Ternary and Logical Operators
console.log("\n Using Ternary and Logical Operators ");
let age = 25;
let allowed = age >= 18 ? true : false;
console.log(`Are you allowed to vote? ${allowed}`);

let isAdmin = false;
let isModerator = true;
let canDelete = isAdmin || isModerator ? true : false;
console.log(`Can you delete a post? ${canDelete}`);
