//write a code to check if a number is odd or even
const number: number = 25;

if (number % 2 === 1) {
  console.log(number + " is an odd number");
} else {
  console.log(number + " is an even number");
}

//write a code to check if a number is prime or not
const num: number = 7;
let isPrime: boolean = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}

//write a code to find the sum of the numbers 1 to N
const N: number = 5;
let sum: number = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log("The sum of numbers from 1 to " + N + " is: " + sum);

//write a code to find the factorial of a number
const factorialNum: number = 4;
let factorial: number = 1;
for (let i = 1; i <= factorialNum; i++) {
  factorial *= i;
}
console.log("The factorial of " + factorialNum + " is: " + factorial);

//write a code to print the first N fibonacci numbers
const n: number = 15;

let first: number = 1;
let second: number = 1;

if (n === 1) {
  console.log(first);
} else if (n === 2) {
  console.log(first + ", " + second);
} else {
  let output: string = first + ", " + second;

  for (let i = 3; i <= n; i++) {
    let next: number = first + second;
    output = output + ", " + next;

    first = second;
    second = next;
  }

  console.log(output);
}
